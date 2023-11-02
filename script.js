/*document.addEventListener("DOMContentLoaded", function () {
    const postsContainer = document.querySelector(".posts-container");

    // Fetch data from the endpoint
    fetch("https://api.jsonbin.io/v3/b/654384cb54105e766fca6269")
        .then(response => response.json()) // Parse the JSON data
        .then(posts => {
            // Dynamically create the webpage structure for displaying posts
            posts.forEach(post => {
                const postElement = document.createElement("div");
                postElement.classList.add("post-card");

                const postContent = `
                    <div class="post">
                        <img src="${post.image}" width="50" height="50" alt="profile_pic">
                        ${post.createTime}
                    </div>
                    <img src="${post.image}" width="100%" height="auto" style="margin-top: 5px;" alt="post_image">
                    <p>${post.content}</p>
                    <img src="like.png" width="50" height="50" alt="like">
                `;

                postElement.innerHTML = postContent;
                postsContainer.appendChild(postElement);
            });
        })
        .catch(error => {
            console.error("Error fetching data:", error);
        });
}); */


document.addEventListener("DOMContentLoaded", function () {
    const postsContainer = document.querySelector(".posts-container");

    // Fetch data from the local posts.json file
    fetch("posts.json")
        .then(response => response.json()) // Parse the JSON data
        .then(posts => {
            // Dynamically create the webpage structure for displaying posts
            posts.forEach(post => {
                const postElement = document.createElement("div");
                postElement.classList.add("post-card");

                const postContent = `
                    <div class="post">
                        <img src="${post.image}" width="50" height="50" alt="profile_pic">
                        ${post.createTime}
                    </div>
                    <img src="${post.image}" width="100%" height="auto" style="margin-top: 5px;" alt="post_image">
                    <p>${post.content}</p>
                    <img src="like.png" width="50" height="50" alt="like">
                `;

                postElement.innerHTML = postContent;
                postsContainer.appendChild(postElement);
            });
        })
        .catch(error => {
            console.error("Error fetching data:", error);
        });
});

