const startButton = document.getElementById('start-button');

startButton.addEventListener('click', function (event) {
    event.preventDefault();

    const totalQuestions = 20;
    const randomIndex = Math.floor(Math.random() * totalQuestions);

    window.location.href = `questions.html?question=${randomIndex}`;
});