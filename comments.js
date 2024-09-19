// Create web server and listen on port 3000
// Use the comments.js file to handle requests to /comments path
// The comments.js file should export a function that takes a request and response object as arguments

var http = require("http");
var comments = require("./comments");

http
  .createServer(function (req, res) {
    if (req.url === "/comments") {
      comments(req, res);
    } else {
      res.end("Not found");
    }
  })
  .listen(3000);
