const questionClick = document.getElementsByClassName('heading');
const answerArr = document.getElementsByClassName('expanded-text');
const arrowButton = document.getElementsByClassName('arrow-btn');

for (let i = 0; i < questionClick.length; i++) {

    questionClick[i].addEventListener('click', function () {

        for (let j = 0; j < arrowButton.length; j++) {
            for (let k = 0; k < answerArr.length; k++) {
                arrowButton[i].classList.toggle('clicked-arrow-btn');
                answerArr[i].classList.toggle('active');
                questionClick[i].classList.toggle('active');
            }
        }
    });
}