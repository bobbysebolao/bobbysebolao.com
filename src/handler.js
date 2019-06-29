require("env2")("./config.env");

const fs = require("fs");
const querystring = require("query-string");
const path = require("path");
const formidable = require("formidable");
const cookie = require("cookie");

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
const decodeJSONWebToken = require("./authentication/decodeJWT.js");
const getPost = require("./queries/getPost.js");
const getComments = require("./queries/getComments.js");
const getUsername = require("./queries/getUsername.js");
const getTags = require("./queries/getTags.js");
const getAllPosts = require("./queries/getAllPosts.js");
const getAllThumbnails = require("./queries/getAllThumbnails.js");
const getAllMainImages = require("./queries/getAllMainImages.js");
const sendVerificationEmail = require("./authentication/sendVerificationEmail.js");
const generateEmailVerificationToken = require("./authentication/generateEmailVerificationToken.js");
const submitEmailVerificationToken = require("./queries/submitEmailVerificationToken.js");
const getEmailVerificationToken = require("./queries/getEmailVerificationToken.js");
const deleteEmailVerificationToken = require("./queries/deleteEmailVerificationToken.js");
const updateVerifiedUser = require("./queries/updateVerifiedUser.js");
const generateAWSSignature = require("./authentication/generateAWSSignature.js");
const getSignedAwsRequest = require("./authentication/getSignedAwsRequest.js");
const getProjects = require("./airtable/getProjects.js");

//GET REQUEST HANDLERS

const homeHandler = res => {
  fs.readFile(__dirname + "/../index.html", function(error, file) {
    if (error) {
      console.log("error");
      return;
    }
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(file);
  });
};

const allPostsHandler = (req, res) => {
  fs.readFile(__dirname + "/../public/blog/all-posts.html", function(
    error,
    file
  ) {
    if (error) {
      console.log("error");
      return;
    }
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(file);
  });
};

const specificPostHandler = (req, res, endpoint) => {
  console.log(endpoint);
  console.log("BOBO", endpoint.split("/")[3]);
  let filename = endpoint.split("/")[3];

  generateAWSSignature
    .getAwsFile(filename)
    .then(response => {
      let fileContents = response["Body"].toString();
      fs.writeFile(
        __dirname + "/../public" + endpoint,
        fileContents,
        (err, file) => {
          if (err) console.log(err);
          console.log(
            "File has been written to the local filepath! Now reading..."
          );

          fs.readFile(
            __dirname + "/../public" + endpoint,
            "utf8",
            (error, file) => {
              if (error) {
                console.log(error);
                return;
              }
              fs.unlink(__dirname + "/../public" + endpoint, err => {
                if (err) {
                  console.log(err);
                  return;
                }
                console.log(
                  "Main image successfully deleted from local filesystem"
                );
                res.writeHead(200, { "Content-Type": "text/html" });
                res.end(file);
              });
            }
          );
        }
      );
    })
    .catch(error => {
      console.log(error);
    });
};

const postsJSONHandler = res => {
  fs.readFile(__dirname + "/posts.json", "utf8", (error, file) => {
    if (error) {
      console.log(error);
      return;
    }
    res.writeHead(200, { "Content-Type": "application/json" });
    const blogPosts = JSON.parse(file);
    res.end(file);
  });
};

const recentPostsHandler = res => {
  console.log("All good");
  Promise.all([getAllPosts(), getAllThumbnails()])
    .then(response => {
      console.log("GGGOOO", response);
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
            posts[i]["thumbnail"] = thumbnails[j];
          }
        }
      }
      // return;
      res.end(JSON.stringify(posts));
    })
    .catch(error => console.log(error));
};

const mainImagesHandler = res => {
  console.log("All good");
  getAllMainImages()
    .then(images => {
      res.end(JSON.stringify(images));
    })
    .catch(error => console.log(error));
};

const createAccountPageHandler = res => {
  fs.readFile(
    __dirname + "/../public/blog/create-account.html",
    "utf8",
    (error, file) => {
      if (error) {
        console.log(error);
        return;
      }
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(file);
    }
  );
};

const newPostHandler = (req, res) => {
  let jwt = cookie.parse(req.headers.cookie).jwt;
  console.log(jwt);
  if (jwt !== undefined) {
    decodeJSONWebToken(jwt)
      .then(decodedToken => {
        if (decodedToken.logged_in === true) {
          if (decodedToken.role === "admin") {
            console.log("Commenter is logged in, display the gated content");
            fs.readFile(
              __dirname + "/../public/blog/create-post.html",
              "utf8",
              (error, file) => {
                if (error) {
                  console.log(error);
                  return;
                }
                res.writeHead(200, { "Content-Type": "text/html" });
                res.end(file);
              }
            );
          } else {
            res.writeHead(302, {
              Location: "./authorisation-failure.html"
            });
            // res.writeHead(400, { "Content-Type": "text/html" });
            res.end();
          }
        }
      })
      .catch(error => console.log(error));
  } else {
    res.writeHead(302, { Location: "/blog/publish-failure.html" });
    // res.writeHead(400, { "Content-Type": "text/html" });
    res.end();
  }
};

const imageManagerPageHandler = (req, res) => {
  let jwt = cookie.parse(req.headers.cookie).jwt;
  console.log(jwt);
  if (jwt !== undefined) {
    decodeJSONWebToken(jwt)
      .then(decodedToken => {
        if (decodedToken.logged_in === true) {
          if (decodedToken.role === "admin") {
            console.log("Commenter is logged in, display the gated content");
            fs.readFile(
              __dirname + "/../public/blog/image-manager.html",
              "utf8",
              (error, file) => {
                if (error) {
                  console.log(error);
                  return;
                }
                res.writeHead(200, { "Content-Type": "text/html" });
                res.end(file);
              }
            );
          } else {
            res.writeHead(302, {
              Location: "./authorisation-failure.html"
            });
            // res.writeHead(400, { "Content-Type": "text/html" });
            res.end();
          }
        }
      })
      .catch(error => console.log(error));
  } else {
    res.writeHead(302, { Location: "/blog/publish-failure.html" });
    // res.writeHead(400, { "Content-Type": "text/html" });
    res.end();
  }
};

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
    res.writeHead(200, { "Content-Type": extensionType[extension] });
    res.end(file);
  });
};

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
    json: "application/json",
    ttf: "application/octet-stream"
  };

  fs.readFile(__dirname + "/../public" + endpoint, function(error, file) {
    if (error) {
      console.log(
        "Error: One of the requested files couldn't be found (probably the favicon :P)"
      );
      console.log(endpoint);
      return;
    }
    res.writeHead(200, { "Content-Type": extensionType[extension] });
    res.end(file);
  });
};

const loginPageHandler = res => {
  fs.readFile(
    __dirname + "/../public/blog/login.html",
    "utf8",
    (error, file) => {
      if (error) {
        console.log(error);
        return;
      }
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(file);
    }
  );
};

const checkLoginStatusHandler = (req, res) => {
  let jwt = cookie.parse(req.headers.cookie).jwt;
  if (jwt !== undefined) {
    // console.log("Biggie");
    // return;
    let user = {};
    // let loginStatus;
    // let userId;
    decodeJSONWebToken(jwt)
      .then(decodedToken => {
        user.loginStatus = decodedToken.logged_in;
        user.id = decodedToken.user_id;
      })
      .then(unusedResult => {
        if (user.loginStatus === true) {
          console.log("Commenter is logged in, display the gated content");
          getUsername(user.id)
            .then(response => {
              user.username = response.username;
              user.avatar = response.avatar_filepath;
              user.role = response.role;
              // console.log("JOKER", response)
              // return;
              res.end(JSON.stringify(user));
            })
            .catch(error => console.log(error));
          // res.writeHead(302, { Location: `/blog/${postName}` });
          // res.end("true");
        }
      })
      .catch(error => console.log(error));
  } else {
    res.end("false");
  }
};

const getProjectsHandler = (req, res) => {
  // console.log("So far so good");
  getProjects()
    .then(response => {
      console.log("Boogie woogie", response);
      // return;
      res.end(JSON.stringify(response));
    })
    .catch(error => {
      console.log(error);
    });
};

const getCommentsHandler = (req, res) => {
  console.log(req.headers.referer.split("/")[5]);
  const postName = req.headers.referer.split("/")[5];
  let comments;
  getComments(postName)
    .then(result => res.end(JSON.stringify(result)))
    .catch(error => console.log(error));
};

const getAuthorHandler = (req, res, endpoint) => {
  let postName = req.headers.referer.split("/")[5];
  let authorData = {};
  getPost(postName)
    .then(postData => {
      console.log("Googlebot", postData);
      getUsername(postData.user_id)
        .then(response => {
          authorData.username = response.username;
          authorData.avatar = response.avatar_filepath;
          authorData.role = response.role;

          res.end(JSON.stringify(authorData));
        })
        .catch(err => console.log(err));
    })
    .catch(error => console.log(error));
};

const getTagsHandler = (req, res) => {
  const query = req.url.split("?q=")[1];
  console.log(query);
  getTags(query)
    .then(result => {
      console.log("Here are the matching tags: ", result);
      res.end(JSON.stringify(result));
    })
    .catch(error => {
      console.log(error);
      res.end(JSON.stringify(""));
    });
  return;
};

//POST REQUEST HANDLERS

const createPostHandler = (req, res, encodedJwt) => {
  console.log("POST request received");

  let username;

  decodeJSONWebToken(encodedJwt)
    .then(decodedToken => {
      if (decodedToken === undefined) {
        res.writeHead(302, { Location: "/blog/publish-failure.html" });
        // res.writeHead(400, { "Content-Type": "text/html" });
        res.end();
        // res.writeHead(400, { "Content-Type": "text/html" });
        // res.end(
        //   "You are not logged in. Please login in order to publish a post"
        // );
      } else if (decodedToken.logged_in === true) {
        username = decodedToken.username;
        console.log(username);
        console.log("NO 2");

        let form = new formidable.IncomingForm();

        form.uploadDir = __dirname + "/../public/assets/images/blog";
        form.keepExtensions = true;
        form.maxFieldsSize = 10 * 1024 * 1024; // 10MB

        form.on("fileBegin", function(name, file) {
          file.path = path.join(
            __dirname,
            "../public/assets/images/blog",
            file.name
          );
        });

        let formData;

        let newPostPath;
        let newPostContent;

        console.log("NO 3");

        form.parse(req, (error, fields, files) => {
          if (error) {
            console.log(`Cannot upload images. Error is ${error}`);
            return error;
          } else {
            console.log("Form data parsing underway...");
            // console.log("The image file: ", files);
            // return;

            let mainImage = {
              name: files["mainImage"]["name"],
              size: files["mainImage"]["size"],
              // path: files["mainImage"]["path"],
              path: fields["mainImageUrl"],
              type: files["mainImage"]["type"]
            };

            let thumbnail = {
              name: files["thumbnail"]["name"],
              size: files["thumbnail"]["size"],
              // path: files["thumbnail"]["path"],
              path: fields["thumbnailUrl"],
              type: files["thumbnail"]["type"]
            };

            let timeOfPublication = Date.now();
            let dateOfPublication = Date(timeOfPublication);
            console.log("TODAY'S DATE", dateOfPublication);

            fields["mainImage"] = mainImage;
            fields["thumbnail"] = thumbnail;
            fields["authorName"] = username;
            fields["timeOfPublication"] = timeOfPublication;
            fields["date"] = dateOfPublication;
            fields["readingminutes"] = readingTimeCalculator(fields["post"]);
            fields["filename"] = `${fields["postUrl"]
              .toLowerCase()
              .replace(/\s/g, "-")}.html`;
            fields[
              "filepath"
            ] = `https://s3.eu-west-2.amazonaws.com/console-blog/blog-posts/${
              fields["filename"]
            }`;

            // console.log("Form fields: ", fields["filename"]);
            // return;

            console.log("Uploaded images successfully");
            formData = fields;
            console.log(formData, "LOOK HERE <=====");

            Promise.all([submitNewImage(fields), submitNewThumbnail(fields)])
              .then(response => {
                submitNewPost(fields, fields["timeOfPublication"]);
              })
              .then(result => {
                console.log("STILL DRE");
                newPostPath = `/blog/${fields["filename"]}`;

                newPostContent = createPostFromTemplate(
                  fields["title"],
                  fields["subtitle"],
                  fields["post"],
                  fields["date"],
                  fields["readingminutes"],
                  fields["mainImage"]["name"],
                  fields["mainImageAltText"],
                  fields["mainImageCaption"],
                  fields["metatitle"],
                  fields["metadescription"],
                  newPostPath,
                  fields["authorName"]
                );

                console.log("HOOOOOOOOOOOHAAAAAAAAAA", newPostPath);
                // return;
                generateAWSSignature
                  .generateAWSSignature(
                    `/sign-s3?file-name=${
                      fields["filename"]
                    }&file-type=text/html`
                  )
                  .then(response => {
                    // const result = JSON.parse(response);
                    console.log("DJANGO UNCHAINED");
                    getSignedAwsRequest.uploadFile(
                      newPostContent,
                      response.signedRequest
                    );
                  })
                  .then(result => {
                    fs.unlink(
                      __dirname +
                        "/../public/assets/images/blog/" +
                        files["mainImage"]["name"],
                      err => {
                        if (err) {
                          console.log(err);
                          return;
                        }
                        console.log(
                          "Main image successfully deleted from local filesystem"
                        );
                      }
                    );

                    fs.unlink(
                      __dirname +
                        "/../public/assets/images/blog/" +
                        files["thumbnail"]["name"],
                      err => {
                        if (err) {
                          console.log(err);
                          return;
                        }
                        console.log(
                          "Thumbnail successfully deleted from local filesystem"
                        );
                      }
                    );
                  })
                  .catch(error => console.log(error));
              })
              .then(response => {
                res.writeHead(302, { Location: "/blog/blog.html" });
                res.end();
              })
              .catch(error => console.log(error));
          }
        });
      }
    })
    .catch(error => console.log(error));
};

const uploadImageHandler = (req, res, encodedJwt) => {
  console.log("IMAGE UPLOAD request received");
  // return;

  let username;

  decodeJSONWebToken(encodedJwt)
    .then(decodedToken => {
      if (decodedToken === undefined) {
        res.writeHead(302, { Location: "/blog/publish-failure.html" });
        // res.writeHead(400, { "Content-Type": "text/html" });
        res.end();
        // res.writeHead(400, { "Content-Type": "text/html" });
        // res.end(
        //   "You are not logged in. Please login in order to publish a post"
        // );
      } else if (decodedToken.logged_in === true) {
        username = decodedToken.username;
        console.log(username);

        console.log("NO 2");

        let form = new formidable.IncomingForm();

        form.uploadDir = __dirname + "/../public/assets/images/blog";
        form.keepExtensions = true;
        form.maxFieldsSize = 10 * 1024 * 1024; // 10MB

        form.on("fileBegin", function(name, file) {
          file.path = path.join(
            __dirname,
            "../public/assets/images/blog",
            file.name
          );
        });

        let formData;

        form.parse(req, (error, fields, files) => {
          if (error) {
            console.log(`Cannot upload images. Error is ${error}`);
            return error;
          } else {
            console.log("Form data parsing underway...");
            // console.log("The image file: ", files);
            // return;

            let mainImage = {
              name: files["mainImage"]["name"],
              size: files["mainImage"]["size"],
              // path: files["mainImage"]["path"],
              path: fields["mainImageUrl"],
              type: files["mainImage"]["type"]
            };

            console.log("MAIN", mainImage);
            // return;

            fields["mainImage"] = mainImage;

            console.log("Uploaded images successfully");
            formData = fields;
            console.log(formData, "LOOK HERE <=====");
            // return;

            submitNewImage(fields)
              .then(result => {
                fs.unlink(
                  __dirname +
                    "/../public/assets/images/blog/" +
                    files["mainImage"]["name"],
                  err => {
                    if (err) {
                      console.log(err);
                      return;
                    }
                    console.log(
                      "Main image successfully deleted from local filesystem"
                    );
                  }
                );
              })
              .then(response => {
                res.writeHead(302, { Location: "/blog/image-manager" });
                res.end();
              })
              .catch(error => console.log(error));
          }
        });
      }
    })
    .catch(error => console.log(error));
};

const createAccountSubmitHandler = (req, res) => {
  let form = new formidable.IncomingForm();

  let filename;

  form.uploadDir = __dirname + "/../public/assets/images/users";
  form.keepExtensions = true;
  form.maxFieldsSize = 10 * 1024 * 1024; // 10MB

  form.on("fileBegin", function(name, file) {
    filename = file.name;
    file.path = path.join(
      __dirname,
      "../public/assets/images/users",
      file.name
    );
  });

  let formData = "";

  form.parse(req, function(error, fields, files) {
    if (error) {
      console.log(`Cannot upload images. Error is ${error}`);
    } else {
      let userImage = {
        name: files["userImage"]["name"],
        size: files["userImage"]["size"],
        path: fields["userUrl"],
        type: files["userImage"]["type"]
      };

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
          emailToken = generateEmailVerificationToken();
        })
        .then(token => {
          Promise.all([
            sendVerificationEmail(
              formData.first_name,
              formData.email,
              formData.username,
              emailToken
            ),
            submitEmailVerificationToken(emailToken, formData.username)
          ]).catch(console.error);
        })
        .then(response => {
          fs.unlink(
            __dirname + "/../public/assets/images/users/" + filename,
            err => {
              if (err) {
                console.log(err);
                return;
              }
              console.log(
                "User image successfully deleted from local filesystem"
              );
              res.writeHead(302, { Location: "/blog/validate-account.html" });
              res.end();
            }
          );
        })
        .catch(err => {
          res.writeHead(400, {
            "Content-Type": "text/html"
          });
          console.log(err);
          res.writeHead(302, { Location: "/blog/register-failure.html" });
          // res.writeHead(400, { "Content-Type": "text/html" });
          res.end();
        });
    }
  });
};

const calculateTokenAge = timeOfCreation => {
  return Date.now() - timeOfCreation;
};

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
    .catch(error => console.log(error));
};

const awsSignatureHandler = (req, endpoint, res) => {
  generateAWSSignature
    .generateAWSSignature(endpoint, res)
    .catch(error => console.log(error));
};

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
          res.writeHead(302, { Location: "/blog/validate-account.html" });
          res.end();
        } else {
          hash
            .comparePassword(loginData.password, storedUserDetails.password)
            .then(pass => {
              if (pass === true) {
                generateJSONWebToken({
                  user_id: storedUserDetails.pk_user_id,
                  username: storedUserDetails.username,
                  logged_in: true,
                  role: storedUserDetails.role
                })
                  .then(token => {
                    res.writeHead(302, {
                      "Set-Cookie": `jwt=${token}; max-age=9000; path=/; domain=; HttpOnly`,
                      Location: "/blog/blog.html"
                    });
                    res.end();
                  })
                  .catch(error => console.log(error));
              } else {
                res.writeHead(302, { Location: "/blog/login-failure.html" });
                // res.writeHead(400, { "content-type": "text/html" });
                res.end();
              }
            })
            .catch(error => console.log(error));
        }
      })
      .catch(error => console.log(error));

    // else {
    //   res.writeHead(400, { "content-type": "text/html" });
    //   res.end("You haven't verified this email address");
    // }
    // })
  });
};

const logoutHandler = res => {
  res.writeHead(302, {
    "Set-Cookie": `jwt=; expires=Thu, 01 Jan 1970 00:00:00 GMT; max-age=0`,
    Location: "/blog/blog.html"
  });
  res.end();
};

const commentSubmitHandler = (req, res, encodedJwt) => {
  let allTheData = "";

  req.on("data", chunk => {
    allTheData += chunk;
  });

  req.on("end", () => {
    const comment = querystring.parse(allTheData);
    const postName = req.headers.referer.split("/")[5];
    console.log(postName);
    // return;
    let userId = "";
    let postId = "";
    let commentTimestamp;
    let commentDate;
    let username;
    let avatarName;
    let avatarFilepath;
    decodeJSONWebToken(encodedJwt)
      .then(decodedToken => {
        if (decodedToken === undefined) {
          res.writeHead(302, { Location: "/blog/publish-failure.html" });
          // res.writeHead(400, { "Content-Type": "text/html" });
          res.end();
        } else {
          userId = decodedToken.user_id;
        }
      })
      .then(unusedResult => getPost(postName))
      .then(retrievedPost => {
        postId = retrievedPost.pk_post_id;
        commentTimestamp = Date.now();
        commentDate = Date(commentTimestamp);
      })
      .then(unusedResult => {
        getUsername(userId).then(result => {
          username = result.username;
          avatarName = result.avatar_name;
          avatarFilepath = result.avatar_filepath;
          submitNewComment(
            comment.comment,
            postId,
            userId,
            commentTimestamp,
            commentDate,
            username,
            avatarName,
            avatarFilepath
          ).then(commentStatus => {
            console.log("Is it true: ", commentStatus);
            if (commentStatus === true) {
              console.log("Yes it is");
              res.writeHead(302, { Location: `/blog/posts/${postName}` });
              res.end();
            }
          });
        });
      })
      .catch(error => console.log(error));
  });
};

module.exports = {
  homeHandler,
  allPostsHandler,
  specificPostHandler,
  postsJSONHandler,
  recentPostsHandler,
  mainImagesHandler,
  createAccountPageHandler,
  newPostHandler,
  imageManagerPageHandler,
  domScriptsHandler,
  publicHandler,
  loginPageHandler,
  checkLoginStatusHandler,
  getProjectsHandler,
  getCommentsHandler,
  getAuthorHandler,
  getTagsHandler,
  createPostHandler,
  uploadImageHandler,
  createAccountSubmitHandler,
  confirmEmailHandler,
  awsSignatureHandler,
  loginSubmitHandler,
  logoutHandler,
  commentSubmitHandler
};
