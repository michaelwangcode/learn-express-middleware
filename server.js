// Express setup
const express = require("express");
const app = express();


// Use the logger function as global middleware
// This function gets called before any page is loaded
app.use(logger);


// Get route for home page
app.get("/", (req, res) => {
  console.log("Home Page");
  res.send("Home Page");
});


// Get route for /users page
app.get("/users", (req, res) => {
  console.log("Users Page");
  res.send("Users Page");
});


// Log in middleware function
function logger(req, res, next) {
  console.log("Log");

  // Advance to the next piece of middleware
  next();
}


// Run the app on localhost:3000
app.listen(3000);
