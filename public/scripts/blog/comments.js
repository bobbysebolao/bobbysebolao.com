const likesSection = document.querySelector(".user-likes");
const repostsSection = document.querySelector(".user-reposts");
const likesContainer = document.querySelector(".user-likes-container");
const repostsContainer = document.querySelector(".user-reposts-container");
const thisUrl = window.location;
const postUrl = thisUrl.protocol + "//" + thisUrl.host + thisUrl.pathname;
let webmentionsUrl;

if (postUrl === "https://www.bobbysebolao.com/posts/jamstack-conf-2019-recap.html") {
  webmentionsUrl = `https://webmention.io/api/mentions.jf2?target[]=${postUrl}&target[]=https://www.bobbysebolao.com/blog/posts/jamstack-conf-2019-recap.html`;
} else {
  webmentionsUrl = `https://webmention.io/api/mentions.jf2?target=${postUrl}`;
}

console.log("SKRAAA", postUrl);

const userComments = document.querySelector(".user-comments");
const userCommentsForm = document.querySelector(".createComment");
const loginToComment = document.querySelector(".loginToComment");

let likes = [];
let reposts = [];
// let replies = [];

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

let data;
let webmentionsData;
let allData;

Promise.all([fetch("/blog/comments"), fetch(webmentionsUrl)])
.then(res => {
  if (res[0]["url"] == "https://www.bobbysebolao.com/blog/comments") {
    commentsData = res[0].json();
    webmentionsData = res[1].json();
    // return commentsData, webmentionsData
  } else {
    commentsData = res[1].json();
    webmentionsData = res[0].json();
  }
  allData = [commentsData, webmentionsData];
  return allData;
})
.then(all => {
  console.log("Comments and webmentions", all);
  let webmentions = all[1]["children"];
  console.log("The webmentions response object: ", all[1]);

  for (let i = 0; i < webmentions.length; i++) {
    if (webmentions[i]["wm-property"] === "like-of") {
      likes.push(webmentions[i]);
    } else if (webmentions[i]["wm-property"] === "repost-of" || webmentions[i]["wm-property"] === "mention-of") {
      reposts.push(webmentions[i]);
    } else if (webmentions[i]["wm-property"] === "in-reply-to") {
      data.push({
        avatar_filepath: webmentions[i]["author"]["photo"],
        username: webmentions[i]["author"]["name"],
        com_date: webmentions[i]["published"],
        body: webmentions[i]["content"]["text"],
        link: webmentions[i]["author"]["url"]
      });
    }
  }
  console.log("LIKES:", likes);
  console.log("REPOSTS:", reposts);
  // console.log("REPLIES:", replies);

  for (let i = 0; i < likes.length; i++) {
    console.log("The like author: ", likes[i]["author"]);
    let like = document.createElement("div");
    like.className = "user-likes__like";
    // likeContainer.style.background = "red";
    like.style.backgroundImage = `url(${
      likes[i]["author"]["photo"]
    })`;
    // likeContainer.textContent = `${likes[i]["author"]["name"]}`;
    likesContainer.appendChild(like);
  }

  for (let i = 0; i < reposts.length; i++) {
    let repost = document.createElement("div");
    repost.className = "user-reposts__repost";
    repost.style.backgroundImage = `url(${
      reposts[i]["author"]["photo"]
    })`;
    repostsContainer.appendChild(repost);
  }

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
      userAvatar.src = `${data[comment]["avatar_filepath"]}`;
      // https://s3.eu-west-2.amazonaws.com/console-blog/user-avatars/
      // `https://s3.eu-west-2.amazonaws.com/console-blog/blog-images/${data[comment]["avatar_name".split(".")[0]}-user-image.${data[comment]["avatar_name".split(".")[1]}`
      commentUsername.textContent = data[comment]["username"];

      console.log("GOOOOOOAAAAALASSO", data[comment]["com_date"].split(" "));

      if (data[comment]["com_date"].split(" ").length === 1) {
        commentDate.textContent = twitterDateConverter(data[comment]["com_date"]
          .split("-"))
      } else {
        commentDate.textContent = data[comment]["com_date"]
          .split(" ")
          .slice(1, 4)
          .join(" ");
      }
      commentBody.textContent = data[comment]["body"];
      // userContainer.appendChild(userAvatar);

      if (data[comment]["link"]) {
        let userAvatarLink = document.createElement("a");
        userAvatarLink.href = `${data[comment]["link"]}`;
        let commentUsernameLink = document.createElement("a");
        commentUsernameLink.href = `${data[comment]["link"]}`;

        userAvatarLink.appendChild(userAvatar);
        commentUsernameLink.appendChild(commentUsername);
        userContainer.appendChild(userAvatarLink);
        usernameContainer.appendChild(commentUsernameLink);
        userContainer.appendChild(userAvatarLink);
      } else {
        usernameContainer.appendChild(commentUsername);
        userContainer.appendChild(userAvatar);
      }

        usernameContainer.appendChild(commentDate);
        // userContainer.appendChild(userAvatar);
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

})

// document.onreadystatechange = function() {
//   if (document.readyState === "complete") {
//     var xhr = new XMLHttpRequest();
//     xhr.onreadystatechange = function() {
//       if (xhr.readyState === 4 && xhr.status === 200) {
//         var data = JSON.parse(xhr.responseText);
//
//         fetch(webmentionsUrl)
//           .then(res => res.json())
//           .then(webmentionsData => {
//             let webmentions = webmentionsData["children"];
//             console.log("The webmentions response object: ", webmentionsData);
//
//             for (let i = 0; i < webmentions.length; i++) {
//               if (webmentions[i]["wm-property"] === "like-of") {
//                 likes.push(webmentions[i]);
//               } else if (webmentions[i]["wm-property"] === "repost-of" || webmentions[i]["wm-property"] === "mention-of") {
//                 reposts.push(webmentions[i]);
//               } else if (webmentions[i]["wm-property"] === "in-reply-to") {
//                 data.push({
//                   avatar_filepath: webmentions[i]["author"]["photo"],
//                   username: webmentions[i]["author"]["name"],
//                   com_date: webmentions[i]["published"],
//                   body: webmentions[i]["content"]["text"],
//                   link: webmentions[i]["author"]["url"]
//                 });
//               }
//             }
//             console.log("LIKES:", likes);
//             console.log("REPOSTS:", reposts);
//             // console.log("REPLIES:", replies);
//
//             for (let i = 0; i < likes.length; i++) {
//               console.log("The like author: ", likes[i]["author"]);
//               let like = document.createElement("div");
//               like.className = "user-likes__like";
//               // likeContainer.style.background = "red";
//               like.style.backgroundImage = `url(${
//                 likes[i]["author"]["photo"]
//               })`;
//               // likeContainer.textContent = `${likes[i]["author"]["name"]}`;
//               likesContainer.appendChild(like);
//             }
//
//             for (let i = 0; i < reposts.length; i++) {
//               let repost = document.createElement("div");
//               repost.className = "user-reposts__repost";
//               repost.style.backgroundImage = `url(${
//                 reposts[i]["author"]["photo"]
//               })`;
//               repostsContainer.appendChild(repost);
//             }
//           })
//           .then(qwerty => {
//             // var data = JSON.parse(xhr.responseText);
//             console.log("These are the post comments: ", data);
//
//             if (data) {
//               for (let comment in data) {
//                 console.log("MEMEME", data[comment]);
//                 let commentContainer = document.createElement("div");
//                 let userContainer = document.createElement("div");
//                 let usernameContainer = document.createElement("div");
//                 let userAvatar = document.createElement("img");
//                 let commentUsername = document.createElement("p");
//                 let commentDate = document.createElement("p");
//                 let commentBody = document.createElement("p");
//                 commentContainer.className = "user-comments__comment";
//                 userContainer.className = "user-comments__user";
//                 usernameContainer.className = "user-comments__username";
//
//                 userAvatar.className = "blog-post__user-avatar";
//                 commentUsername.className = "user-comments__username";
//                 commentDate.className = "user-comments__date";
//
//                 commentBody.className = "user-comments__body";
//
//                 // userAvatar.src = `https://s3.eu-west-2.amazonaws.com/console-blog/user-avatars/${data[comment]["avatar_name"].split(".")[0]}-user-image.${data[comment]["avatar_name"].split(".")[1]}`;
//                 userAvatar.src = `${data[comment]["avatar_filepath"]}`;
//                 // https://s3.eu-west-2.amazonaws.com/console-blog/user-avatars/
//                 // `https://s3.eu-west-2.amazonaws.com/console-blog/blog-images/${data[comment]["avatar_name".split(".")[0]}-user-image.${data[comment]["avatar_name".split(".")[1]}`
//                 commentUsername.textContent = data[comment]["username"];
//
//                 console.log("GOOOOOOAAAAALASSO", data[comment]["com_date"].split(" "));
//
//                 if (data[comment]["com_date"].split(" ").length === 1) {
//                   commentDate.textContent = twitterDateConverter(data[comment]["com_date"]
//                     .split("-"))
//                 } else {
//                   commentDate.textContent = data[comment]["com_date"]
//                     .split(" ")
//                     .slice(1, 4)
//                     .join(" ");
//                 }
//                 commentBody.textContent = data[comment]["body"];
//                 // userContainer.appendChild(userAvatar);
//
//                 if (data[comment]["link"]) {
//                   let userAvatarLink = document.createElement("a");
//                   userAvatarLink.href = `${data[comment]["link"]}`;
//                   let commentUsernameLink = document.createElement("a");
//                   commentUsernameLink.href = `${data[comment]["link"]}`;
//
//                   userAvatarLink.appendChild(userAvatar);
//                   commentUsernameLink.appendChild(commentUsername);
//                   userContainer.appendChild(userAvatarLink);
//                   usernameContainer.appendChild(commentUsernameLink);
//                   userContainer.appendChild(userAvatarLink);
//                 } else {
//                   usernameContainer.appendChild(commentUsername);
//                   userContainer.appendChild(userAvatar);
//                 }
//
//                   usernameContainer.appendChild(commentDate);
//                   // userContainer.appendChild(userAvatar);
//                   userContainer.appendChild(usernameContainer);
//                   // commentContainer.appendChild(userAvatar);
//                   // commentContainer.appendChild(commentUsername);
//                   // commentContainer.appendChild(commentDate);
//                   commentContainer.appendChild(userContainer);
//                   // commentContainer.appendChild(usernameContainer);
//                   commentContainer.appendChild(commentBody);
//                   userComments.appendChild(commentContainer);
//
//               }
//             }
//           });
//       }
//       //  else {
//       //   console.error(xhr.responseText);
//       // }
//     };
//
//     xhr.open("GET", "/blog/comments", true);
//     xhr.send();
//   }
//   // xhr.open("GET", "/blog/comments", true);
//   // xhr.send();
// };

const twitterDateConverter = (date) => {
  let months = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun",
           "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ];

  let selectedDay = date[2].split("").slice(0, 2).join("")
  let selectedMonth = months[parseInt((date[1])-1)];
  let selectedYear = date[0];

  let convertedDate = `${selectedMonth} ${selectedDay} ${selectedYear}`;
  return convertedDate;
}
