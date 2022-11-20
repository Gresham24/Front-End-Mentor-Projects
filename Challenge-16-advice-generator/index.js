const adviceGeneratorBtn = document.getElementById('generate-advice');

adviceGeneratorBtn.addEventListener('click', function () {
    fetch('https://api.adviceslip.com/advice')
    .then(res => res.json())
    .then(data => {
        document.getElementById('advice-id').textContent = `Advice #${data.slip.id}`;
        document.getElementById('advice-text').textContent = data.slip.advice;
    });
});
