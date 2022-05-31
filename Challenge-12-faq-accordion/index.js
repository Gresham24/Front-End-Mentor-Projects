// When accordion item (heading) is clicked:
// it will get an active state (class with bolded text)
// it will display the extended text
// it will remove the show-text  class from any other accordion item that was clicked previously
//      if they have any 

/*************** TO DO ***************/ 
// 1. Get the clicked state of the faq item and store it in a variable
// 2. Once an item is clicked:
//      - change the color of the question to bold (set the active state)
//      - flip the arrow icon image 180 degrees
//      - show the expanded-text (answer) for the clicked variable 
//          -- by adding the styling of expanded-text class (display: 'flex')   
//  3. check to see if the faq item clicked state is inactive (clicked again)
//  4. if clicked again
//      - hide the expanded-text class
//      - rotate the arrow icon back
//      - remove the active state 


const questionClick = document.getElementsByClassName('heading');
const answer = document.getElementsByClassName('expanded-text');

// Use this function to store the click events
// function accordion () {
//     alert('clicked');
// }

// Function to display the expanded text
function displayText() {
    for (let i = 0; i < answer.length; i++) {
        answer[i].style.display = 'flex';
    }
}

for (let j = 0; j < questionClick.length; j++) {
    questionClick[j].addEventListener('click', function () {
        if (questionClick[j]) {
            // questionClick[j].className = 'selected-item';
            questionClick[j].classList.add('selected-item');
            displayText();
        }


        // for (let j = 0; j < answer.length; j++) {
        //    if (answer[j] === activeElement) {
        //        content
        //    }
        //     // answer[j].style.display = 'flex';
        // }
        // answer.style.display = 'flex'
        // alert('clicked');
    });
}