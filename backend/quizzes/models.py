from django.db import models
from django.contrib.auth.models import User


class Quiz(models.Model):
    title = models.CharField(max_length=200)
    created_at = models.DateTimeField(auto_now_add=True)
    extracted_text = models.TextField()
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True, blank=True)
    
    def __str__(self):
        return self.title

class Question(models.Model):
    quiz = models.ForeignKey(Quiz, on_delete=models.CASCADE, related_name='questions')
    question_text = models.TextField()
    # Default to 0; allow null for open-ended questions
    correct_answer = models.IntegerField(null=True, blank=True, default=0)
    # Store textual answer for open-ended questions
    correct_answer_text = models.TextField(null=True, blank=True)
    # Keep question type to satisfy existing DB NOT NULL constraint; default to multiple choice
    question_type = models.CharField(max_length=50, default='multiple_choice')
    order = models.IntegerField(default=0)
    
    class Meta:
        ordering = ['order']
    
    def __str__(self):
        return self.question_text[:50]

class QuestionOption(models.Model):
    question = models.ForeignKey(Question, on_delete=models.CASCADE, related_name='options')
    option_text = models.CharField(max_length=500)
    option_order = models.IntegerField()
    
    class Meta:
        ordering = ['option_order']
    
    def __str__(self):
        return self.option_text[:50]

class QuizAttempt(models.Model):
    quiz = models.ForeignKey(Quiz, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True, blank=True)
    score = models.IntegerField()
    total_questions = models.IntegerField()
    completed_at = models.DateTimeField(auto_now_add=True)
    answers = models.JSONField()  # Store user's answers
    
    def get_percentage(self):
        return round((self.score / self.total_questions) * 100)