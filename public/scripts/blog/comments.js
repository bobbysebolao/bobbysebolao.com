const likesSection = document.querySelector('.user-likes');
const repostsSection = document.querySelector('user-reposts');
const thisUrl = window.location;
const postUrl = thisUrl.protocol + "//" + thisUrl.host + thisUrl.pathname
console.log("SKRAAA", postUrl);

const userComments = document.querySelector(".user-comments");
const userCommentsForm = document.querySelector(".createComment");
const loginToComment = document.querySelector(".loginToComment");

let likes = [];
let reposts = [];
let replies = [];

console.log("wee bey");

fetch("/blog/check-login-status")
  .then(res => res.json())
  .then(userData => {
    if (userData.loginStatus !== true) {
      console.log("comments login logic working");
      userCommentsForm.style.display = "none";
      loginToComment.style.display = "block";
    } else {
      console.log("comments login logic working");
      userCommentsForm.style.display = "block";
      loginToComment.style.display = "none";
    }
  });

// fetch("/blog/author")
//   .then(res => res.json())
//   .then(data => {
//
//     let authorAvatar = document.createElement('img');
//     let authorName = document.createElement('p');
//
//     authorAvatar.className = "blog-post__author-avatar";
//     authorAvatar.src = `${data.avatar}`;
//
//     authorName.className = "blog-post__author-name";
//
//     authorName.textContent = `${data.username}`;
//
//     authorDetails.appendChild(authorAvatar);
//     authorDetails.appendChild(authorName);
//   });

document.onreadystatechange = function() {
  if (document.readyState === "complete") {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        var data = JSON.parse(xhr.responseText);


        fetch(`https://webmention.io/api/mentions.jf2?target=${postUrl}`)
        .then(res => res.json())
        .then(webmentionsData => {
          let webmentions = webmentionsData['children'];
          console.log("The webmentions response object: ", webmentionsData);

          for (let i = 0; i < webmentions.length; i++) {
            if (webmentions[i]['wm-property'] === "like-of") {
              likes.push(webmentions[i]);
            } else if (webmentions[i]['wm-property'] === "repost-of") {
              reposts.push(webmentions[i]);
            } else if (webmentions[i]['wm-property'] === "in-reply-to") {
              data.push({
                avatar_filepath: webmentions[i]["author"]["photo"],
                username: webmentions[i]["author"]["name"],
                com_date: webmentions[i]["published"],
                body: webmentions[i]["content"]["text"]
              });
            }
          }
          console.log("LIKES:", likes);
          console.log("REPOSTS:", reposts);
          console.log("REPLIES:", replies);

          for (let i = 0; i < likes.length; i++) {
            console.log("The like author: ", likes[i]['author'])
            let likeContainer = document.createElement('div');
            likeContainer.className = "user-likes__like";
            likeContainer.style.background = "red";
            likeContainer.style.backgroundImage = `url(${likes[i]['author']['photo']})`;
            likeContainer.textContent = `${likes[i]['author']['name']}`;
            likesSection.appendChild(likeContainer);
          }

          for (let repost in reposts) {
            let repostContainer = document.createElement('div');
            repostContainer.className = "user-reposts__repost";
            repostsSection.appendChild(repostContainer);
          }
        })







        // var data = JSON.parse(xhr.responseText);
        console.log("These are the post comments: ", data);

        if (data) {
        for (let comment in data) {
          console.log("MEMEME", data[comment]);
          let commentContainer = document.createElement("div");
          let userContainer = document.createElement("div");
          let usernameContainer = document.createElement("div");
          let userAvatar = document.createElement("img");
          let commentUsername = document.createElement("p");
          let commentDate = document.createElement("p");
          let commentBody = document.createElement("p");
          commentContainer.className = "user-comments__comment";
          userContainer.className = "user-comments__user";
          usernameContainer.className = "user-comments__username";

          userAvatar.className = "blog-post__user-avatar";
          commentUsername.className = "user-comments__username";
          commentDate.className = "user-comments__date";

          commentBody.className = "user-comments__body";

          // userAvatar.src = `https://s3.eu-west-2.amazonaws.com/console-blog/user-avatars/${data[comment]["avatar_name"].split(".")[0]}-user-image.${data[comment]["avatar_name"].split(".")[1]}`;
          userAvatar.src = `${
            data[comment]["avatar_filepath"]
          }`;
          // https://s3.eu-west-2.amazonaws.com/console-blog/user-avatars/
          // `https://s3.eu-west-2.amazonaws.com/console-blog/blog-images/${data[comment]["avatar_name".split(".")[0]}-user-image.${data[comment]["avatar_name".split(".")[1]}`
          commentUsername.textContent = data[comment]["username"];
          commentDate.textContent = data[comment]["com_date"]
            .split(" ")
            .slice(1, 4)
            .join(" ");
          commentBody.textContent = data[comment]["body"];
          // userContainer.appendChild(userAvatar);
          usernameContainer.appendChild(commentUsername);
          usernameContainer.appendChild(commentDate);
          userContainer.appendChild(userAvatar);
          userContainer.appendChild(usernameContainer);
          // commentContainer.appendChild(userAvatar);
          // commentContainer.appendChild(commentUsername);
          // commentContainer.appendChild(commentDate);
          commentContainer.appendChild(userContainer);
          // commentContainer.appendChild(usernameContainer);
          commentContainer.appendChild(commentBody);
          userComments.appendChild(commentContainer);
        }
      }
      }
      //  else {
      //   console.error(xhr.responseText);
      // }
    };

    xhr.open("GET", "/blog/comments", true);
    xhr.send();
  }
  // xhr.open("GET", "/blog/comments", true);
  // xhr.send();
};
