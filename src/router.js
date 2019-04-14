const handler = require("./handler");

const router = (request, response) => {
  const endpoint = request.url;
  const extension = endpoint.split(".")[1];
  const method = request.method;

  if (method === "GET") {

    if (endpoint === "/" || endpoint === "/index.html") {
      handler.homeHandler(response);
    }

    else if (endpoint === "/blog/all-posts") {
      handler.allPostsHandler(response);
    }

    else if (endpoint === "/blog/posts") {
      handler.postsJSONHandler(response);
    }

    else if (endpoint === "/blog/new") {
      handler.newPostHandler(response);
    }

    else if (endpoint.includes("/scripts")) {
      handler.domScriptsHandler(response, endpoint, extension);
    }

    else {
      handler.publicHandler(response, endpoint, extension);
    }
  }

  if (method === "POST") {
    if (endpoint === "/create/post") {
      handler.createPostHandler(request, response);
  }
  }
}

module.exports = router;
