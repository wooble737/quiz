from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Quiz, Question, QuestionOption

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'first_name', 'last_name']

class QuestionOptionSerializer(serializers.ModelSerializer):
    class Meta:
        model = QuestionOption
        fields = ['id', 'option_text', 'option_order']

class QuestionSerializer(serializers.ModelSerializer):
    options = QuestionOptionSerializer(many=True, read_only=True)
    
    class Meta:
        model = Question
        fields = ['id', 'question_text', 'correct_answer', 'correct_answer_text', 'question_type', 'order', 'options']

class QuizSerializer(serializers.ModelSerializer):
    questions = QuestionSerializer(many=True, read_only=True)
    user = UserSerializer(read_only=True)

    class Meta:
        model = Quiz
        fields = ['id', 'title', 'created_at', 'extracted_text', 'user', 'questions']