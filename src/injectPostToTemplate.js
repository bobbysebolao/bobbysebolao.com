const fs = require("fs");
const querystring = require("querystring");
const path = require("path");

function createPostFromTemplate(title, body, date, mainImage, metatitle, metadescription) {

  fs.readFile(__dirname + "/../public/blog/post-template.html", "utf8", function(error, data) {
    if (error) {
      console.log("error");
      return;
    }
    response.writeHead(200, { "Content-Type": "text/html" });
    response.end(file);
  })

}

module.exports = createPostFromTemplate;
