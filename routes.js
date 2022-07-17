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
router.get('/about', (req, res) => {
    console.log('Handling request to "about" route, "/"');
});


// Create greeting and use helper functions to reverse and shorten a string
//   const greeting = 'Hello World!'
//   const reversedGreeting = reverseString(greeting);
//   const shortenedDesc = shortenString('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel sapien diam. Vestibulum sed turpis id eros varius cursus.');

//   // Send greeting to the page
//   res.send(`
//     <h1>${greeting} &#128075;</h1>
//     <p><strong>Reversed greeting:</strong> ${reversedGreeting}</p>
//     <p><strong>Shortened description:</strong> ${shortenedDesc}</p>
//   `);
 });









// Export router
 module.exports = router;