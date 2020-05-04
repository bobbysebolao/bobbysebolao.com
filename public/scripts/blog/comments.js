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

const userComments = document.querySelector(".user-comments");
const userCommentsForm = document.querySelector(".createComment");
const loginToComment = document.querySelector(".loginToComment");

let likes = [];
let reposts = [];

fetch("/blog/check-login-status")
  .then(res => res.json())
  .then(userData => {
    if (userData.loginStatus !== true) {
      userCommentsForm.style.display = "none";
      loginToComment.style.display = "block";
    } else {
      userCommentsForm.style.display = "block";
      loginToComment.style.display = "none";
    }
  });

let data = [];

fetch("/blog/comments")
.then(res => res.json())
.then(commentsData => {
  if (commentsData) {
  data = commentsData;
}
})
.then(unrelated => {
  fetch(webmentionsUrl)
    .then(res => res.json())
    .then(webmentionsData => {
      let webmentions = webmentionsData["children"];

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

      for (let i = 0; i < likes.length; i++) {
        let likeLink = document.createElement("a");
        let like = document.createElement("div");
        likeLink.href = `${likes[i]["author"]["url"]}`;
        likeLink.setAttribute('target', '_blank');
        like.className = "user-likes__like";
        like.style.backgroundImage = `url(${
          likes[i]["author"]["photo"]
        })`;
        likeLink.appendChild(like);
        likesContainer.appendChild(likeLink);
      }

      for (let i = 0; i < reposts.length; i++) {
        let repostLink = document.createElement("a");
        let repost = document.createElement("div");
        repostLink.href = `${reposts[i]["author"]["url"]}`;
        repostLink.setAttribute('target', '_blank');
        repost.className = "user-reposts__repost";
        repost.style.backgroundImage = `url(${
          reposts[i]["author"]["photo"]
        })`;
        repostLink.appendChild(repost);
        repostsContainer.appendChild(repostLink);
      }
    })
    .then(unrelated2 => {
      if (data) {
      data.sort((a, b) => {
        return b["com_timestamp"] - a["com_timestamp"];
      })
    }
    })
    .then(unrelated3 => {
      if (data) {
        for (let comment in data) {
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
          userAvatar.src = `${data[comment]["avatar_filepath"]}`;
          commentUsername.textContent = data[comment]["username"];

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
            userContainer.appendChild(usernameContainer);
            commentContainer.appendChild(userContainer);
            commentContainer.appendChild(commentBody);
            userComments.appendChild(commentContainer);

        }
      }
    })
})

const twitterDateConverter = (date) => {
  let months = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun",
           "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ];

  let selectedDay = date[2].split("").slice(0, 2).join("")
  let selectedMonth = months[parseInt((date[1])-1)];
  let selectedYear = date[0];

  let convertedDate = `${selectedMonth} ${selectedDay} ${selectedYear}`;
  return convertedDate;
}

function sortNumber(a, b) {
  return a - b;
}
