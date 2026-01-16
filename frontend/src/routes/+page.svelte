<script>
  import './home.css';
  import { onMount } from 'svelte';

  let loggedIn = false;
  let checking = true;

  onMount(async () => {
    const token = localStorage.getItem('access_token');
    if (!token) {
      loggedIn = false;
      checking = false;
      return;
    }
    // Validate token with a lightweight authenticated request
    try {
      const res = await fetch('http://localhost:8000/api/quizzes/', {
        headers: { Authorization: `Bearer ${token}` }
      });
      loggedIn = res.ok;
    } catch {
      loggedIn = false;
    } finally {
      checking = false;
    }
  });

  const handleCreateQuiz = () => {
    const token = localStorage.getItem('access_token');
    if (!token || !loggedIn) {
      window.location.href = '/login';
    } else {
      window.location.href = '/upload';
    }
  };
</script>

<svelte:head>
  <title>Quiz Maker - Home</title>
</svelte:head>

<main style="width: 100%; min-height: 100vh; padding: 40px 20px;">
  <div class="container">
    <!-- Header -->
    <header class="header">
      <div class="brand">
        <span>THE BEST</span>
        <span style="color: var(--color-primary);">Quiz Maker</span>
      </div>
      <div style="display:flex; align-items:center; gap:12px;">
        <span style="font-size:0.9rem; color: var(--color-text-secondary);">
        </span>
        <button on:click={handleCreateQuiz} class="cta-btn">
          Generate Quiz
        </button>
      </div>
    </header>

    <!-- Hero Section -->
    <section class="hero">
      <h1>Build Quizzes that Engage</h1>
      <p>Upload PDF or JPG files and automatically generate interactive quizzes from the content.</p>
    </section>

    <!-- Feature Cards -->
    <div class="card-grid">
      <div class="quiz-card card-1">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin: 0 auto 15px; display: block;">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
          <line x1="16" y1="13" x2="8" y2="13"></line>
          <line x1="16" y1="17" x2="8" y2="17"></line>
          <polyline points="10 9 9 9 8 9"></polyline>
        </svg>
        <h3>PDF Upload</h3>
        <p>Extract text from PDF documents automatically.</p>
      </div>

      <div class="quiz-card card-2">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin: 0 auto 15px; display: block;">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
          <circle cx="8.5" cy="8.5" r="1.5"></circle>
          <polyline points="21 15 16 10 5 21"></polyline>
        </svg>
        <h3>Image OCR</h3>
        <p>Scan text from JPG and PNG images.</p>
      </div>

      <div class="quiz-card card-3">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin: 0 auto 15px; display: block;">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
        </svg>
        <h3>Smart Generation</h3>
        <p>AI-powered quiz question creation.</p>
      </div>

      <div class="quiz-card card-4">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin: 0 auto 15px; display: block;">
          <path d="M9 11l3 3L22 4"></path>
          <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
        </svg>
        <h3>Interactive Quiz</h3>
        <p>Take quizzes with instant feedback.</p>
      </div>

      <div class="quiz-card card-5">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin: 0 auto 15px; display: block;">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
        </svg>
        <h3>Results & Review</h3>
        <p>Review answers with detailed explanations.</p>
      </div>
    </div>
  </div>
</main>
