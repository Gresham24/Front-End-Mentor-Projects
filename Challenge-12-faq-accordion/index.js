// When accordion item (heading) is clicked:
// it will get an active state (class with bolded text)
// it will display the extended text
// it will remove the show-text  class from any other accordion item that was clicked previously
//      if they have any 

/*************** TO DO ***************/ 
// 1. Get the clicked state of the faq item and store it in a variable [DONE]
// 2. Once an item is clicked:
//      - change the color of the question to bold (set the active state) [DONE]
//      - flip the arrow icon image 180 degrees (".clicked-arrow-btn") [DONE]
//      - show the expanded-text (answer) for the clicked variable  [DONE]
//          -- by adding the styling of expanded-text class (display: 'flex')   
//  3. check to see if the faq item clicked state is inactive (or clicked again)
//  4. if clicked again
//      - hide the expanded-text class
//      - rotate the arrow icon back
//      - remove the active state 
//  5. when clicked, show the text through altering the max-height and overflow hidden classes

const questionClick = document.getElementsByClassName('heading');
const answerArr = document.getElementsByClassName('expanded-text');
const arrowButton = document.getElementsByClassName('arrow-btn');

const answer1 = document.getElementById('answer-one'),
        answer2 = document.getElementById('answer-two'),
        answer3 = document.getElementById('answer-three'),
        answer4 = document.getElementById('answer-four'),
        answer5 = document.getElementById('answer-five');



// Use this function to store the click events


for (let i = 0; i < questionClick.length; i++) {
    questionClick[i].addEventListener('click', function () {
        if (questionClick[i]) {
            // iterates through each of the arrow buttons and flips the arrow button of the selected heading 
            for (let j = 0; j < arrowButton.length; j++) {
                arrowButton[i].classList.add('clicked-arrow-btn');
                for (let k = 0; k < answerArr.length; k++) {
                    // show the text by removing the overflow = hidden and adding max-height to the expanded text class
                    answerArr[i].classList.add('show-text');
                    
                }
            }
            questionClick[i].classList.add('selected-item');
        }
    });
}