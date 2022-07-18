// const express = require("express");
// const router = express.Router();
// const { project } = require("../data/data.json");

// /* GET home page. */
// router.get("/", function (req, res, next) {
//   // 1. Pass all project data to 'index' template
//   res.render("index", { project });
// });

// /* GET project page. */
// router.get("/project/:id", function (req, res, next) {
//   const projectId = req.params.id;
//   const project = projects.find(({ id }) => id === +projectId);

//   if (project) {
//     // 2. Pass the project data to the 'project' template
//     res.render("project", { project });
//   } else {
//     res.sendStatus(404);
//   }
// });

//module.exports = router;
