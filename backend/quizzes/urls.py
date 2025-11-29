from django.urls import path
from . import views

urlpatterns = [
    path('quizzes/', views.QuizListCreateView.as_view(), name='quiz-list-create'),
    path('questions/', views.QuestionCreateView.as_view(), name='question-create'),
]