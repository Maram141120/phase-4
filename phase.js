
function updateScore(score) {
    document.getElementById('score-display').textContent = `Your score: ${score}`;
}
let timeLeft = 60; 

function startTimer() {
    const timerElement = document.getElementById('timer');
    const interval = setInterval(() => {
        timeLeft--;
        timerElement.textContent = `Time left: ${timeLeft}`;
        if (timeLeft <= 0) {
            clearInterval(interval);
            alert("Time's up!");
            
        }
    }, 1000);
}
let currentQuestionIndex = 0;

function showQuestion(index) {
    
}

document.getElementById('prev-question').addEventListener('click', () => {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion(currentQuestionIndex);
    }
});

document.getElementById('next-question').addEventListener('click', () => {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        showQuestion(currentQuestionIndex);
    }
});
// Provide feedback in your JavaScript
function provideFeedback(isCorrect) {
    const feedbackElement = document.getElementById('feedback');
    feedbackElement.textContent = isCorrect ? 'Correct!' : 'Incorrect. Try again!';
}



