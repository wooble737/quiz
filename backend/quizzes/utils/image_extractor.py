import io
from typing import Optional, Dict, Any
try:
    from PIL import Image
    import pytesseract
except ImportError:
    Image = None
    pytesseract = None


class ImageExtractor:
    """Extract text from images using OCR"""
    
    def __init__(self, tesseract_path: Optional[str] = None):
        """
        Initialize the ImageExtractor
        
        Args:
            tesseract_path: Optional path to tesseract executable
        """
        if Image is None or pytesseract is None:
            raise ImportError(
                "PIL and pytesseract are required for image extraction. "
                "Install them with: pip install Pillow pytesseract"
            )
        
        # Set tesseract path if provided
        if tesseract_path:
            pytesseract.pytesseract.tesseract_cmd = tesseract_path
    
    def extract_text(self, image_content: bytes, lang: str = 'eng') -> str:
        """
        Extract text from an image using OCR
        
        Args:
            image_content: Image file content as bytes
            lang: Language for OCR (default: 'eng' for English)
            
        Returns:
            Extracted text as a string
        """
        try:
            # Open image from bytes
            image = Image.open(io.BytesIO(image_content))
            
            # Perform OCR
            text = pytesseract.image_to_string(image, lang=lang)
            
            return text.strip()
            
        except Exception as e:
            raise Exception(f"Error extracting text from image: {str(e)}")
    
    def extract_from_file_path(self, file_path: str, lang: str = 'eng') -> str:
        """
        Extract text from an image file path
        
        Args:
            file_path: Path to the image file
            lang: Language for OCR (default: 'eng' for English)
            
        Returns:
            Extracted text as a string
        """
        try:
            with open(file_path, 'rb') as file:
                return self.extract_text(file.read(), lang=lang)
        except FileNotFoundError:
            raise Exception(f"Image file not found: {file_path}")
        except Exception as e:
            raise Exception(f"Error reading image file: {str(e)}")
    
    def extract_with_confidence(self, image_content: bytes, lang: str = 'eng') -> Dict[str, Any]:
        """
        Extract text with confidence scores
        
        Args:
            image_content: Image file content as bytes
            lang: Language for OCR (default: 'eng' for English)
            
        Returns:
            Dictionary with text and confidence information
        """
        try:
            image = Image.open(io.BytesIO(image_content))
            
            # Get detailed data
            data = pytesseract.image_to_data(image, lang=lang, output_type=pytesseract.Output.DICT)
            
            # Extract text and calculate average confidence
            text_parts = []
            confidences = []
            
            for i, conf in enumerate(data['conf']):
                if int(conf) > 0:  # Only include words with positive confidence
                    text_parts.append(data['text'][i])
                    confidences.append(int(conf))
            
            text = ' '.join(text_parts).strip()
            avg_confidence = sum(confidences) / len(confidences) if confidences else 0
            
            return {
                'text': text,
                'confidence': avg_confidence,
                'word_count': len(text_parts)
            }
            
        except Exception as e:
            raise Exception(f"Error extracting text with confidence: {str(e)}")
    
    def preprocess_image(self, image_content: bytes) -> bytes:
        """
        Preprocess image to improve OCR accuracy
        
        Args:
            image_content: Original image content as bytes
            
        Returns:
            Preprocessed image as bytes
        """
        try:
            image = Image.open(io.BytesIO(image_content))
            
            # Convert to grayscale
            image = image.convert('L')
            
            # Enhance contrast (simple threshold)
            # You can add more preprocessing steps here
            
            # Convert back to bytes
            output = io.BytesIO()
            image.save(output, format='PNG')
            return output.getvalue()
            
        except Exception as e:
            raise Exception(f"Error preprocessing image: {str(e)}")
    
    def get_supported_languages(self) -> list:
        """
        Get list of supported languages for OCR
        
        Returns:
            List of language codes
        """
        try:
            return pytesseract.get_languages()
        except Exception as e:
            raise Exception(f"Error getting supported languages: {str(e)}")


# Convenience function for quick extraction
def extract_image_text(image_content: bytes, lang: str = 'eng') -> str:
    """
    Quick function to extract text from image
    
    Args:
        image_content: Image file content as bytes
        lang: Language for OCR (default: 'eng' for English)
        
    Returns:
        Extracted text as a string
    """
    extractor = ImageExtractor()
    return extractor.extract_text(image_content, lang=lang)
