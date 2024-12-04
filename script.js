const correctAnswers = {
    1: 'A',
    2: 'C',
    3: 'A',
    4: 'B',
    5: 'D',
    6: 'D',
    7: 'D',
    8: 'C',
    9: 'B',
    10: 'A',
    11: 'C',
    12: 'C',
    13: 'B',
    14: 'A',
    15: 'A',
    16: 'A',
    17: 'A'
};

let correctCount = 0;
let wrongCount = 0;

function checkAnswer(question, answer) {
    const popup = document.getElementById('popup');
    const message = document.getElementById('popup-message');
    if (correctAnswers[question] === answer) {
        message.textContent = 'Correto!';
        correctCount++;
    } else {
        message.textContent = `Errado! Resposta certa é: ${correctAnswers[question]}`;
        wrongCount++;
    }
    popup.classList.remove('hidden');
}

function closePopup() {
    const popup = document.getElementById('popup');
    popup.classList.add('hidden');
}

function showResults() {
    const resultsPopup = document.getElementById('results-popup');
    const resultsMessage = document.getElementById('results-message');
    const totalQuestions = Object.keys(correctAnswers).length;
    const correctPercent = ((correctCount / totalQuestions) * 100).toFixed(2);
    const wrongPercent = ((wrongCount / totalQuestions) * 100).toFixed(2);

    resultsMessage.innerHTML = `
        Acertos: ${correctCount}<br>
        Erros: ${wrongCount}<br>
        Percentual de Acertos: ${correctPercent}%<br>
        Percentual de Erros: ${wrongPercent}%
    `;
    resultsPopup.classList.remove('hidden');
}

function closeResultsPopup() {
    const resultsPopup = document.getElementById('results-popup');
    resultsPopup.classList.add('hidden');
}
