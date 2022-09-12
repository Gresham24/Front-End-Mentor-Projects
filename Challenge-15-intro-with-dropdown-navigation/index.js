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