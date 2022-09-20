
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


/* ============================
    DESKTOP INTERACTIVITY 
=============================== */

const dropdownButton = document.getElementsByClassName('menu-item');
const companyButton = document.getElementById('company-btn');
const featuresButton = document.getElementById('features-btn');



Array.from(dropdownButton).forEach(item => {
    // console.log(item);

    item.addEventListener('click', buttonClickCheck);

});

// console.log(featuresButton.id);

function buttonClickCheck() {
    if (featuresButton.id == 'features-btn') {
        featuresButton.classList.toggle('active');    
        companyButton.classList.remove('active');
    }
    if (companyButton.id == 'company-btn') {
        companyButton.classList.toggle('active');    
        featuresButton.classList.remove('active');
    }
}