# Quiz App

A full-stack quiz application with Django backend and SvelteKit frontend.

## Project Structure

- `backend/` - Django REST API
- `frontend/` - SvelteKit web application

## Setup

### Backend (Django)

1. Navigate to backend directory:
   ```bash
   cd backend
   ```

2. Activate virtual environment:
   ```bash
   # On Windows
   .venv\Scripts\activate
   ```

3. Run migrations:
   ```bash
   python manage.py migrate
   ```

4. Start server:
   ```bash
   python manage.py runserver
   ```

Backend will be available at `http://localhost:8000`

### Frontend (SvelteKit)

1. Navigate to frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start dev server:
   ```bash
   npm run dev
   ```

Frontend will be available at `http://localhost:5174`

## Features

- User registration and login
- Create and manage quizzes
- Add questions to quizzes
- Responsive web interface

## API Endpoints

- `POST /api/auth/register/` - Register new user (returns JWT tokens)
- `POST /api/auth/login/` - Login user (returns JWT tokens)
- `GET /api/quizzes/` - List user's quizzes (requires auth)
- `POST /api/quizzes/` - Create new quiz (requires auth)
- `POST /api/questions/` - Create new question (requires auth)