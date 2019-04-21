const http = require("http");
const router = require("./src/router.js");
// console.log("hello");
const server = http.createServer(router);
const port = process.env.PORT || 9000;

server.listen(port, function() {
  console.log(`Server is listening on port ${port}`);
});
