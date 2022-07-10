/*============================
        VARIABLE DECLARATIONS
==============================*/
const prevButton = document.getElementById('prev-btn');
const nextButton = document.getElementById('next-btn');

const testimonials = document.getElementsByClassName('testimony-container');
const totalTestimonials = testimonials.length;
let testimonyPosition = 0;


/*============================
        FUNCTIONS
==============================*/
function hideTestimonials() {
    for (let testimonial of testimonials) {
        testimonial.classList.remove('testimonial-visible');
        testimonial.classList.add('.testimony-hidden');
    }
}

function moveToNextTestimony() {
    hideTestimonials()
    if (testimonyPosition === totalTestimonials) {
        testimonyPosition = 0;
    } else {
        testimonyPosition++;
    }
    testimonials[testimonyPosition].classList.add('testimonial-visible');
}

function moveToPrevTestimony() {
    hideTestimonials()
    if (testimonyPosition === 0) {
        testimonyPosition = totalTestimonials - 1;
    } else {
        testimonyPosition--;
    }
    testimonials[testimonyPosition].classList.add('testimonial-visible');
}

/*==========================
        EVENT LISTENERS
============================*/
nextButton.addEventListener('click', function (event) {
    event.preventDefault();
    moveToNextTestimony();
})

prevButton.addEventListener('click', function (event) {
    event.preventDefault();
    moveToPrevTestimony();
})