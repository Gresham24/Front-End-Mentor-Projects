/* ============================
    VARIABLES
=============================== */

const userPosts = document.getElementsByClassName('user-post');
const likeBtn = document.getElementsByClassName('like-button');
const btnWrapper = document.getElementsByClassName('post-button-wrapper');

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

// Loops through the classes that contain the posts to get the position
for (let i = 0; i < userPosts.length; i++) {
    // let likeValue = posts[i].likes;
    const userPost = userPosts[i];
    // Displays the posts on the DOM while fetching the user content from the posts array
    userPost.innerHTML = `
        <header>
            <img src="${posts[i].avatar}" class="avatar-img" alt="Vincent van Gogh's profile photo">
            <div class="user-info">
                <p class="username">${posts[i].name}</p>
                <p class="location">${posts[i].location}</p>
            </div>
        </header>

        <article>
            <img src="${posts[i].post}" id="post-image-1" class="post-image" alt="post of Vincent van Gogh">
        </article>

        <article class="post-details">
            <div class="post-button-wrapper">
                <button class="like-button"><img src="images/icon-heart.png" alt="button to like post"></button>
                <button><img src="images/icon-comment.png" alt="button to comment on the post"></button>
                <button><img src="images/icon-dm.png" alt="button to share the post"></button>
            </div>
            <p id="likes-post-1" class="likes">${posts[i].likes} likes</p>
            <p class="username-caption"><span class="name">${posts[i].username}</span> ${posts[i].comment}</p>
        </article>
    `
}




// Get the nodeList of like buttons
for (let j = 0; j < btnWrapper.length; j++) {

    // console.log(btnWrapper[j].children);

    btnWrapper[j].addEventListener('click', event => {
        
        let target = event.target;
        // console.log(btnWrapper[j].children[0]);
        // console.log(likeBtn[0]);
        // console.log(event.target);


        // if (event.target.className === 'like-button') {
        // }
    });
}








/* ============================
    FUNCTIONS
=============================== */

// function displayVincetLikes() {
//     let vincentLikes = posts[0].likes;
//     vincentLikes++;
//     post1likeCount.innerText = `${vincentLikes} likes`;
// }
