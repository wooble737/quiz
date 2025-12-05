// Quiz handling
let currentQuestionIndex = 0;
let selectedAnswers = {};
let showingResults = false;

// DOM elements
const questionCounter = document.getElementById('question-counter');
const totalQuestionsSpan = document.getElementById('total-questions');
const toggleTextBtn = document.getElementById('toggle-text-btn');
const sourceTextContainer = document.getElementById('source-text-container');
const progressFill = document.getElementById('progress-fill');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const quizArea = document.getElementById('quiz-area');
const resultsArea = document.getElementById('results-area');
const scoreDisplay = document.getElementById('score-display');
const scoreText = document.getElementById('score-text');
const reviewBtn = document.getElementById('review-btn');
const reviewArea = document.getElementById('review-area');

// Initialize
totalQuestionsSpan.textContent = questions.length;
displayQuestion();

// Toggle source text
let showingText = false;
toggleTextBtn.addEventListener('click', () => {
    showingText = !showingText;
    sourceTextContainer.style.display = showingText ? 'block' : 'none';
    toggleTextBtn.innerHTML = showingText 
        ? '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-right: 8px; display: inline; vertical-align: middle;"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>Hide Source Text'
        : '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-right: 8px; display: inline; vertical-align: middle;"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>View Source Text';
});

// Navigation buttons
prevBtn.addEventListener('click', () => {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        displayQuestion();
    }
});

nextBtn.addEventListener('click', () => {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        displayQuestion();
    } else {
        // Finish quiz
        showResults();
    }
});

// Review button
reviewBtn.addEventListener('click', () => {
    displayReview();
});

function displayQuestion() {
    const question = questions[currentQuestionIndex];
    
    // Update counter
    questionCounter.innerHTML = `Question ${currentQuestionIndex + 1} of <span id="total-questions">${questions.length}</span>`;
    
    // Update progress
    const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
    progressFill.style.width = progress + '%';
    
    // Update question text
    questionText.textContent = question.question;
    
    // Update options
    optionsContainer.innerHTML = '';
    question.options.forEach((option, index) => {
        const isSelected = selectedAnswers[question.id] === index;
        
        const button = document.createElement('button');
        button.className = 'question-option' + (isSelected ? ' selected' : '');
        button.innerHTML = `
            <div class="radio-circle">
                ${isSelected ? '<div class="radio-circle-inner"></div>' : ''}
            </div>
            <span>${option}</span>
        `;
        
        button.addEventListener('click', () => selectAnswer(question.id, index));
        
        optionsContainer.appendChild(button);
    });
    
    // Update navigation buttons
    prevBtn.disabled = currentQuestionIndex === 0;
    prevBtn.style.opacity = currentQuestionIndex === 0 ? '0.5' : '1';
    
    const hasAnswer = selectedAnswers[question.id] !== undefined;
    nextBtn.disabled = !hasAnswer;
    nextBtn.style.opacity = hasAnswer ? '1' : '0.5';
    nextBtn.textContent = currentQuestionIndex === questions.length - 1 ? 'Finish Quiz' : 'Next';
}

function selectAnswer(questionId, optionIndex) {
    selectedAnswers[questionId] = optionIndex;
    displayQuestion();
}

function showResults() {
    // Calculate score
    let score = 0;
    questions.forEach(question => {
        if (selectedAnswers[question.id] === question.correctAnswer) {
            score++;
        }
    });
    
    const percentage = Math.round((score / questions.length) * 100);
    
    // Hide quiz area, show results area
    quizArea.style.display = 'none';
    resultsArea.style.display = 'block';
    
    // Display score
    scoreDisplay.textContent = percentage + '%';
    scoreText.textContent = `You scored ${score} out of ${questions.length} questions correctly`;
    
    showingResults = true;
}

function displayReview() {
    reviewArea.innerHTML = '';
    
    questions.forEach((question, index) => {
        const userAnswer = selectedAnswers[question.id];
        const isCorrect = userAnswer === question.correctAnswer;
        
        const reviewCard = document.createElement('div');
        reviewCard.className = 'quiz-container';
        
        let reviewHTML = `
            <div style="display: flex; gap: 15px; align-items: flex-start;">
                ${isCorrect 
                    ? '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color: #10B981; flex-shrink: 0; margin-top: 4px;"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>'
                    : '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color: #EF4444; flex-shrink: 0; margin-top: 4px;"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>'
                }
                <div style="flex: 1;">
                    <p style="margin-bottom: 20px; color: var(--color-primary);">
                        ${index + 1}. ${question.question}
                    </p>
                    <div style="display: flex; flex-direction: column; gap: 10px;">
        `;
        
        question.options.forEach((option, optionIndex) => {
            const isUserAnswer = userAnswer === optionIndex;
            const isCorrectAnswer = question.correctAnswer === optionIndex;
            
            let className = 'question-option disabled';
            if (isCorrectAnswer) {
                className += ' answer-correct';
            } else if (isUserAnswer && !isCorrectAnswer) {
                className += ' answer-incorrect';
            }
            
            reviewHTML += `
                <div class="${className}" style="cursor: default;">
                    ${option}
                    ${isCorrectAnswer ? '<span style="margin-left: 10px; color: #10B981; font-weight: 600;">✓ Correct</span>' : ''}
                    ${isUserAnswer && !isCorrectAnswer ? '<span style="margin-left: 10px; color: #EF4444; font-weight: 600;">✗ Your answer</span>' : ''}
                </div>
            `;
        });
        
        reviewHTML += `
                    </div>
                </div>
            </div>
        `;
        
        reviewCard.innerHTML = reviewHTML;
        reviewArea.appendChild(reviewCard);
    });
    
    // Scroll to review
    reviewArea.scrollIntoView({ behavior: 'smooth' });
}
