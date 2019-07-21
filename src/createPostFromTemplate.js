const fs = require("fs");
const querystring = require("querystring");
const path = require("path");

require("env2")("./config.env");

let mainImageRoot = "";

if (process.env.NODE_ENV === "start") {
  mainImageRoot = "https://s3.eu-west-2.amazonaws.com/console-blog/blog-images/";
} else if (process.env.NODE_ENV === "local") {
  mainImageRoot = "https://s3.eu-west-2.amazonaws.com/console-blog/local-uploads/practice-images/";
}

const createPostFromTemplate = function(title, subtitle, body, date, readingTime, mainImage, mainImageAltText, mainImageCaption, metatitle, metadescription, url, author) {

  console.log("MAAAAAAAAAN", url)

  let data = fs.readFileSync(__dirname + "/../public/blog/post-template.html", "utf8")

    data = data.replace( /\*\*\*\*\*insertposttitlehere\*\*\*\*\*/g, title);
    data = data.replace("*****insertpostsubtitlehere*****", subtitle);
    data = data.replace("*****insertpostbodyhere*****", body);
    data = data.replace("*****insertpostdatehere*****", date.split(" ").slice(0,4).join(" "));
    data = data.replace("*****insertreadingtimehere*****", readingTime);
    data = data.replace(/\*\*\*\*\*insertpostmainimagehere\*\*\*\*\*/g, `${mainImageRoot}${mainImage.split(".")[0]}-main-image.${mainImage.split(".")[1]}`);
    data = data.replace("*****insertmainimagealttexthere*****", mainImageAltText);
    data = data.replace("*****insertmainimagecaption*****", mainImageCaption);
    data = data.replace("*****insertpostmetatitlehere*****", metatitle);
    data = data.replace(/\*\*\*\*\*insertpostmetadescriptionhere\*\*\*\*\*/g, metadescription);
    data = data.replace("*****insertposturlhere*****", "www.bobbysebolao.com" + url);
    data = data.replace("*****insertauthorhere*****", author);

    // console.log(typeof(data), "HALELLUJAH");
    // return;

    // let buf = Buffer.from(data, 'utf8');
    // console.log(buf);
    // return;
    return data;
    // createdPost = data;
    // processFile();
  // function processFile() {
  //   return createdPost;
  // }
}

module.exports = createPostFromTemplate;
