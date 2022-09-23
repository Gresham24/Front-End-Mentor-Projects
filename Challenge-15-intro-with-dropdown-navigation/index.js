

// TO DO: ADD SMOOTH TRANSITION

/* ============================
    MOBILE INTERACTIVITY 
=============================== */


const overlay = document.querySelector('main');

const closeMenuButton = document.getElementById('menu-close-btn');
const showMenuButton = document.getElementById('menu-toggle-btn');
const navBar = document.getElementById('nav-bar');

function showNavMenu() {
    navBar.classList.toggle('shown');    
    overlay.className = 'bg-cover';
}

function hideNavMenu() {
    navBar.classList.remove('shown');
    overlay.classList.toggle('bg-cover');

}

showMenuButton.addEventListener('click', showNavMenu);
closeMenuButton.addEventListener('click', hideNavMenu);


// Nav accordion

const featuresButton = document.getElementById('features-btn');
const featuresLinks = document.getElementById('features-links');
const companyButton = document.getElementById('company-btn');
const companyLinks = document.getElementById('company-links');


function toggleFeaturesBtn() {
    featuresLinks.classList.toggle('shown');
    featuresButton.classList.toggle('arrow-flip');
}

function toggleCompanyBtn() {
    companyLinks.classList.toggle('shown');
    companyButton.classList.toggle('arrow-flip');
}

featuresButton.addEventListener('click', toggleFeaturesBtn);
companyButton.addEventListener('click', toggleCompanyBtn);
