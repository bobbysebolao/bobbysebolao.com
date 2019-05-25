console.log("AUTHOR HERE")

const authorDetails = document.querySelector(".blog-post__author-details");
const postDetails = document.querySelector(".blog-post__post-details");
// const userCommentsForm = document.querySelector(".createComment");
// const loginToComment = document.querySelector(".loginToComment");

// document.onreadystatechange = function() {
//   if (document.readyState === "complete") {
//
//     var xhr = new XMLHttpRequest();
//     xhr.onreadystatechange = function() {
//       if (xhr.readyState === 4 && xhr.status === 200) {
//         var data = JSON.parse(xhr.responseText);
//         console.log("These are the author details: ", data);
//
//         let authorAvatar = document.createElement('img');
//         let authorName = document.createElement('p');
//
//         authorAvatar.className = "blog-post__author-avatar";
//         authorAvatar.src = `${data.avatar}`;
//
//         authorName.className = "blog-post__author-name";
//
//         authorName.textContent = `${data.username}`;
//
//         authorDetails.appendChild(authorAvatar);
//         authorDetails.appendChild(authorName);
//
//       }
//       else {
//        console.error(xhr.responseText);
//      }
//     }
//     xhr.open("GET", "/blog/author", true);
//     xhr.send();
//
//   };
//   // xhr.open("GET", "/blog/author", true);
//   // xhr.send();
// }

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
