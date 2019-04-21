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

    else if (endpoint === "/blog/login") {
      handler.loginPageHandler(response);
    }

    else if (endpoint === "/create/account") {
      handler.createAccountPageHandler(response);
  }

    else if (endpoint === "/blog/new") {
      handler.newPostHandler(response);
    }

    else if (endpoint.includes("/scripts")) {
      handler.domScriptsHandler(response, endpoint, extension);
    }

    else {
      let cookies = cookie.parse(request.headers.cookie);
      //
      console.log("YOOHOO :", cookies);
      handler.publicHandler(response, endpoint, extension);
    }
  }

  if (method === "POST") {
    if (endpoint === "/create/post") {
      handler.createPostHandler(request, response);
  }

  else if (endpoint === "/create/account") {
    handler.createAccountSubmitHandler(request, response);
}

else if (endpoint === "/blog/login") {
  handler.loginSubmitHandler(request, response);
}

// else if (endpoint === "/blog/logout") {
//   handler.logoutHandler(response);
// }

else if (endpoint.includes("/create/comment")) {
  let jwt = cookie.parse(request.headers.cookie).jwt;
  // console.log("JWT :", jwt);
  handler.commentSubmitHandler(request, response, jwt);
}
  }
}

module.exports = router;
