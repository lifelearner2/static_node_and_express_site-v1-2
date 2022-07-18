/*
 * Route Handlers
 */
//import 'express' & set up 'express.Router'
// const express = require("express");
// const router = express.Router();

//Import helpers module
//const helpers = require('./helpers');

//const { projects } = require('../data');  //getting errors

// Home Page route
//An "index" route (/) to render the "Home" page with the locals set to data.projects
// router.get("/", (req, res, next) => {
  // Log statement to indicate that this function is running
  // console.log('Handling request to root or "home" route, "/"');
  //res.render('index', { project });  //error says project and/or projects is not defined

  // //About Page route
  // router.get("/about", (req, res, next) => {
  //   console.log('Handling request to "about" route, "/about"');
  // });

  // //Project page route
  // router.get("/project/:id", (req, res, next) => {
  //   const projectId = req.params.id;
  //   const project = projects.find(({ id }) => id === +projectId);
  //   if (project) {
  //     res.render("project", { project });
  //   } else {
  //     const err = new Error("not found");
  //     err.status = 404;
  //     err.message = "Sorry your request could not be found";
  //     res.render("error", { err });
  //   }
  // });
});
// Export router
//module.exports = router;
