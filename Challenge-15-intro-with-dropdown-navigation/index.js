
/* ============================
    MOBILE INTERACTIVITY 
=============================== */


// TO DO: ADD SMOOTH TRANSITION
const closeMenuButton = document.getElementById('menu-close-btn');
const showMenuButton = document.getElementById('menu-toggle-btn');
const navBar = document.getElementById('nav-bar');

function showNavMenu() {
    navBar.classList.toggle('shown');
}

function hideNavMenu() {
    navBar.classList.remove('shown');
}

showMenuButton.addEventListener('click', showNavMenu);
closeMenuButton.addEventListener('click', hideNavMenu);
