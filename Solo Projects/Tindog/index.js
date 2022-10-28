// hasBeenSwiped should be set to tru when one of the buttons are clicked
// hasBeenLiked should only be set to true when you click on the heart button
// LIKE and NOPE badges should display for 2 seconds on the post - use setTimeout()


import Dog from './Dog.js';
import dogsData from './data.js';

const likeButton = document.getElementById('accept-btn');
const dislikeButton = document.getElementById('decline-btn');
const mainPost = document.getElementById('main-post');


let currentDogIndex = 0;
let currentDog = new Dog(dogsData[currentDogIndex]);

document.getElementById('accept-btn').addEventListener('click', yes);


render();

function render() {
    document.getElementById('main-post').innerHTML = currentDog.getDogHtml();
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

// mainPost.innerHTML = `<div id="post-img" class="post-img"><img src="images/dog-teddy.jpg" alt="picture of teddy"></div>
// <div class="user-info">
//     <h3 id="username-age">Teddy, 30</h3>
//     <p id="bio">How you doing?</p>
// </div>`