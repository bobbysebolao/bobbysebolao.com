const handler = require("./handler");
const cookie = require('cookie');

const router = (request, response) => {
  const endpoint = request.url;
  const extension = endpoint.split(".")[1];
  const method = request.method;

  if (method === "GET") {

    if (endpoint === "/" || endpoint === "/index.html") {
      handler.homeHandler(response);
    }

    else if (endpoint === "/blog/all-posts") {
      handler.allPostsHandler(request, response);
    }

    else if (endpoint === "/blog/posts") {
      handler.postsJSONHandler(response);
    }

    else if (endpoint === "/blog/recent-posts") {
      handler.recentPostsHandler(response);
    }

    else if (endpoint === "/blog/comments") {
      handler.getCommentsHandler(request, response);
    }

    else if (endpoint.includes("/blog/tags")) {
      console.log("Tag request reached the router");
      console.log("The request URL is: ", request.url);
      // return;
      handler.getTagsHandler(request, response);
    }

    else if (endpoint === "/blog/login") {
      // console.log("BOASTY", request.headers.referer)
      handler.loginPageHandler(response);
    }

    else if (endpoint === "/blog/logout") {
      handler.logoutHandler(response);
    }

    else if (endpoint === "/create/account") {
      handler.createAccountPageHandler(response);
  }

    else if (endpoint === "/blog/new") {
      handler.newPostHandler(response);
    }

    else if (endpoint === "/blog/check-login-status") {
      let jwt = cookie.parse(request.headers.cookie).jwt;
      if (jwt !== undefined) {
      handler.checkLoginStatusHandler(response, jwt);
    }
    else {
      response.end("false")
    }
    }

    else if (endpoint.includes("/scripts")) {
      handler.domScriptsHandler(response, endpoint, extension);
    }

    else if (endpoint.includes("/blog/confirm-email")) {
      // console.log("BOASTY", request.headers.referer)
      // console.log("PROGRESS!!!");
      // console.log(request.url);
      handler.confirmEmailHandler(request, endpoint, response);
    }

    else if (endpoint.includes("/sign-s3")) {
      // console.log(endpoint)
      handler.awsSignatureHandler(request, endpoint, response);
    }

    else {
      handler.publicHandler(response, endpoint, extension);
    }
  }

  if (method === "POST") {
    if (endpoint === "/create/post") {
      let jwt = cookie.parse(request.headers.cookie).jwt;
      handler.createPostHandler(request, response, jwt);
  }

  else if (endpoint === "/create/account") {
    handler.createAccountSubmitHandler(request, response);
}

else if (endpoint === "/blog/login") {
  // let evt = cookie.parse(request.headers.cookie).evt;
  handler.loginSubmitHandler(request, response);
}

else if (endpoint.includes("/create/comment")) {
  let jwt = cookie.parse(request.headers.cookie).jwt;
  handler.commentSubmitHandler(request, response, jwt);
  // console.log(response);
}
  }
}

module.exports = router;
