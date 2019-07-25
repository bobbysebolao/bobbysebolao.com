console.log("webmentions.js is working");
const thisUrl = window.location;
const postUrl = thisUrl.protocol + "//" + thisUrl.host + thisUrl.pathname
console.log("SKRAAA", postUrl);

// fetch(`https://webmention.io/api/mentions.jf2?target=${postUrl}`)
fetch(`https://webmention.io/api/mentions.jf2?target=${postUrl}`)
.then(res => res.json())
.then(webmentions => {
  console.log("The webmentions response object: ", webmentions);
  console.log("The type of webmention: ", webmentions['children'][0]['wm-property']);
})
