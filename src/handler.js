const fs = require("fs");
const querystring = require("query-string");
const path = require("path");
const formidable = require('formidable');
const cookie = require('cookie');
// const mime = require("mime");
// const util = require('util');
const createPostFromTemplate = require("./createPostFromTemplate.js");
const readingTimeCalculator = require("./readingTimeCalculator.js");

const submitNewImage = require("./queries/submitNewImage.js");
const submitNewPost = require("./queries/submitNewPost.js");
const validateNewUser = require("./authentication/validateNewUser.js");
const getUsernameValid = require("./queries/getUsernameValid.js");
const hash = require("./authentication/hash.js");
const submitNewUser = require("./queries/submitNewUser.js");
const getUser = require("./queries/getUser.js");
const generateJSONWebToken = require("./authentication/generateJWT.js");
const submitNewComment = require("./queries/submitNewComment.js");
const decodeJSONWebToken = require("./authentication/decodeJWT.js")
const getPost = require("./queries/getPost.js");
const getComments = require("./queries/getComments.js");
const getUsername = require("./queries/getUsername.js");
const getTags = require("./queries/getTags.js");

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

const allPostsHandler = (req, res) => {
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
        const blogPosts = JSON.parse(file);
        res.end(file);
      });
    }

const createAccountPageHandler = (res) => {
      fs.readFile(__dirname + "/../public/blog/create-account.html", "utf8", (error, file) => {
        if (error) {
          console.log(error);
          return;
        }
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(file);
      });
    }

const newPostHandler = (res) => {
      fs.readFile(__dirname + "/../public/blog/create-post.html", "utf8", (error, file) => {
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

    const loginPageHandler = (res) => {
          fs.readFile(__dirname + "/../public/blog/login.html", "utf8", (error, file) => {
            if (error) {
              console.log(error);
              return;
            }
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(file);
          });
        }

    const getCommentsHandler = (req, res) => {
      console.log(req.headers.referer.split("/")[4]);
      const postName = req.headers.referer.split("/")[4];
      let comments;
      getComments(postName)
      .then(result => res.end(JSON.stringify(result)))
      .catch(error => console.log(error))
    };

    const getTagsHandler = (req, res) => {
      const query = req.url.split("?q=")[1]
      console.log(query);
      getTags(query)
      .then(result => {
        console.log("Here are the matching tags: ", result);
        res.end(JSON.stringify(result));
      })
      .catch(error => {
        console.log(error);
        res.end(JSON.stringify(""));
      })
      return;
    }

//POST REQUEST HANDLERS

const createPostHandler = (req, res, jwt) => {
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
          // console.log("YEYEYE", fields);
          // return;
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

        console.log("Uploaded images successfully");
        formData = fields;
        // console.log("here's all the data: ", formData);
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

        fs.readFile(__dirname + "/posts.json", "utf8", (error, file) => {
          if (error) {
            console.log(error);
            return;
          }
          const blogPosts = JSON.parse(file);
          let timeOfPublication = Date.now();
          let dateOfPublication = Date(timeOfPublication);
          console.log("TODAY'S DATE", dateOfPublication);
          blogPosts[timeOfPublication] = formData;
          blogPosts[timeOfPublication]["authorName"] = "Bobby Sebolao";
          blogPosts[timeOfPublication]["date"] = dateOfPublication;
          blogPosts[timeOfPublication]["filename"] = `post-${Object.keys(blogPosts).length}.html`;
          blogPosts[timeOfPublication]["readingminutes"] = readingTimeCalculator(blogPosts[timeOfPublication]["post"]);

          submitNewImage(blogPosts[timeOfPublication], err => {
            if (err) {
              console.log(err);
            }
          });

          submitNewPost(blogPosts[timeOfPublication], timeOfPublication, err => {
            if (err) {
              console.log(err);
            }
          });

          const final = JSON.stringify(blogPosts);

          fs.writeFile(__dirname + "/posts.json", final, function(error) {
            if (error) {
              console.log("Error");
              return;
          }
          console.log("Successfully written to file");
        });

        let newPostPath = `/blog/post-${Object.keys(blogPosts).length}.html`;

        let newPostContent = createPostFromTemplate(blogPosts[timeOfPublication]["title"], blogPosts[timeOfPublication]["subtitle"], blogPosts[timeOfPublication]["post"], blogPosts[timeOfPublication]["date"], blogPosts[timeOfPublication]["readingminutes"], blogPosts[timeOfPublication]["mainImage"]["name"], blogPosts[timeOfPublication]["mainImageAltText"], blogPosts[timeOfPublication]["mainImageCaption"], blogPosts[timeOfPublication]["metatitle"], blogPosts[timeOfPublication]["metadescription"], newPostPath, blogPosts[timeOfPublication]["authorName"]);

        fs.writeFile(__dirname + `/../public` + newPostPath, newPostContent, function(error) {
          if (error) {
            console.log("Error: No such file exists");
            return;
        }
        console.log("Successfully written to file");

      });
      });

      res.writeHead(302, { Location: "/blog/blog.html" });
      res.end();
    });
  }

  const createAccountSubmitHandler = (req, res) => {
    let form = new formidable.IncomingForm();

    form.uploadDir = __dirname + "/../public/assets/images/users";
    form.keepExtensions = true;
    form.maxFieldsSize = 10 * 1024 * 1024; // 10MB

    form.on('fileBegin', function(name, file) {
      file.path = path.join(__dirname, "../public/assets/images/users", file.name);
    });

    let formData = "";

    form.parse(req, function(error, fields, files) {

      if (error) {
        console.log(`Cannot upload images. Error is ${error}`);
      }
      else {
        let userImage = {
          name: files["userImage"]["name"],
          size: files["userImage"]["size"],
          path: files["userImage"]["path"],
          type: files["userImage"]["type"]
        }

      fields["userImage"] = userImage;
      console.log("Uploaded images successfully");
      formData = fields;

      Promise.all([
        validateNewUser(formData),
        getUsernameValid(formData.username.toLowerCase())
      ])
      .then(response => hash.hashPassword(formData.password))
      .then(hash => submitNewUser(formData, hash))
      .then(response => {
        res.writeHead(302, { Location: "/blog/blog.html" });
        res.end();
      })
      .catch(err => {
        res.writeHead(400, {
          "Content-Type": "text/html"
        });
        console.log(err);
        res.write("HAHA");
        res.end(err);
      });

    }
    });
  }

  const loginSubmitHandler = (req, res) => {
  let allTheData = "";
  req.on("data", chunk => {
    allTheData += chunk;
  });

  req.on("end", () => {
    const loginData = querystring.parse(allTheData);
    let storedUserDetails;
    console.log("This is my login data", loginData);

  getUser(loginData.username)
  .then(user => {
    storedUserDetails = user;
    hash.comparePassword(loginData.password, storedUserDetails.password)
    .then(pass => {
      if (pass === true) {
        generateJSONWebToken({user_id: storedUserDetails.pk_user_id, username: storedUserDetails.username, logged_in: true})
        .then(token => {
          res.writeHead(302, {
            "Set-Cookie": `jwt=${token}; max-age=9000; path=/; HttpOnly`,
            Location: "/blog/blog.html"
          });
          res.end();
        })
        .catch(error => console.log(error))
      }
      else {
            res.writeHead(400, { "content-type": "text/html" });
            res.end("incorrect password");
          }
    })
    .catch(error => console.log(error))
  })
  .catch(error => console.log(error))
  });
}

const logoutHandler = (res) => {
  res.writeHead(302, {
    "Set-Cookie": `jwt=0; max-age=0`,
    Location: "/blog/blog.html"
  });
  res.end();
}

const commentSubmitHandler = (req, res, encodedJwt) => {

  let allTheData = '';

  req.on("data", chunk => {
    allTheData += chunk;
  });

  req.on("end", () => {
    const comment = querystring.parse(allTheData);
    const postName = req.headers.referer.split("/")[4];
    console.log(postName);
    let userId = '';
    let postId = '';
    let commentTimestamp;
    let commentDate;
    let username;
    let avatarName;
    let avatarFilepath;
      decodeJSONWebToken(encodedJwt)
      .then(decodedUserId => userId = decodedUserId)
      .then(unusedResult => getPost(postName))
      .then(retrievedPostId => {
        postId = retrievedPostId;
        commentTimestamp = Date.now();
        commentDate = Date(commentTimestamp);
      })
      .then(unusedResult => {
        getUsername(userId)
      .then(result => {
        username = result.username;
        avatarName = result.avatar_name;
        avatarFilepath = result.avatar_filepath;
        submitNewComment(comment.comment, postId, userId, commentTimestamp, commentDate, username, avatarName, avatarFilepath)
      .then(commentStatus => {
        console.log("Is it true: ", commentStatus)
        if (commentStatus === true) {
          console.log("Yes it is")
          res.writeHead(302, { Location: `/blog/${postName}` });
          res.end();
      }
      })
            })
            })
      .catch(error => console.log(error))
  });
}


module.exports = {
  homeHandler,
  allPostsHandler,
  postsJSONHandler,
  createAccountPageHandler,
  newPostHandler,
  domScriptsHandler,
  publicHandler,
  loginPageHandler,
  getCommentsHandler,
  getTagsHandler,
  createPostHandler,
  createAccountSubmitHandler,
  loginSubmitHandler,
  logoutHandler,
  commentSubmitHandler
};
