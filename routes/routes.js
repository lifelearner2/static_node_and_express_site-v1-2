/*
* Route Handlers
*/
//import 'express' & set up 'express.Router'
const express = require('express');
const router = express.Router();

//Import helpers module
//const helpers = require('./helpers');

// Home route
//An "index" route (/) to render the "Home" page with the locals set to data.projects
router.get('/', (req, res) => {
// Log statement to indicate that this function is running
     console.log('Handling request to root or "home" route, "/"');

//About route
// router.get('/about', (req, res) => {
//     console.log('Handling request to "about" route, "/"');
// });



})
// Export router
 module.exports = router;
