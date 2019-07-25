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
  // console.log("The webmentions response object: ", data);
  // console.log("The type of webmention: ", data['children'][0]['wm-property']);

  for (let i = 0; i < webmentions.length; i++) {
    if (webmentions[i]['wm-property'] === "like-of") {
      likes.push(webmentions[i]);
      console.log("LIKES:", likes);
    } else if (webmentions[i]['wm-property'] === "repost-of") {
      reposts.push(webmentions[i]);
    } else if (webmentions[i]['wm-property'] === "in-reply-to") {
      replies.push(webmentions[i]);
    }
  }
})
.then(end => {
  console.log("LIKES:", likes);
  console.log("REPOSTS:", reposts);
  console.log("REPLIES:", replies);
})
