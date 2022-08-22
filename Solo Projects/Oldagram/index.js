/* ============================
    VARIABLES
=============================== */

// const getPosts = document.getElementsByClassName('user-post');
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


const userPosts = Array.from(document.getElementsByClassName('user-post'));


for (const { name, username, location, avatar, post, comment, likes } of posts) {
    renderPosts(avatar, name, location, post, likes, username, comment);

}


function renderPosts(avatar, name, location, post, likes, username, comment) {
    for (const userPost of userPosts) {

        userPost.innerHTML += `
        <header>
            <img src="${avatar}" class="avatar-img" alt="Vincent van Gogh's profile photo">
            <div class="user-info">
                <p class="username">${name}</p>
                <p class="location">${location}</p>
            </div>
        </header>
    
        <article>
            <img src="${post}" id="post-image-1" class="post-image" alt="post of Vincent van Gogh">
        </article>
    
        <article class="post-details">
            <div class="post-button-wrapper">
                <button class="like-button"><img src="images/icon-heart.png" alt="button to like post"></button>
                <button><img src="images/icon-comment.png" alt="button to comment on the post"></button>
                <button><img src="images/icon-dm.png" alt="button to share the post"></button>
            </div>
            <p id="likes-post-1" class="likes">${likes} likes</p>
            <p class="username-caption"><span class="name">${username}</span> ${comment}</p>
        </article>
    `
    }
}




// Loops through the classes that contain the posts to get the position
// for (let i = 0; i < userPosts.length; i++) {
    // let likeValue = posts[i].likes;
    // const userPost = userPosts[i];
    // Displays the posts on the DOM while fetching the user content from the posts array
        // userPost.innerHTML = `
        //     <header>
        //         <img src="${posts[i].avatar}" class="avatar-img" alt="Vincent van Gogh's profile photo">
        //         <div class="user-info">
        //             <p class="username">${posts[i].name}</p>
        //             <p class="location">${posts[i].location}</p>
        //         </div>
        //     </header>

        //     <article>
        //         <img src="${posts[i].post}" id="post-image-1" class="post-image" alt="post of Vincent van Gogh">
        //     </article>

        //     <article class="post-details">
        //         <div class="post-button-wrapper">
        //             <button class="like-button"><img src="images/icon-heart.png" alt="button to like post"></button>
        //             <button><img src="images/icon-comment.png" alt="button to comment on the post"></button>
        //             <button><img src="images/icon-dm.png" alt="button to share the post"></button>
        //         </div>
        //         <p id="likes-post-1" class="likes">${posts[i].likes} likes</p>
        //         <p class="username-caption"><span class="name">${posts[i].username}</span> ${posts[i].comment}</p>
        //     </article>
        // `
// }
