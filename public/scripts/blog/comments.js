const userComments = document.querySelector(".user-comments");
const userCommentsForm = document.querySelector(".createComment");
const loginToComment = document.querySelector(".loginToComment");

// const fileDivider = document.querySelector(".fileDivider");

// const authorDetails = document.querySelector(".blog-post__author-details");

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
