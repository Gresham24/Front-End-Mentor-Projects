/* ======================================
        VARIABLE DECLARATIONS
========================================= */
const homeScoreDisplay = document.getElementById('home-score');
const guestScoreDisplay = document.getElementById('guest-score');

const resetButton = document.getElementById('reset-game');
const container = document.querySelector('.container');

let TotalHomeScore = 0;
let TotalGuestScore = 0;


/* ======================================
        FUNCTIONS
========================================= */

function resetGame() {
        TotalGuestScore = 0;
        TotalHomeScore = 0;
        guestScoreDisplay.textContent = TotalGuestScore;
        homeScoreDisplay.textContent = TotalHomeScore;
}


/* ============================
        EVENT LISTENERS
=============================== */

container.addEventListener('click', function (e) {
        const target = e.target;
        const home = target.dataset.homePoint;
        const guest = target.dataset.guestPoint;
        if (home) {
                TotalHomeScore += Number(home);
                homeScoreDisplay.textContent = TotalHomeScore;
        }

        if (guest) {
                TotalGuestScore += Number(guest);
                guestScoreDisplay.textContent = TotalGuestScore;
        }
})

resetButton.addEventListener('click', resetGame)


