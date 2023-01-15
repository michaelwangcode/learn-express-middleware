# Learn Express Middleware

This project is based off the [Learn Express Middleware In 14 Minutes](https://www.youtube.com/watch?v=lY6icfhap2o) tutorial by Web Dev Simplified.

To run this project, type "nodemon server.js" in the terminal.

The project can be viewed in a web browser at: http://localhost:3000/


## Introduction

Create a server.js file and add a basic express template with routes.

Type "npm init -y" to create a package.json file and type "npm i express" to install the express library.


## What Is Middleware

Middleware is any code that gets executed between the server recieving a request and the server sending a response to the client.

Request -> Middleware -> Response

The app.get functions are actually considered middleware because the code gets executed between the server request and response. 


## Login Middleware 

You can create a custom middleware function by declaring a normal function with (req, res, next) as the parameters.

To call the function, use app.use() and pass in the function name.

The 'next' parameter is often omitted in the app.get functions because we don't want to advance to the next function.

Middleware is run in the order that they are defined in the server.js file.

