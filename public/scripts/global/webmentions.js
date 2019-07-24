console.log("webmentions.js is working");
const thisUrl = window.location;
const postUrl = thisUrl.protocol + "//" + thisUrl.host + "/" + thisUrl.pathname.split('/')[1]
console.log("SKRAAA", postUrl);

fetch(`${postUrl}`)
.then(res => {
  console.log("The webmentions data: ", res)
})
