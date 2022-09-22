
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


// Nav accordion

const featuresButton = document.getElementById('features-btn');
const companyButton = document.getElementById('company-btn');
const featuresLinks = document.getElementById('features-links');
const companyLinks = document.getElementById('company-links');


function toggleFeaturesBtn() {
    console.log('clicked');
    featuresLinks.classList.toggle('shown');
}

function toggleCompanyBtn() {
    console.log('clicked');
    companyLinks.classList.toggle('shown');
}

featuresButton.addEventListener('click', toggleFeaturesBtn);
companyButton.addEventListener('click', toggleCompanyBtn);
