const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21,
        liked: false,
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4,
        liked: false,
    },
    {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152,
        liked: false,
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
        <img id="post-${index}" class="post" ondblclick="handleDoubleClick(this)" src=${post.post} alt="content">
        <div class="btn-container">
            <img id="like-${index}" class="like-button btn" onclick="handleClick(this)" src="images/icon-heart.png" alt="like button">
            <img class="comment-button btn" src="images/icon-comment.png" alt="comment button">
            <img class="dm-button btn" src="images/icon-dm.png" alt="dm button">
        </div>
        <span id="like-${index}-count" class="like-count">${post.likes} ${post.likes > 1 ? "likes" : "like"}</span>
        <p><span class="username">${post.username}</span> ${post.comment}</p>
    </div>
    `
})

main.innerHTML = stringHTML


// const post = document.querySelector("img.post")
// const btnLike = document.querySelector("img.like-button")

// post.addEventListener("dblclick", function (e) {
//     console.log("post double clicked")
//     let id = e.currentTarget.id.at(-1)
//     console.log(id)
//     console.log(posts[id])
// })

// btnLike.addEventListener("click", function (e) {
//     console.log("btn like clicked")
//     let id = e.currentTarget.id.at(-1)
//     console.log(id)
//     console.log(posts[id])

// })

function handleDoubleClick(e) {
    let id = e.id.at(-1)
    
    const likeCount = document.getElementById(`like-${id}-count`)
    if (!posts[id].liked) {
        posts[id].likes += 1
        posts[id].liked = true
    } else {
        posts[id].likes -= 1
        posts[id].liked = false
    }

    likeCount.textContent = `${posts[id].likes} likes`
}

function handleClick(e) {
    let id = e.id.at(-1)

    const likeCount = document.getElementById(`like-${id}-count`)
    if (!posts[id].liked) {
        posts[id].likes += 1
        posts[id].liked = true
    } else {
        posts[id].likes -= 1
        posts[id].liked = false
    }
    
    likeCount.textContent = `${posts[id].likes} likes`
}