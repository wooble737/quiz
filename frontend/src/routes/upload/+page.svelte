<script>
  let selectedFile = null;
  let aiNotes = '';
  let quizTitle = '';
  let questionMix = {
    multiple_choice: 5,
    true_false: 0,
    open: 0
  };
  $: totalQuestions =
    Number(questionMix.multiple_choice || 0) +
    Number(questionMix.true_false || 0) +
    Number(questionMix.open || 0);
  let loading = false;
  let error = '';
  let showOptions = false;

  const handleFileSelect = (file) => {
    selectedFile = file;
    showOptions = true;
    error = '';
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      const file = files[0];
      if (validateFile(file)) {
        handleFileSelect(file);
      }
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const validateFile = (file) => {
    const allowed = ['application/pdf', 'image/jpeg', 'image/jpg', 'image/png'];
    const maxSize = 16 * 1024 * 1024; // 16MB

    if (!allowed.includes(file.type)) {
      error = 'Invalid file type. Please upload a PDF or image (JPG/PNG).';
      return false;
    }
    if (file.size > maxSize) {
      error = 'File size exceeds 16MB limit.';
      return false;
    }
    return true;
  };

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    if (file && validateFile(file)) {
      handleFileSelect(file);
    }
  };

  const generateQuiz = async () => {
    if (!selectedFile) return;

    loading = true;
    error = '';

    try {
      const token = localStorage.getItem('access_token');
      if (!token) {
        window.location.href = '/login';
        return;
      }

      const formData = new FormData();
      const totalQuestions =
        Number(questionMix.multiple_choice || 0) +
        Number(questionMix.true_false || 0) +
        Number(questionMix.open || 0);

      if (totalQuestions < 1 || totalQuestions > 20) {
        throw new Error('Total questions must be between 1 and 20');
      }

      formData.append('file', selectedFile);
      formData.append('num_questions', totalQuestions.toString());
      formData.append('question_mix', JSON.stringify(questionMix));
      if (aiNotes.trim()) {
        formData.append('ai_notes', aiNotes);
      }
      if (quizTitle.trim()) {
        formData.append('custom_title', quizTitle);
      }

      console.log('Sending file upload request to /api/quizzes/upload/');
      const response = await fetch('http://localhost:8000/api/quizzes/upload/', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`
        },
        body: formData
      });

      console.log('Response status:', response.status);
      console.log('Response headers:', response.headers);
      
      const contentType = response.headers.get('content-type');
      console.log('Content-Type:', contentType);
      
      let data;
      
      if (contentType && contentType.includes('application/json')) {
        data = await response.json();
        console.log('Parsed JSON response:', data);
      } else {
        const text = await response.text();
        console.error('Received non-JSON response:');
        console.error('Status:', response.status);
        console.error('Content-Type:', contentType);
        console.error('Response body (first 500 chars):', text.substring(0, 500));
        error = `Server returned invalid response (${response.status}): ${contentType || 'unknown type'}`;
        throw new Error(error);
      }

      if (response.status === 401 || response.status === 403) {
        error = 'Please log in to upload a file.';
        console.warn('Auth required, redirecting to login');
        window.location.href = '/login';
        return;
      }

      if (response.ok) {
        console.log('Quiz created successfully, redirecting to:', `/test_type/${data.quiz_id}`);
        window.location.href = `/test_type/${data.quiz_id}`;
      } else {
        error = data.error || data.detail || 'Failed to generate quiz';
        console.error('Error response:', data);
      }
    } catch (err) {
      error = 'Network error: ' + err.message;
      console.error('Upload error:', err);
    } finally {
      loading = false;
    }
  };

  const resetForm = () => {
    selectedFile = null;
    showOptions = false;
    questionMix = {
      multiple_choice: 5,
      true_false: 0,
      open: 0
    };
    aiNotes = '';
    quizTitle = '';
    error = '';
  };
</script>

<svelte:head>
  <title>Upload File - Quiz Maker</title>
</svelte:head>

<div style="width: 100%; min-height: 100vh; padding: 40px 20px;">
  <div class="container">
    <header class="header">
      <a href="/" class="brand" style="text-decoration: none;">
        <span>THE BEST</span>
        <span style="color: var(--color-primary);">Quiz Maker</span>
      </a>
      <button on:click={() => window.location.href='/'} class="btn-outline">
        Back to Home
      </button>
    </header>

    <div style="text-align: center; margin-bottom: 40px;">
      <h1>Upload Your File</h1>
      <p style="color: var(--color-text-secondary); margin-top: 10px;">
        Upload a PDF or image file to generate a quiz
      </p>
    </div>

    {#if loading}
      <div class="loading-spinner">
        <div class="spinner"></div>
        <p style="margin-top: 20px; color: var(--color-text-secondary);">
          Processing your file and generating {totalQuestions} questions...
        </p>
      </div>
    {:else}
      <div class="file-upload-area">
        {#if !showOptions}
          <div
            class="drag-drop-zone"
            on:drop={handleDrop}
            on:dragover={handleDragOver}
            role="button"
            tabindex="0"
            on:keydown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                document.getElementById('file-input')?.click();
              }
            }}
          >
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin: 0 auto 20px; color: var(--color-secondary); display: block;">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="17 8 12 3 7 8"></polyline>
              <line x1="12" y1="3" x2="12" y2="15"></line>
            </svg>
            <p style="color: var(--color-primary); margin-bottom: 8px;">
              Drag and drop your file here, or click to browse
            </p>
            <p style="color: var(--color-text-secondary); font-size: 0.9rem;">
              Supports PDF and JPG/PNG files
            </p>
            <input
              type="file"
              id="file-input"
              accept=".pdf,.jpg,.jpeg,.png"
              on:change={handleFileInputChange}
              style="display: none;"
            />
            <button
              on:click={() => document.getElementById('file-input')?.click()}
              style="margin-top: 20px; background: var(--color-cta-bg); color: white; padding: 12px 30px; border-radius: 50px; border: none; font-weight: 600; cursor: pointer;"
            >
              Browse Files
            </button>
          </div>
        {:else}
          <div class="quiz-options-form">
            <div style="display: flex; align-items: center; gap: 15px; margin-bottom: 24px; padding-bottom: 20px; border-bottom: 2px solid #e9d5ff;">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color: var(--color-cta-bg);">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
              </svg>
              <div>
                <p style="font-weight: 600; margin: 0; color: var(--color-primary);">{selectedFile.name}</p>
                <p style="opacity: 0.9; font-size: 0.9rem; margin: 4px 0 0 0; color: var(--color-text-secondary);">
                  {(selectedFile.size / 1024).toFixed(2)} KB
                </p>
              </div>
            </div>

            <div class="form-group">
              <label for="quiz-title">Quiz Title (Optional)</label>
              <input
                type="text"
                id="quiz-title"
                bind:value={quizTitle}
                placeholder="e.g., Biology Chapter 3"
                class="form-input"
              />
            </div>

            <fieldset class="form-group">
              <legend>Question Types & Counts (total ≤ 20)</legend>
              <div class="question-mix-grid">
                <div class="mix-item">
                  <label for="multiple-choice">Multiple Choice</label>
                  <input
                    type="number"
                    id="multiple-choice"
                    min="0"
                    max="20"
                    class="form-input"
                    bind:value={questionMix.multiple_choice}
                  />
                </div>
                <div class="mix-item">
                  <label for="true-false">True / False</label>
                  <input
                    type="number"
                    id="true-false"
                    min="0"
                    max="20"
                    class="form-input"
                    bind:value={questionMix.true_false}
                  />
                </div>
                <div class="mix-item">
                  <label for="open-ended">Open-ended</label>
                  <input
                    type="number"
                    id="open-ended"
                    min="0"
                    max="20"
                    class="form-input"
                    bind:value={questionMix.open}
                  />
                </div>
              </div>
              <p class="input-hint">Total: {Number(questionMix.multiple_choice||0) + Number(questionMix.true_false||0) + Number(questionMix.open||0)} (1–20)</p>
            </fieldset>

            <div class="form-group">
              <label for="ai-notes">Instructions for AI (Optional)</label>
              <textarea
                id="ai-notes"
                bind:value={aiNotes}
                placeholder="e.g., Focus on definitions, include tricky questions, test critical thinking..."
                class="form-input"
                rows="4"
              ></textarea>
              <p class="input-hint">Give the AI specific instructions on how to generate your quiz</p>
            </div>

            {#if error}
              <div class="error-message">
                {error}
              </div>
            {/if}

            <div class="button-group">
              <button on:click={resetForm} class="btn-secondary">
                Choose Different File
              </button>
              <button
                on:click={generateQuiz}
                disabled={loading}
                class="btn-primary"
              >
                {loading ? 'Generating...' : 'Generate Quiz'}
              </button>
            </div>
          </div>
        {/if}
      </div>

      {#if !showOptions}
        <div class="card-grid" style="margin-top: 40px;">
          <div class="quiz-card card-1">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin: 0 auto 15px; display: block;">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
            </svg>
            <h3>PDF Documents</h3>
            <p>Upload PDF files containing text content like articles, study materials, or reports</p>
          </div>
          <div class="quiz-card card-4">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin: 0 auto 15px; display: block;">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
              <circle cx="8.5" cy="8.5" r="1.5"></circle>
              <polyline points="21 15 16 10 5 21"></polyline>
            </svg>
            <h3>Images</h3>
            <p>Upload JPG or PNG images with text. We'll use OCR to extract the text content</p>
          </div>
        </div>
      {/if}
    {/if}
  </div>
</div>

<style>
  .file-upload-area {
    background: white;
    border-radius: 20px;
    padding: 40px;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
    max-width: 600px;
    margin: 0 auto;
  }

  .drag-drop-zone {
    border: 2px dashed var(--color-secondary);
    border-radius: 16px;
    padding: 40px 20px;
    text-align: center;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .drag-drop-zone:hover {
    border-color: var(--color-cta-bg);
    background: #f0e6f6;
  }

  .quiz-options-form {
    animation: slideIn 0.3s ease;
  }

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .form-group {
    margin-bottom: 24px;
  }

  .form-group label {
    display: block;
    font-weight: 600;
    color: var(--color-primary);
    margin-bottom: 8px;
    font-size: 0.95rem;
  }

  fieldset.form-group legend {
    display: block;
    font-weight: 600;
    color: var(--color-primary);
    margin-bottom: 8px;
    font-size: 0.95rem;
    padding: 0;
    border: none;
  }

  .mix-item label {
    font-weight: 500;
    font-size: 0.9rem;
    color: var(--color-text-secondary);
  }

  .question-mix-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    gap: 12px;
    margin-top: 8px;
  }

  .mix-item {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  .form-input {
    width: 100%;
    padding: 12px 16px;
    border: 2px solid var(--color-form-border);
    border-radius: 10px;
    font-family: var(--ff-sans);
    font-size: 1rem;
    transition: all 0.2s ease;
    color: var(--color-primary);
  }

  .form-input:focus {
    outline: none;
    border-color: var(--color-form-focus-border);
    box-shadow: 0 0 0 3px rgba(155, 107, 158, 0.1);
  }

  .input-hint {
    font-size: 0.85rem;
    color: var(--color-text-secondary);
    margin-top: 6px;
    margin-bottom: 0;
  }

  .error-message {
    padding: 12px 16px;
    background: #FEE2E2;
    border: 1px solid #FCA5A5;
    border-radius: 10px;
    color: #DC2626;
    margin-bottom: 20px;
    font-size: 0.95rem;
  }

  .button-group {
    display: flex;
    gap: 12px;
    margin-top: 28px;
  }

  .btn-primary,
  .btn-secondary {
    flex: 1;
    padding: 12px 24px;
    border: none;
    border-radius: 10px;
    font-weight: 600;
    cursor: pointer;
    font-size: 1rem;
    transition: all 0.2s ease;
    font-family: var(--ff-sans);
  }

  .btn-primary {
    background: linear-gradient(135deg, var(--color-cta-bg) 0%, var(--color-accent-3) 100%);
    color: white;
    box-shadow: 0 8px 20px rgba(155, 107, 158, 0.25);
  }

  .btn-primary:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 12px 28px rgba(155, 107, 158, 0.35);
  }

  .btn-primary:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .btn-secondary {
    background: #f0e6f6;
    color: var(--color-primary);
    border: 2px solid var(--color-form-border);
  }

  .btn-secondary:hover {
    background: #e9d5ff;
    border-color: var(--color-secondary);
  }

  .loading-spinner {
    text-align: center;
    padding: 60px 20px;
  }

  .spinner {
    border: 4px solid #e9d5ff;
    border-top: 4px solid var(--color-cta-bg);
    border-radius: 50%;
    width: 50px;
    height: 50px;
    animation: spin 1s linear infinite;
    margin: 0 auto;
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
</style>