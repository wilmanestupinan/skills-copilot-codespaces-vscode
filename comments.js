// create a new web server
const express = require("express");
const app = express();

// set up the static file server
// to serve static files from a directory named public
app.use(express.static("public"));

// create comments object
let comments = [
  { name: "John", message: "Hello!" },
  { name: "Jane", message: "Hi!" },
  { name: "Jack", message: "Good morning!" },
];

// send back comments
app.get("/comments", (req, res) => {
  res.json(comments);
});

// start the web server
app.listen(3000, () => {
  console.log("Server started at http://localhost:3000/");
});
