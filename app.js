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
app.use((req, res, next) => {
  const err = new Error("Not Found");
    err.status = 404;
    next(err);
});

// Global error handler
app.use((err, req, res, next) => {
  if (err.status === 404) {
    res.status(404).render('page-not-found', { err });
    console.log("Handling 404 error");
  } else {
    err.message = err.message || `Oops!  It looks like something went wrong on the server.`;
    res.status(err.status || 500).render('error', { err });
  }
});

// Turn on Express Server
app.listen(port, () => {
  console.log("Server listening on port 3000");
});

module.exports = app;
