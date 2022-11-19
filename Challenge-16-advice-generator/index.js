const adviceGeneratorBtn = document.getElementById('generate-advice');

adviceGeneratorBtn.addEventListener('click', function () {
    fetch('https://api.adviceslip.com/advice')
    .then(res => res.json())
    .then(data => {
        const adviceID = data.slip.id;
        const adviceText = data.slip.advice;
        document.getElementById('advice-id').textContent = `Advice #${data.slip.id}`;
        document.getElementById('advice-text').textContent = data.slip.advice;
    });
});
