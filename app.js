// Import Express and set up the app
const express = require("express");
const pug = require("pug");
const app = express();
const port = 3000;


//const router = express.Router();
//const { project } = require("../data/data.json");
const dataJson = require("./data/data.json");
const data = dataJson.projects;
//const data = dataJson.project;

//const data = require('data.json');

// Import routes
//const routes = require("./routes/routes");
//const indexRouter = require("./routes/index");
//const aboutRouter = require('./routes/about');  //getting errors
//const projectRouter = require('./routes/project');  //getting errors
//const apps = require('./routes/app');  //getting errors

//setting up a static (images & stylesheets) & express.static middleware to make the public folder contents available at the root of the application.
app.use("/static", express.static("public"));

//middleware set up
app.set("view engine", "pug");

/* GET home page. */
app.get("/", (req, res) => {
  res.render("index", { projects: data });
});

// app.get("/", function (req, res, next) {
//   // 1. Pass all project data to 'index' template
//   res.render("index", { project });
// });

app.get("/", (req, res) => {
  res.send("Welcome to My Portfolio!");
});

// app.get("/", (req, res) => {
//   res.render("index", { data });
// });

// Home Page route
//An "index" route (/) to render the "Home" page with the locals set to data.projects
// app.get("/", (req, res, next) => {
//   // Log statement to indicate that this function is running
//   console.log('Handling request to root or "home" route, "/"');
//   //res.render('index', { project });  //error says project and/or projects is not defined
// });

  //About Page route
  app.get("/about", (req, res, next) => {
    console.log('Handling request to "about" route, "/about"');
  });


/* GET project page. */
// app.get("/projects/:id", function (req, res, next) {
//   //const projectId = req.params.id;
//   const projects = projects.find(({ id }) => id === +projectsId);

//   if (projects) {
//     // 2. Pass the project data to the 'project' template
//     res.render("project", { projects });
//   } else {
//     res.sendStatus(404);
//   }
// });



// app.get("/project/:id", (req, res, next) => {
//   const projectId = req.params.id;
//   const project = data[projectId];

//   if (project) {
//     res.render("project", { project });
//   } else {
//     next();
//   }
// });

  //Project page route
  app.get("/projects/:id", (req, res, next) => {
    const projectId = req.params.id;
    const project = projects.find(({ id }) => id === +projectId);
    if (project) {
      res.render("project", { project });
    } else {
      const err = new Error("not found");
      err.status = 404;
      err.message = "Sorry your request could not be found";
      res.render("error", { err });
    }
  });

// Pass route handlers to the app
//app.use("/", routes);
//app.use("/", indexRouter);

// Import 404 and global error handlers
const errorHandlers = require("./errorHandlers");

// Pass 404 and global error handlers to the app
// app.use(errorHandlers.handleFourOhFour);
// app.use(errorHandlers.handleGlobalError);

app.use((req, res, next) => {
  const err = new Error("Not Found");
  err.status = 404;
  console.log("Error 404 Not Found");
  next(err);
});


//Handling errors caught by route handlers
app.use((err, req, res, next) => {
  if ((err.status = 404)) {
    err.message = "Not Found";
    console.log("Error 404 Sorry Your Page was Not Found");
    res.status(404).render("not-found", { err });
  } else {
    err.message = "Uh oh, something is wrong with the server";
    err.status = 500;
    console.log("Error 500 Something is wrong with the server");
    res.render("error");
  }
});

/*
 * 404 and Global Error Handlers
 */

// Error handler for handling non-existent routes
const handleFourOhFour = (req, res, next) => {
  // Log statement to indicate that this function is running
  console.log("Handling 404 error");

  // Created new error to handle non-existent routes
  const err = new Error("err");
  err.status = 404;
  err.message = "Oops, page not found. Looks like that route does not exist.";

  // Pass error to global error handler below
  next(err);
};

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
