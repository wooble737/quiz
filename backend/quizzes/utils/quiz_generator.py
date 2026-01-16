import openai
import json
import random
from typing import List, Dict, Any

# Initialize client with DeepSeek endpoint
client = openai.OpenAI(
    api_key="sk-400bb8428efe45a684bcb5b7de486d3f",
    base_url="https://api.deepseek.com"
)


class QuizGenerator:
    """Generate quiz questions from text content using DeepSeek AI"""
    
    def __init__(self, num_questions: int = 5, num_options: int = 4):
        """
        Initialize the QuizGenerator
        
        Args:
            num_questions: Number of questions to generate (default: 5)
            num_options: Number of options per question (default: 4)
        """
        self.num_questions = num_questions
        self.num_options = num_options
    
    def generate_quiz(self, text: str, ai_notes: str = '', question_type: str = 'multiple_choice') -> List[Dict[str, Any]]:
        """
        Generate a complete quiz from text using DeepSeek AI
        
        Args:
            text: Source text content
            ai_notes: Optional special instructions for AI
            question_type: multiple_choice | true_false | open
            
        Returns:
            List of question dictionaries with format:
            multiple_choice/true_false:
                {
                    'question': 'question text',
                    'options': [...],
                    'correctAnswer': 0  # index of correct answer
                }
            open:
                {
                    'question': 'question text',
                    'options': [],
                    'correctAnswer': None,
                    'correctAnswerText': 'expected answer'
                }
        """
        if not text or len(text.strip()) < 50:
            raise ValueError("Text is too short to generate meaningful questions")
        
        try:
            # Prepare AI prompt per question type
            if question_type == 'true_false':
                format_hint = """{
    "questions": [
        {
            "question": "Statement text",
            "options": ["True", "False"],
            "correct_answer": 0
        }
    ]
}"""
                instructions = "Return only True/False questions. Use options exactly ['True','False']. " \
                               "correct_answer must be 0 for True or 1 for False."
            elif question_type == 'open':
                format_hint = """{
    "questions": [
        {
            "question": "Open-ended question",
            "correct_answer_text": "Expected concise answer"
        }
    ]
}"""
                instructions = "Return open-ended questions that require a short textual answer. " \
                               "Include correct_answer_text as the expected answer. Do not include options."
            else:
                # multiple_choice default
                format_hint = """{
    "questions": [
        {
            "question": "What is...",
            "options": ["option 1", "option 2", "option 3", "option 4"],
            "correct_answer": 0
        }
    ]
}"""
                instructions = "Create multiple choice questions with exactly 4 options and one correct answer. " \
                               "correct_answer must be the index (0-3) of the correct option."

            system_prompt = """You are an expert quiz generator. Create high-quality questions that:
            1. Test distinct key concepts from the text (avoid repeating the same idea)
            2. Use varied phrasing across questions
            3. Provide one unambiguous correct answer (or concise expected answer for open-ended)
            4. Keep options plausible but only one correct
            
            IMPORTANT: Return ONLY valid JSON, no markdown formatting or code blocks."""
            
            user_prompt = f"""Generate {self.num_questions} {question_type.replace('_', '-')} questions from this text:

{text[:3000]}  

{f'Special instructions: {ai_notes}' if ai_notes else ''}

Return ONLY a JSON object (no markdown, no code blocks) in this exact format:
{format_hint}

{instructions}"""

            response = client.chat.completions.create(
                model="deepseek-chat",
                messages=[
                    {"role": "system", "content": system_prompt},
                    {"role": "user", "content": user_prompt}
                ],
                temperature=0.85,
                max_tokens=3000
            )
            
            # Get response content
            content = response.choices[0].message.content.strip()
            
            # Remove markdown code blocks if present
            if content.startswith('```'):
                # Remove first line with ```json or ```
                lines = content.split('\n')
                content = '\n'.join(lines[1:])
                # Remove closing ```
                if content.endswith('```'):
                    content = content[:-3].strip()
            
            # Parse JSON response
            data = json.loads(content)
            
            # Extract questions
            questions = data.get('questions', [])
            
            if not questions:
                raise ValueError("No questions generated by AI")
            
            # Convert to expected format and drop near-duplicates
            formatted_questions = []
            seen = set()
            for q in questions:
                stem = str(q.get('question', '')).strip()
                if not stem:
                    continue
                key = stem.lower()
                if key in seen:
                    continue
                seen.add(key)

                if question_type == 'open':
                    formatted_questions.append({
                        'question': stem,
                        'options': [],
                        'correctAnswer': None,
                        'correctAnswerText': q.get('correct_answer_text', '').strip(),
                        'question_type': question_type
                    })
                elif question_type == 'true_false':
                    options = q.get('options') or ["True", "False"]
                    formatted_questions.append({
                        'question': stem,
                        'options': options[:2],
                        'correctAnswer': int(q.get('correct_answer', 0)),
                        'question_type': question_type
                    })
                else:
                    options = q.get('options', [])
                    formatted_questions.append({
                        'question': stem,
                        'options': options[:4],  # Ensure exactly 4 options
                        'correctAnswer': int(q['correct_answer']),  # Ensure it's an integer
                        'question_type': question_type
                    })

                if len(formatted_questions) >= self.num_questions:
                    break

            # Randomize order to avoid patterned output
            random.shuffle(formatted_questions)
            return formatted_questions
            
        except json.JSONDecodeError as e:
            print(f"JSON parsing error: {e}")
            print(f"Response content: {content}")
            raise ValueError(f"Failed to parse AI response as JSON: {str(e)}")
        except Exception as e:
            print(f"Error generating quiz: {e}")
            raise ValueError(f"Failed to generate quiz: {str(e)}")