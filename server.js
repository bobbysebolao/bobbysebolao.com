const http = require("http");
const handler = require("./src/handler.js");
// console.log("hello");
const server = http.createServer(handler);
const port = process.env.PORT || 9000;

server.listen(port, function() {
  console.log(`Server is listening on port ${port}`);
});

// function handler(request, response) {
//   const endpoint = request.url;
//   console.log(endpoint);
//   const method = request.method;
//   // console.log(endpoint);
//   console.log(method);
//
//   if (method === "GET") {
//     if (endpoint === "/") {
//       response.writeHead(200, { "Content-Type": "text/html" });
//
//       fs.readFile(__dirname + "/public/index.html", function(error, file) {
//         if (error) {
//           console.log("error");
//           return;
//         }
//         response.end(file);
//       });
//     } else if (endpoint === "/node") {
//       response.writeHead(200, { "Content-Type": "text/html" });
//       response.write("You're on the home page"); //response body
//       response.end(); // finish response
//     } else if (endpoint === "/girls") {
//       response.writeHead(200, { "Content-Type": "text/html" });
//       response.write("You're on the about Node Girls page"); //response body
//       response.end(); // finish response
//     } else {
//       const extension = endpoint.split(".")[1];
//       console.log(extension);
//
//       fs.readFile(__dirname + "/public/" + endpoint, function(error, file) {
//         if (error) {
//           // console.log("error");
//           return;
//         }
//         response.writeHead(200, { "Content-Type": extensionType[extension] });
//         response.end(file);
//       });
//     }
//   }
//
//   if (method === "POST") {
//     if (endpoint === "/create-post") {
//       //STEP 6: Sending blog post to the Server
//
//       let allTheData = "";
//       request.on("data", function(chunkOfData) {
//         allTheData += chunkOfData;
//       });
//
//       request.on("end", function() {
//         const convertedData = querystring.parse(allTheData);
//         console.log("This is convertedData", convertedData);
//         response.writeHead(302, { Location: "/" });
//         response.end();
//       });
//
//       // response.writeHead(200, {"Location": "/index.html"});
//       // response.write("You're on the home page"); //response body
//       // response.end(); // finish response
//     }
//   }
// }
