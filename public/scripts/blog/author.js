const authorDetails = document.querySelector(".blog-post__author-details");
const postDetails = document.querySelector(".blog-post__post-details");

fetch("/blog/author")
  .then(res => res.json())
  .then(data => {

    let authorAvatar = document.createElement('img');
    let authorName = document.createElement('p');

    authorAvatar.className = "blog-post__user-avatar";
    authorAvatar.src = `${data.avatar}`;

    authorName.className = "blog-post__author-name";

    authorName.textContent = `${data.username}`;

    postDetails.insertBefore(authorName, postDetails.firstChild);
    authorDetails.insertBefore(authorAvatar, authorDetails.firstChild);
  });
