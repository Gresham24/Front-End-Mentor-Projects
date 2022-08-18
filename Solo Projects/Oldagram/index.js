// Render the HTML to the JS
// Deconstruct the object - create variables of the object properties 
// Add the variables to the HTML on the JS
// create a function where the like count increases and gets stored in a variable
// create an event listener that alls the function

/* ============================
    VARIABLES
=============================== */

const post1LikeBtn = document.getElementById('like-post-1');
const post1img = document.getElementById('post-image-1');
const post1likeCount = document.getElementById('likes-post-1');

const post2LikeBtn = document.getElementById('like-post-2');
const post2img = document.getElementById('post-image-2');
const post2likeCount = document.getElementById('likes-post-2');

const post3LikeBtn = document.getElementById('like-post-3');
const post3img = document.getElementById('post-image-3');
const post3likeCount = document.getElementById('likes-post-3');

const userName = document.querySelectorAll('.username');

const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
    {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]


/* ============================
    FUNCTIONS
=============================== */

function displayVincetLikes() {
    let vincentLikes = posts[0].likes;
    vincentLikes++;
    post1likeCount.innerText = `${vincentLikes} likes`;
}

function displayGustaveLikes() {
    let gustaveLikes = posts[1].likes;
    gustaveLikes++;
    post2likeCount.innerText = `${gustaveLikes} likes`;
}

function displayJosephLikes() {
    let josephLikes = posts[2].likes;
    josephLikes++;
    post3likeCount.innerText = `${josephLikes} likes`;
}

/* ============================
    EVENT LISTENERS
=============================== */

// Post one like buttons 
post1LikeBtn.addEventListener('click', function () {
    displayVincetLikes()
})

post1img.addEventListener('dblclick', function () {
    displayVincetLikes()
})

// Post two like buttons 
post2LikeBtn.addEventListener('click', function () {
    displayGustaveLikes()
})

post2img.addEventListener('dblclick', function () {
    displayGustaveLikes()
})

// Post three like buttons 
post3LikeBtn.addEventListener('click', function () {
    displayJosephLikes()
})

post3img.addEventListener('dblclick', function () {
    displayJosephLikes()
})