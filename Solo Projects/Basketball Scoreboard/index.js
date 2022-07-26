/* ======================================
        VARIABLE & OBJECT DECLARATIONS
========================================= */
const homeScore = document.getElementById('home-score');
const guestScore = document.getElementById('guest-score');

// get the home & guest scores and convert them to a number
const TotalHomeScore = Number(homeScore.textContent)   
const TotalGuestScore = Number(guestScore.textContent)

// Get buttons
const homeButtons = document.querySelectorAll('.home-button-wrapper');
const guestButtons = document.querySelectorAll('.guest-button-wrapper');
const resetButton = document.getElementById('reset-game');

const hScoreObj = {
        add1: 1,
        add2: 2,
        add3: 3
}

const qScoreObj = {
        add1: 1,
        add2: 2,
        add3: 3
}



/* ======================================
        GLOBAL FUNCTIONS
========================================= */




/* ============================
        FUNCTIONS
=============================== */

// function addToHomeScore() {
//         add1home.addEventListener('click', function (e) {
//                 e.preventDefault;
//                 console.log('test successful');
//         })
// }

// addToHomeScore();
