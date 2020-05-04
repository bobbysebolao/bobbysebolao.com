const likesSection = document.querySelector('.user-likes');
const repostsSection = document.querySelector('user-reposts');

const thisUrl = window.location;
const postUrl = thisUrl.protocol + "//" + thisUrl.host + thisUrl.pathname

let likes = [];
let reposts = [];
let replies = [];

fetch(`https://webmention.io/api/mentions.jf2?target=${postUrl}`)
.then(res => res.json())
.then(data => {
  let webmentions = data['children'];

  for (let i = 0; i < webmentions.length; i++) {
    if (webmentions[i]['wm-property'] === "like-of") {
      likes.push(webmentions[i]);
    } else if (webmentions[i]['wm-property'] === "repost-of") {
      reposts.push(webmentions[i]);
    } else if (webmentions[i]['wm-property'] === "in-reply-to") {
      replies.push(webmentions[i]);
    }
  }

  for (let i = 0; i < likes.length; i++) {
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
