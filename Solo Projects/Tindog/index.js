// hasBeenSwiped should be set to tru when one of the buttons are clicked
// hasBeenLiked should only be set to true when you click on the heart button
// LIKE and NOPE badges should display for 2 seconds on the post - use setTimeout()


import Dog from './Dog.js';
import dogsData from './data.js';

const likeButton = document.getElementById('accept-btn');
const dislikeButton = document.getElementById('decline-btn');
const mainPost = document.getElementById('main-post');
const yesBadge = document.getElementById('yes-badge');

let hasBeenSwiped = false;
let hasBeenLiked = false;

let currentDogIndex = 0;
let currentDog = new Dog(dogsData[currentDogIndex]);

likeButton.addEventListener('click', yes);


render();

function render() {
    mainPost.innerHTML = currentDog.getDogHtml();
}

function getNewDog() {
    currentDogIndex += 1;
    currentDog = new Dog(dogsData[currentDogIndex]);
    render();
}

function yes() {
    currentDog.setMatchStatus(true);
    if (!hasBeenLiked) {
        hasBeenLiked = true;
        yesBadge.classList.toggle('show-badge');
    }
    setTimeout(() => {
        getNewDog();
        yesBadge.style.display = "none";
    }, 2000);
}
