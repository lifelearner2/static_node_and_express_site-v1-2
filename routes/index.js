const express = require('express');
const router = express.Router();
const { projects } = require('../data/data.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  // 1. Pass all project data to 'index' template
  res.render('index');
});

/* GET project page. */
router.get('/projects/:id', function(req, res, next) {
  const projectId = req.params.id;
  const project = projects.find( ({ id }) => id === +projectId );
  
  if (project) {
    // 2. Pass the project data to the 'project' template
    res.render('project');
  } else {
    res.sendStatus(404);
  }
});

module.exports = router;