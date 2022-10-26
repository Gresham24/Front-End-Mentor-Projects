// hasBeenSwiped should be set to tru when one of the buttons are clicked
// hasBeenLiked should only be set to true when you click on the heart button
// LIKE and NOPE badges should display for 2 seconds on the post - use setTimeout()



import dogsData from './data.js';
import Dog from './Dog.js';

const likeButton = document.getElementById('accept-btn');
const dislikeButton = document.getElementById('decline-btn');

let currentDogIndex = 0;
let currentDog = new Dog(dogsData[currentDogIndex]);

likeButton.addEventListener('click', yes);


render();

function render() {
    document.getElementById('card').innerHTML = currentDog.getDogHtml();
}

function getNewDog() {
    currentDogIndex += 1;
    currentDog = new Dog(dogsData[currentDogIndex]);
    render();
}

function yes() {
    currentDog.setMatchStatus(true);
    getNewDog();
}
