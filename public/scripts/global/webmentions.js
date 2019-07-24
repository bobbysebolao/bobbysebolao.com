console.log("webmentions.js is working");
const getUrl = window.location;
const baseUrl = getUrl.protocol + "//" + getUrl.host + "/" + getUrl.pathname.split('/')[1]
console.log("SKRAAA", baseUrl);

fetch(`${baseUrl}`)
.then(res => {
  console.log("The webmentions data: ", res)
})
