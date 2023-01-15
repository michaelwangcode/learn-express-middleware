// Express setup
const express = require("express");
const app = express();


// Use the logger function as global middleware
// This function gets called before any page is loaded
app.use(logger);


// Get route for home page
app.get("/", (req, res) => {

  // Print message to the console
  console.log("Home Page");

  // Display "Home Page" on the page
  res.send("Home Page");
});


// Get route for /users page
app.get("/users", auth, (req, res) => {
  
  // Print out whether the user is an admin
  console.log(`User is admin = ${req.admin}`);

  // Print message to the console
  console.log("Users Page");

  // Display "Users Page" on the page
  res.send("Users Page");
});


// Log in middleware function
function logger(req, res, next) {

  // Print the URL to the console
  console.log(req.originalUrl);

  // Advance to the next piece of middleware
  next();
}


// Authentication middleware function
function auth(req, res, next) {

  // If the admin varible is set to "true", perform the following actions
  // You can set this by adding ?admin=true to the URL
  if (req.query.admin === "true") {

    // Set the admin variable so it can be accessed by the app.get function
    req.admin = true;

    // Advance to the next piece of middleware (display the users page)
    next();

  // Otherwise,
  } else {

    // Display "No Auth" on the page
    res.send("No Auth");
  }
}


// Run the app on localhost:3000
app.listen(3000);
