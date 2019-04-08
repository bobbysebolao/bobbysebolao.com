const fs = require("fs");
const querystring = require("querystring");
const path = require("path");

const createPostFromTemplate = function(title, body, date, readingTime, mainImage, metatitle, metadescription) {

  let data = fs.readFileSync(__dirname + "/../public/blog/post-template.html", "utf8")

    data = data.replace("*****insertposttitlehere*****", title);
    data = data.replace("*****insertpostbodyhere*****", body);
    data = data.replace("*****insertpostdatehere*****", date.split(" ").slice(0,4).join(" "));
    data = data.replace("*****insertreadingtimehere*****", readingTime);
    data = data.replace("*****insertpostmainimagehere*****", "/../assets/images/blog/" + mainImage);
    data = data.replace("*****insertpostmetatitlehere*****", metatitle);
    data = data.replace("*****insertpostmetadescriptionhere*****", metadescription);
    data = data.replace("*****insertpostmetadescriptionhere*****", metadescription);
    return data;
    // createdPost = data;
    // processFile();
  // function processFile() {
  //   return createdPost;
  // }
}

module.exports = createPostFromTemplate;
