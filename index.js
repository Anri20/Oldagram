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

let template = `
<div class="container main">
    <div class="post-header">
        <img class="posters avatar" src="images/avatar-vangogh.jpg" alt="content posters avatar">
        <div class="posters-data">
            <label for="post-avatar">Name</label>
            <address>Location</address>
        </div>
    </div>
    <img class="post" src="images/post-vangogh.jpg" alt="content">
    <div class="btn-container">
        <img class="like-button btn" src="images/icon-heart.png" alt="like button">
        <img class="comment-button btn" src="images/icon-comment.png" alt="comment button">
        <img class="dm-button btn" src="images/icon-dm.png" alt="dm button">
    </div>
    <span class="like-count">100 likes</span>
    <p><span class="username">username</span> description</p>
</div>
`

const main = document.querySelector("main")

// main.innerHTML += template

let stringHTML = ""
posts.map((post, index) => {
    console.log(post)
    stringHTML += `
    <div class="container main">
        <div class="post-header">
            <img class="posters avatar" src=${post.avatar} alt="content posters avatar">
            <div class="posters-data">
                <label for="post-avatar">${post.name}</label>
                <address>${post.location}</address>
            </div>
        </div>
        <img class="post" src=${post.post} alt="content">
        <div class="btn-container">
            <img class="like-button btn" src="images/icon-heart.png" alt="like button">
            <img class="comment-button btn" src="images/icon-comment.png" alt="comment button">
            <img class="dm-button btn" src="images/icon-dm.png" alt="dm button">
        </div>
        <span class="like-count">${post.likes} ${post.likes > 1 ? "likes" : "like"}</span>
        <p><span class="username">${post.username}</span> ${post.comment}</p>
    </div>
    `
})

main.innerHTML = stringHTML
