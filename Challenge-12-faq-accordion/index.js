/*************** TO DO ***************/

//  3. check to see if the faq item clicked state is inactive (or clicked again)
//  4. if clicked again
//      - hide the expanded-text class
//      - rotate the arrow icon back
//      - remove the active state 
//  5. when clicked, show the text through altering the max-height and overflow hidden classes


/*
Look into: 
- ToggleClass()
- if .wrapper + .active
- create a loop inside a function outside of the event listener
*/



const questionClick = document.getElementsByClassName('heading');
const answerArr = document.getElementsByClassName('expanded-text');
const arrowButton = document.getElementsByClassName('arrow-btn');

let i = null;

for (let i = 0; i < questionClick.length; i++) {
    questionClick[i].addEventListener('click', function () {

        for (let j = 0; j < arrowButton.length; j++) {
            for (let k = 0; k < answerArr.length; k++) {
                arrowButton[i].classList.toggle('clicked-arrow-btn');
                answerArr[i].classList.toggle('active');
                questionClick[i].classList.toggle('active');
            }
        }// console.log(selectedItem);
    });
}





// for (let i = 0; i < questionClick.length; i++) {


//     let selectedItem = questionClick[i];
//     selectedItem.addEventListener('click', function () {
//         if (selectedItem) {
//             for (let j = 0; j < arrowButton.length; j++) {      // iterates through each of the arrow buttons and flips the arrow button of the selected heading 
//                 for (let k = 0; k < answerArr.length; k++) {    // iterates through the expanded text class list to display the selected text
//                     arrowButton[i].classList.add('clicked-arrow-btn');
//                     answerArr[i].classList.add('show-text');    // show the text by removing the overflow = hidden and adding max-height to the expanded text class
//                     selectedItem.classList.add('selected-item');
//                 }
//             }
//         }
//         console.log(selectedItem);
//     });
// }

/* 
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

*/