const fs = require("fs");
const querystring = require("querystring");
const path = require("path");

require("dotenv").config();

let mainImageRoot = "";

if (process.env.NODE_ENV === "start") {
  mainImageRoot = "https://s3.eu-west-2.amazonaws.com/console-blog/blog-images/";
} else if (process.env.NODE_ENV === "local") {
  mainImageRoot = "https://s3.eu-west-2.amazonaws.com/console-blog/local-uploads/practice-images/";
}

const createPostFromTemplate = function(postData) {

  let data = fs.readFileSync(__dirname + "/../public/blog/post-template.html", "utf8")

    data = data.replace( /\*\*\*\*\*insertposttitlehere\*\*\*\*\*/g, postData.title);
    data = data.replace("*****insertpostsubtitlehere*****", postData.subtitle);
    data = data.replace("*****insertpostbodyhere*****", postData.post);
    data = data.replace("*****insertpostdatehere*****", postData.pub_date.split(" ").slice(0,4).join(" "));
    data = data.replace("*****insertreadingtimehere*****", postData.reading_mins);
    data = data.replace(/\*\*\*\*\*insertpostmainimagehere\*\*\*\*\*/g, `${mainImageRoot}${postData.main_image.name.split(".")[0]}-main-image.${postData.main_image.name.split(".")[1]}`);
    data = data.replace("*****insertmainimagealttexthere*****", postData.main_image_alt_text);
    data = data.replace("*****insertmainimagecaption*****", postData.main_image_caption);
    data = data.replace("*****insertpostmetatitlehere*****", postData.metatitle);
    data = data.replace(/\*\*\*\*\*insertpostmetadescriptionhere\*\*\*\*\*/g, postData.metadescription);
    data = data.replace("*****insertposturlhere*****", "www.bobbysebolao.com" + postData.url);
    data = data.replace("*****insertauthorhere*****", postData.author_name);

    return data;
}

module.exports = createPostFromTemplate;
