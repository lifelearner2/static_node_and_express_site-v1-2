// Import Express and set up the app
const express = require("express");
const pug = require("pug");
const app = express();
const port = 3000;
const {projects} = require("./data/data.json");

//setting up a static (images & stylesheets) & express.static middleware to make the public folder contents available at the root of the application.
app.use("/static", express.static("public"));

//middleware set up
app.set("view engine", "pug");

/* GET home page. */
app.get("/", (req, res) => {
  res.render("index", { projects: projects });
});

//About Page route
app.get("/about", (req, res, next) => {
  res.render("about");
  console.log('Handling request to "about" route, "/about"');
});

/* GET project page. */
app.get("/project/:id", (req, res, next) => {
  // res.render("project");
  console.log('Processing request for "Projects" page');
  const projectId = req.params.id;
  const project = projects.find(({ id }) => id === +projectId);
    if (project) {
      res.render("project", { project });
    } else {
      next();
    }
})
//Handling errors caught by route handlers
app.use((err, req, res, next) => {
  if ((err.status = 404)) {
    err.message = "page-not-found";
    console.log("Error 404 Sorry Your Page was Not Found");
    res.status(404).render("page-not-found", { err });
  } else {
    err.message = "Uh oh, something is wrong with the server";
    err.status = 500;
    console.log("Error 500 Something is wrong with the server");
    res.render("error");
  }
});

  // Log statement to indicate that this function is running
  console.log("Handling 404 error");

// Global error handler
const handleGlobalError = (err, req, res, next) => {
  // Log statement to indicate that this function is running
  console.log("Handling a global error");
  console.log(err);

  // Set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // Set error status and send error message to the page
  res.status(err.status || 500);
  res.send(err.message);
};

// Turn on Express Server
app.listen(port, () => {
  console.log("Server listening on port 3000");
});

module.exports = app;
