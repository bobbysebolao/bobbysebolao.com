const handler = require("./handler");
// const cookie = require("cookie");

// const router = (request, response) => {
//   const endpoint = request.url;
//   let extension = endpoint.split(".")[1];

//   const method = request.method;

//   if (method === "GET") {
//     if (endpoint === "/" || endpoint === "/index.html") {
//       handler.homeHandler(response);
//     } else if (endpoint === "/blog/posts/jamstack-conf-2019-recap.html") {
//       response.writeHead(301, {
//         Location: "/posts/jamstack-conf-2019-recap.html"
//       });
//       response.end();
//     } else if (endpoint === "/blog/all-posts") {
//       handler.allPostsHandler(request, response);
//     } else if (endpoint === "/blog/posts") {
//       handler.postsJSONHandler(response);
//     } else if (endpoint === "/blog/recent-posts") {
//       handler.recentPostsHandler(response);
//     } else if (endpoint === "/blog/main-images") {
//       handler.mainImagesHandler(response);
//     } else if (endpoint === "/blog/comments") {
//       handler.getCommentsHandler(request, response);
//     } else if (endpoint === "/blog/author") {
//       handler.getAuthorHandler(request, response, endpoint);
//     } else if (endpoint.includes("/blog/tags?q=")) {
//       handler.getTagsHandler(request, response);
//     } else if (endpoint === "/blog/login") {
//       handler.loginPageHandler(response);
//     } else if (endpoint === "/blog/logout") {
//       handler.logoutHandler(request, response);
//     } else if (endpoint === "/create/account") {
//       handler.createAccountPageHandler(response);
//     } else if (endpoint === "/blog/new") {
//       handler.newPostHandler(request, response);
//     } else if (endpoint === "/blog/image-manager") {
//       handler.imageManagerPageHandler(request, response);
//     } else if (endpoint === "/blog/check-login-status") {
//       handler.checkLoginStatusHandler(request, response);
//     } else if (endpoint === "/projects") {
//       handler.getProjectsHandler(request, response);
//     } 
//     else if (endpoint.includes("/blog/confirm-email")) {
//       handler.confirmEmailHandler(request, endpoint, response);
//     } else if (endpoint.includes("/sign-s3")) {
//       handler.awsSignatureHandler(request, endpoint, response);
//     } else if (endpoint.includes("/posts/") && endpoint.includes(".html")) {
//       handler.specificPostHandler(request, response, endpoint);
//     }

//     else {
//       handler.publicHandler(response, endpoint, extension);
//     }
//   }

//   if (method === "POST") {
//     if (endpoint === "/contact/send") {
//       handler.contactFormHandler(request, response);
//     } else if (endpoint === "/create/post") {
//       let jwt = cookie.parse(request.headers.cookie).jwt;
//       handler.createPostHandler(request, response, jwt);
//     } else if (endpoint === "/create/image") {
//       let jwt = cookie.parse(request.headers.cookie).jwt;
//       handler.uploadImageHandler(request, response, jwt);
//     } else if (endpoint === "/create/account") {
//       handler.createAccountSubmitHandler(request, response);
//     } else if (endpoint === "/blog/login") {
//       handler.loginSubmitHandler(request, response);
//     } else if (endpoint.includes("/create/comment")) {
//       let jwt = cookie.parse(request.headers.cookie).jwt;
//       handler.commentSubmitHandler(request, response, jwt);
//     }
//   }
// };

// module.exports = router;

exports.routes = (app) => {
  /* Manual redirects */
  app.get("/blog/posts/jamstack-conf-2019-recap.html", (req, res) => {
    res.redirect("/posts/jamstack-conf-2019-recap.html");
  });

  /* Home route handlers */
  app.get("/", handler.homeHandler);
  app.get("/projects", handler.getProjectsHandler);
  app.post("/contact/send", handler.contactFormHandler);

  /* Blog route handlers */
  app.get("/blog/all-posts", handler.allPostsHandler);
  app.get("/blog/posts", handler.postsJSONHandler);
  app.get("/blog/recent-posts", handler.recentPostsHandler);
  app.get("/blog/main-images", handler.mainImagesHandler);
  app.get("/blog/comments", handler.getCommentsHandler);
  app.get("/blog/author", handler.getAuthorHandler);
  app.get("/blog/tags", handler.getTagsHandler);
  app.get("/blog/login", handler.loginPageHandler);
  app.get("/blog/logout", handler.logoutHandler);
  app.get("/create/account", handler.createAccountPageHandler);
  app.get("/blog/new", handler.newPostHandler);
  app.get("/blog/image-manager", handler.imageManagerPageHandler);
  app.get("/blog/check-login-status", handler.checkLoginStatusHandler);
  app.get("/blog/confirm-email", handler.confirmEmailHandler);
  app.get("/sign-s3", handler.awsSignatureHandler);
  app.get("/posts/", handler.specificPostHandler);
  app.get("/posts/", handler.specificPostHandler);
  app.post("/create/post", handler.createPostHandler);
  app.post("/create/image", handler.uploadImageHandler);
  app.post("/create/account", handler.createAccountSubmitHandler);
  app.post("/create/login", handler.loginSubmitHandler);
  app.post("/create/comment", handler.commentSubmitHandler);
 }