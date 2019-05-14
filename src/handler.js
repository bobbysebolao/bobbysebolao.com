require("env2")("./config.env");

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
const submitNewThumbnail = require("./queries/submitNewThumbnail.js");
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
const getAllPosts = require("./queries/getAllPosts.js");
const getAllThumbnails = require("./queries/getAllThumbnails.js");
const sendVerificationEmail = require("./authentication/sendVerificationEmail.js");
const generateEmailVerificationToken = require("./authentication/generateEmailVerificationToken.js");
const submitEmailVerificationToken = require("./queries/submitEmailVerificationToken.js");
const getEmailVerificationToken = require("./queries/getEmailVerificationToken.js");
const deleteEmailVerificationToken = require("./queries/deleteEmailVerificationToken.js");
const updateVerifiedUser = require("./queries/updateVerifiedUser.js");
const generateAWSSignature = require("./authentication/generateAWSSignature.js");
const getSignedAwsRequest = require("./authentication/getSignedAwsRequest.js");

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

    const recentPostsHandler = (res) => {
      console.log("All good")
      Promise.all([getAllPosts(), getAllThumbnails()])
      .then(response => {
        // console.log("GGGOOO", response)
        //FIX THIS HANDLER FUNCTION - causing problems with loading thumbnails for recent posts
        // return;
        let posts = response[0];
        let thumbnails = response[1];
        // console.log("The blog posts --->", posts);
        // console.log("The thumbnails --->", thumbnails);
        // console.log("The post thumbnail ID --->", posts.thumbnail_id);
        // return;
        for (let i = 0; i < posts.length; i++) {
          for (let j = 0; j < thumbnails.length; j++) {
            if (thumbnails[j].pk_thumbnail_id === posts[i].thumbnail_id) {
              posts[i]["thumbnail"] = thumbnails[j]
            }
          }
      }
      // return;
        res.end(JSON.stringify(posts));
      })
      .catch(error => console.log(error))
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

    const checkLoginStatusHandler = (res, encodedJwt) => {
      let loginStatus;
      decodeJSONWebToken(encodedJwt)
      .then(decodedToken => loginStatus = decodedToken.logged_in)
      .then(unusedResult => {
        if (loginStatus === true) {
          console.log("Commenter is logged in, display the comment form")
          // res.writeHead(302, { Location: `/blog/${postName}` });
          res.end("true");
      }
      })
      .catch(error => console.log(error))
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

const createPostHandler = (req, res, encodedJwt) => {
      console.log("POST request received");

      decodeJSONWebToken(encodedJwt)
      .then(decodedToken => {
        if (decodedToken === undefined) {
          res.writeHead(400, { "Content-Type": "text/html" });
          res.end("You are not logged in. Please login in order to publish a post")
        }
        else if (decodedToken.logged_in === true){

      let form = new formidable.IncomingForm();

      form.uploadDir = __dirname + "/../public/assets/images/blog";
      form.keepExtensions = true;
      form.maxFieldsSize = 10 * 1024 * 1024; // 10MB

      form.on('fileBegin', function(name, file) {
        file.path = path.join(__dirname, "../public/assets/images/blog", file.name);
      });

      let formData = "";

      let newPostPath;
      let newPostContent;

      form.parse(req, (error, fields, files) => {
        if (error) {
          console.log(`Cannot upload images. Error is ${error}`);
        }
        else {
          console.log("Form data parsing underway...");
          // console.log("The image file: ", files);
          // return;

        let mainImage = {
          name: files["mainImage"]["name"],
          size: files["mainImage"]["size"],
          // path: files["mainImage"]["path"],
          path: fields["mainImageUrl"],
          type: files["mainImage"]["type"]
        }

        let thumbnail = {
          name: files["thumbnail"]["name"],
          size: files["thumbnail"]["size"],
          // path: files["thumbnail"]["path"],
          path: fields["thumbnailUrl"],
          type: files["thumbnail"]["type"]
        }

        let timeOfPublication = Date.now();
        let dateOfPublication = Date(timeOfPublication);
        console.log("TODAY'S DATE", dateOfPublication);

        fields["mainImage"] = mainImage;
        fields["thumbnail"] = thumbnail;
        fields["authorName"] = "Bobby Sebolao";
        fields["timeOfPublication"] = timeOfPublication;
        fields["date"] = dateOfPublication;
        fields["readingminutes"] = readingTimeCalculator(fields["post"]);
        fields["filename"] = `${fields["postUrl"].toLowerCase().replace(/\s/g, "-")}.html`;

        // console.log("Form fields: ", fields["filename"]);
        // return;

        console.log("Uploaded images successfully");
        formData = fields;
        // console.log(formData, "LOOK HERE <=====");

        Promise.all([
          submitNewImage(fields),
          submitNewThumbnail(fields),
          submitNewPost(fields, fields["timeOfPublication"])
        ])
        // submitNewImage(fields)
        // .then(result => {
        //   submitNewThumbnail(fields)
        // })
        // .then(result => {
        //   submitNewPost(fields, fields["timeOfPublication"])
        // })
        .then(result => {
          newPostPath = `/blog/${fields["filename"]}`;

          newPostContent = createPostFromTemplate(fields["title"], fields["subtitle"], fields["post"], fields["date"], fields["readingminutes"], fields["mainImage"]["name"], fields["mainImageAltText"], fields["mainImageCaption"], fields["metatitle"], fields["metadescription"], newPostPath, fields["authorName"]);

          //   fs.writeFile(__dirname + `/../public` + newPostPath, newPostContent, function(error) {
          //     if (error) {
          //       console.log("Error: No such file exists");
          //       return;
          //   }
          //   console.log("Successfully written to file");
          //
          // });
        })
        .then(result => {
          // fs.readFile(__dirname + `/../public` + newPostPath, "utf8", function(error, file) {
          fs.readFile(__dirname + `/../public` + newPostPath, function(error, file) {
            if (error) {
              console.log("error");
              return;
            } else {
            console.log("HOOOOOOOOOOOHAAAAAAAAAA", newPostPath);
            // return;
            generateAWSSignature(`/sign-s3?file-name=${fields["filename"]}&file-type=text/html`)
            .then(response => {
              // const result = JSON.parse(response);
              getSignedAwsRequest.uploadFile(file, response.signedRequest);

            })
            .then(result => {

              // if (process.env.NODE_ENV === "local") {
                fs.unlink(__dirname + `/../public` + newPostPath, (err) => {
                  if (err) {
                    console.log(err)
                    return;
                  }
                  console.log("Blog post successfully deleted from local filesystem");
                })
              // }

              })
              .then(result => {

                // if (process.env.NODE_ENV === "local") {
                  fs.unlink(__dirname + "/../public/assets/images/blog/" + files["mainImage"]["name"], (err) => {
                    if (err) {
                      console.log(err)
                      return;
                    }
                    console.log("Main image successfully deleted from local filesystem");
                  })

                  fs.unlink(__dirname + "/../public/assets/images/blog/" + files["thumbnail"]["name"], (err) => {
                    if (err) {
                      console.log(err)
                      return;
                    }
                    console.log("Thumbnail successfully deleted from local filesystem");
                  })

                // }
              })
            .catch(error => console.log(error))

            // `/sign-s3?file-name=${fields["filename"]}&file-type=text/html`
            // let base64data = new Buffer(file, 'binary');
            // getSignedAwsRequest.getSignedAwsRequest(fields["filename"]);
            // res.writeHead(200, { "Content-Type": "text/html" });
            // res.end(file);
          }
          });

          // getSignedAwsRequest.getSignedAwsRequest(file, "text/html");
          // return;
        })
        .catch(error => console.log(error))

      }
      });

      // console.log(formData, "LOOK HERE <=====");
      // return;

      // STEP 6: Sending blog post to the Server
      // This stackoverflow answer helped me find out how to pass the image data
      // to the server: https://stackoverflow.com/questions/21745432/image-upload-to-server-in-node-js-without-using-express

      // let allTheData = "";
      // req.on("data", function(chunkOfData) {
      //   console.log("Writing to file...");
      //   allTheData += chunkOfData;
      // });

      // req.on("end", function() {
      //   const convertedData = querystring.parse(allTheData);

        // fs.readFile(__dirname + "/posts.json", "utf8", (error, file) => {
        //   if (error) {
        //     console.log(error);
        //     return;
        //   }
          // const blogPosts = JSON.parse(file);
          // console.log("Here's the posts.json: ", blogPosts);
          // console.log("Here's the length: ", Object.keys(blogPosts).length);

          // let timeOfPublication = Date.now();
          // let dateOfPublication = Date(timeOfPublication);
          // console.log("TODAY'S DATE", dateOfPublication);
          // blogPosts[timeOfPublication] = formData;
          // blogPosts[timeOfPublication]["authorName"] = "Bobby Sebolao";
          // blogPosts[timeOfPublication]["date"] = dateOfPublication;
          // blogPosts[timeOfPublication]["filename"] = `post-${Object.keys(blogPosts).length}.html`;
          // blogPosts[timeOfPublication]["readingminutes"] = readingTimeCalculator(blogPosts[timeOfPublication]["post"]);

          // submitNewImage(blogPosts[timeOfPublication], err => {
          //   if (err) {
          //     console.log(err);
          //   }
          // });

          // submitNewThumbnail(blogPosts[timeOfPublication], err => {
          //   if (err) {
          //     console.log(err);
          //   }
          // });

          // submitNewPost(blogPosts[timeOfPublication], timeOfPublication, err => {
          //   if (err) {
          //     console.log(err);
          //   }
          // });


      // });

      res.writeHead(302, { Location: "/blog/blog.html" });
      res.end();
    // });
  }
        })
        .catch(error => console.log(error))
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
      // console.log(formData);

      let emailToken;

      Promise.all([
        validateNewUser(formData),
        getUsernameValid(formData.username.toLowerCase())
      ])
      .then(response => hash.hashPassword(formData.password))
      .then(hash => submitNewUser(formData, hash))
      .then(response => {
        emailToken = generateEmailVerificationToken()
      })
      .then(token => {
        Promise.all([sendVerificationEmail(formData.first_name, formData.email, formData.username, emailToken), submitEmailVerificationToken(emailToken, formData.username)])
        .catch(console.error)
      })
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

  const calculateTokenAge = (timeOfCreation) => {
    return Date.now() - timeOfCreation;
  }

  const confirmEmailHandler = (req, endpoint, res) => {
    let token = endpoint.split("?evt=")[1].split("&username")[0];
    let username = endpoint.split("&username=")[1];
    console.log("The token", token);
    console.log("The username", username);
    // return;
    let tokenAge;
    console.log("Here it is: ", token);
    getEmailVerificationToken(token)
    .then(response => {
      tokenAge = calculateTokenAge(response.created_at);
      deleteEmailVerificationToken(token);
    })
    .then(response => {
      console.log(tokenAge);
      if (tokenAge < 43200000) {
        console.log("TOKEN IS VALID");
        updateVerifiedUser(username);
        // return;
        // generateJSONWebToken({username: username, is_verified: true})
        // .then(evt => {
          res.writeHead(302, {
            // "Set-Cookie": `evt=${evt}; max-age=9000; path=/; HttpOnly`,
            Location: "/blog/login.html"
          });
          res.end();
        // })
        // .catch(error => console.log(error))
      } else {
        console.log("TOKEN HAS EXPIRED");
        res.writeHead(302, {
          Location: "/blog/login.html"
        });
        res.end();
      }
    })
    .catch(error => console.log(error))
  }

  const awsSignatureHandler = (req, endpoint, res) => {
    generateAWSSignature(endpoint, res)
    .catch(error => console.log(error));
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

  // decodeJSONWebToken(encodedEvt)
  // .then(evt => {
    // console.log("This is the evt: ", evt);
    // if (evt.is_verified === true) {
      // console.log("The account is verified, proceeding with login...")
      getUser(loginData.username)
      .then(user => {
        storedUserDetails = user;
        if (storedUserDetails.is_verified !== true) {
          res.writeHead(400, { "content-type": "text/html" });
          res.end("You are not verified yet. Please click the link in your confirmation email");
        }
        else {
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
      }
      })
      .catch(error => console.log(error))

    // else {
    //   res.writeHead(400, { "content-type": "text/html" });
    //   res.end("You haven't verified this email address");
    // }
  // })


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
      .then(decodedToken => {
        if (decodedToken === undefined) {
          res.writeHead(400, { "Content-Type": "text/html" });
          res.end("You are not logged in. Please login in order to leave a comment")
        } else {
          userId = decodedToken.user_id
        }
      })
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
  recentPostsHandler,
  createAccountPageHandler,
  newPostHandler,
  domScriptsHandler,
  publicHandler,
  loginPageHandler,
  checkLoginStatusHandler,
  getCommentsHandler,
  getTagsHandler,
  createPostHandler,
  createAccountSubmitHandler,
  confirmEmailHandler,
  awsSignatureHandler,
  loginSubmitHandler,
  logoutHandler,
  commentSubmitHandler
};
