console.log("webmentions.js is working");

fetch("https://webmention.io/api/mentions.jf2?target=https://www.bobbysebolao.com")
.then(res => {
  console.log("The webmentions data: ", res)
})
