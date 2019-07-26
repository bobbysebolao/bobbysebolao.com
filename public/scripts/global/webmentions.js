const likesSection = document.querySelector('.user-likes');
const repostsSection = document.querySelector('user-reposts');

console.log("webmentions.js is working");
const thisUrl = window.location;
const postUrl = thisUrl.protocol + "//" + thisUrl.host + thisUrl.pathname
console.log("SKRAAA", postUrl);

let likes = [];
let reposts = [];
let replies = [];

// fetch(`https://webmention.io/api/mentions.jf2?target=${postUrl}`)
fetch(`https://webmention.io/api/mentions.jf2?target=${postUrl}`)
.then(res => res.json())
.then(data => {
  let webmentions = data['children'];
  console.log("The webmentions response object: ", data);
  // console.log("The type of webmention: ", data['children'][0]['wm-property']);

  for (let i = 0; i < webmentions.length; i++) {
    if (webmentions[i]['wm-property'] === "like-of") {
      likes.push(webmentions[i]);
    } else if (webmentions[i]['wm-property'] === "repost-of") {
      reposts.push(webmentions[i]);
    } else if (webmentions[i]['wm-property'] === "in-reply-to") {
      replies.push(webmentions[i]);
    }
  }
  console.log("LIKES:", likes);
  console.log("REPOSTS:", reposts);
  console.log("REPLIES:", replies);

  for (let like in likes) {
    let likeContainer = document.createElement('div');
    likeContainer.className = "user-likes__like";
    likeContainer.style.background = "red";
    likeContainer.style.backgroundImage = `url(${like['author']['photo']})`;
    likeContainer.textContent = `${like['author']['name']}`;
    likesSection.appendChild(likeContainer);
  }

  for (let repost in reposts) {
    let repostContainer = document.createElement('div');
    repostContainer.className = "user-reposts__repost";
    repostsSection.appendChild(repostContainer);
  }
})
