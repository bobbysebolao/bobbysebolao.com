const fs = require("fs");
const querystring = require("querystring");
const path = require("path");
const formidable = require('formidable');
// const mime = require("mime");
// const util = require('util');
const createPostFromTemplate = require("./createPostFromTemplate.js");
const readingTimeCalculator = require("./readingTimeCalculator.js");

const submitNewPost = require("./queries/submitNewPost.js");

//GET REQUEST HANDLERS

const homeHandler = (res) => {
      fs.readFile(__dirname + "/../index.html", function(error, file) {
        if (error) {
          console.log("error");
          return;
        }
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(file);
      });
    }

const allPostsHandler = (res) => {
      fs.readFile(__dirname + "/../public/blog/all-posts.html", function(error, file) {
        if (error) {
          console.log("error");
          return;
        }
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(file);
      });
    }

const postsJSONHandler = (res) => {
      fs.readFile(__dirname + "/posts.json", "utf8", (error, file) => {
        if (error) {
          console.log(error);
          return;
        }
        res.writeHead(200, {"Content-Type": "application/json"});
        // response.write("You're on the posts page");
        // console.log(JSON.parse(file));
        const blogPosts = JSON.parse(file);
        // console.log("BLOG POSTS:", blogPosts['1456059074613']);
        res.end(file);
      });
    }

const newPostHandler = (res) => {
      fs.readFile(__dirname + "/../public/blog/create-new-post.html", "utf8", (error, file) => {
        if (error) {
          console.log(error);
          return;
        }
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(file);
      });
    }

    const domScriptsHandler = (res, endpoint, extension) => {

      const extensionType = {
        html: "text/html",
        css: "text/css",
        js: "text/javascript",
        jpg: "image/jpeg",
        jpeg: "image/jpeg",
        png: "image/png",
        ico: "image/x-icon",
        svg: "image/svg+xml",
        gif: "image/gif",
        json: "application/json"
      };

      fs.readFile(__dirname + "/../" + endpoint, (error, file) => {
        if (error) {
          console.log(error);
          return;
        }
        res.writeHead(200, {"Content-Type": extensionType[extension]});
        res.end(file);
      });
    }

const publicHandler = (res, endpoint, extension) => {

  const extensionType = {
    html: "text/html",
    css: "text/css",
    js: "text/javascript",
    jpg: "image/jpeg",
    jpeg: "image/jpeg",
    png: "image/png",
    ico: "image/x-icon",
    svg: "image/svg+xml",
    gif: "image/gif",
    json: "application/json"
  };

      fs.readFile(__dirname + "/../public" + endpoint, function(error, file) {
        if (error) {
          console.log("Error: One of the requested files couldn't be found (probably the favicon :P)");
          console.log(endpoint);
          return;
        }
        res.writeHead(200, { "Content-Type": extensionType[extension] });
        res.end(file);
      });
    }

//POST REQUEST HANDLERS

const createPostHandler = (req, res) => {
      console.log("POST request received");

      let form = new formidable.IncomingForm();

      form.uploadDir = __dirname + "/../public/assets/images/blog";
      form.keepExtensions = true;
      form.maxFieldsSize = 10 * 1024 * 1024; // 10MB

      form.on('fileBegin', function(name, file) {
        file.path = path.join(__dirname, "../public/assets/images/blog", file.name);
      });

      let formData = "";

      form.parse(req, function(error, fields, files) {
        if (error) {
          console.log(`Cannot upload images. Error is ${error}`);
        }
        else {
        let mainImage = {
          name: files["mainImage"]["name"],
          size: files["mainImage"]["size"],
          path: files["mainImage"]["path"],
          type: files["mainImage"]["type"]
        }

        let thumbnail = {
          name: files["thumbnail"]["name"],
          size: files["thumbnail"]["size"],
          path: files["thumbnail"]["path"],
          type: files["thumbnail"]["type"]
        }

        fields["mainImage"] = mainImage;
        fields["thumbnail"] = thumbnail;
        // console.log(fields);
        console.log("Uploaded images successfully");
        formData = fields;
        submitNewPost(formData);
        // console.log("BIG OI");
        // return;
      }
      });

      // STEP 6: Sending blog post to the Server
      // This stackoverflow answer helped me find out how to pass the image data
      // to the server: https://stackoverflow.com/questions/21745432/image-upload-to-server-in-node-js-without-using-express

      let allTheData = "";
      req.on("data", function(chunkOfData) {
        console.log("Writing to file...");
        allTheData += chunkOfData;
      });

      req.on("end", function() {
        const convertedData = querystring.parse(allTheData);
        // console.log(convertedData);

        fs.readFile(__dirname + "/posts.json", "utf8", (error, file) => {
          if (error) {
            console.log(error);
            return;
          }
          // console.log(file);
          const blogPosts = JSON.parse(file);
          // console.log(blogPosts);
          let timeOfPublication = Date.now();
          let dateOfPublication = Date(timeOfPublication);
          console.log("TODAY'S DATE", dateOfPublication);
          // return;
          blogPosts[timeOfPublication] = formData;
          blogPosts[timeOfPublication]["date"] = dateOfPublication;
          blogPosts[timeOfPublication]["filename"] = `post-${Object.keys(blogPosts).length}.html`;
          blogPosts[timeOfPublication]["readingminutes"] = readingTimeCalculator(blogPosts[timeOfPublication]["post"]);
          // console.log("QWERTY", blogPosts[timeOfPublication]["readingminutes"]);
          // return;
          // console.log(blogPosts);
          const final = JSON.stringify(blogPosts);
          // console.log("CHECK THIS", Object.keys(blogPosts));
          // return;

          fs.writeFile(__dirname + "/posts.json", final, function(error) {
            if (error) {
              console.log("Error");
              return;
          }
          console.log("Successfully written to file");
        });

        // let newPostContent = blogPosts[timeOfPublication]["post"];
        let newPostContent = createPostFromTemplate(blogPosts[timeOfPublication]["title"], blogPosts[timeOfPublication]["subtitle"], blogPosts[timeOfPublication]["post"], blogPosts[timeOfPublication]["date"], blogPosts[timeOfPublication]["readingminutes"], blogPosts[timeOfPublication]["mainImage"]["name"], blogPosts[timeOfPublication]["mainImageAltText"], blogPosts[timeOfPublication]["mainImageCaption"], blogPosts[timeOfPublication]["metatitle"], blogPosts[timeOfPublication]["metadescription"]);
        // console.log("TADAAAAA", newPostContent);
        // return;

        // console.log("TAKE NOTE", createPostFromTemplate(blogPosts[timeOfPublication]["title"], blogPosts[timeOfPublication]["post"], blogPosts[timeOfPublication]["date"], blogPosts[timeOfPublication]["mainImage"]["name"], blogPosts[timeOfPublication]["metatitle"], blogPosts[timeOfPublication]["metadescription"]));
        // return;
        let newPostPath = `/blog/post-${Object.keys(blogPosts).length}.html`;
        // console.log("ALMOST THERE", newPostPath);
        // return;

        fs.writeFile(__dirname + `/../public` + newPostPath, newPostContent, function(error) {
          if (error) {
            console.log("Error: No such file exists");
            return;
        }
        console.log("Successfully written to file");
        // response.writeHead(200, { "Content-Type": "text/html" });
        // response.end();
      });
      });

      res.writeHead(302, { Location: "/blog/all-posts" });
      res.end();
    });
  }

module.exports = {
  homeHandler,
  allPostsHandler,
  postsJSONHandler,
  newPostHandler,
  domScriptsHandler,
  publicHandler,
  createPostHandler
};
