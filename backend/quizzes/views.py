from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated, AllowAny
from django.contrib.auth import authenticate, login
from django.contrib.auth.models import User
from .models import Quiz, Question
from .serializers import QuizSerializer, QuestionSerializer, UserSerializer

class QuizListCreateView(generics.ListCreateAPIView):
    serializer_class = QuizSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return Quiz.objects.filter(created_by=self.request.user)

    def perform_create(self, serializer):
        serializer.save(created_by=self.request.user)

class QuestionCreateView(generics.CreateAPIView):
    serializer_class = QuestionSerializer
    permission_classes = [IsAuthenticated]

class FileUploadView(APIView):
    permission_classes = [IsAuthenticated]
    
    def post(self, request):
        if 'file' not in request.FILES:
            return Response({'error': 'No file provided'}, status=status.HTTP_400_BAD_REQUEST)
        
        uploaded_file = request.FILES['file']
        
        # Validate file type
        allowed_types = ['application/pdf', 'image/jpeg', 'image/jpg', 'image/png']
        if uploaded_file.content_type not in allowed_types:
            return Response({'error': 'Invalid file type. Please upload PDF or image.'}, status=status.HTTP_400_BAD_REQUEST)
        
        # Validate file size (16MB)
        if uploaded_file.size > 16 * 1024 * 1024:
            return Response({'error': 'File size must be less than 16MB'}, status=status.HTTP_400_BAD_REQUEST)
        
        # Create a quiz
        quiz = Quiz.objects.create(
            title=f"Quiz from {uploaded_file.name}",
            created_by=request.user
        )
        
        # TODO: Process the file and generate questions
        # This is where you'd implement OCR/PDF parsing and AI question generation
        
        return Response({'quiz_id': quiz.id}, status=status.HTTP_201_CREATED)
