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
  // console.log("The webmentions response object: ", data);
  // console.log("The type of webmention: ", data['children'][0]['wm-property']);

  for (let webmention in data['children']) {
    if (webmention['wm-property'] === "like-of") {
      likes.push(webmention);
      console.log("LIKES:", likes);
    } else if (webmention['wm-property'] === "repost-of") {
      reposts.push(webmention);
    } else if (webmention['wm-property'] === "in-reply-to") {
      replies.push(webmention);
    }
  }
})
.then(end => {
  console.log("LIKES:", likes);
  console.log("REPOSTS:", reposts);
  console.log("REPLIES:", replies);
})
