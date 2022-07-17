// Import Express and set up the app
const express = require('express');
const app = express();
const port = 3000

//const data = require('data.json');

// Import routes
const routes = require('./routes/routes');
const indexRouter = require('./routes/index');
//const aboutRouter = require('./routes/about');


// Import 404 and global error handlers
const errorHandlers = require('./errorHandlers');

// Pass route handlers to the app
app.use(routes);
app.use('/', indexRouter);

// Pass 404 and global error handlers to the app
app.use(errorHandlers.handleFourOhFour);
app.use(errorHandlers.handleGlobalError);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

//middleware set up
app.set('view engine', 'pug');

//use a static route and the express.static method to serve the static files located in the public folder
 app.use('/static', express.static('public'));

app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  console.log('Error 404 Not Found');
  next(err);
});

app.use((err, req, res, next) => {
  if (err.status = 404) {
    err.message = 'Not Found';
    console.log('Error 404 Sorry Your Page was Not Found');
    res.status(404).render('not-found', { err });
  } else {
    err.message = 'Uh oh, something is wrong with the server';
    err.status = 500;
    console.log('Error 500 Something is wrong with the server');
    res.render('error');
  }
 
});

// Turn on Express Server
app.listen(port, () => {
    console.log('Server listening on port 3000')
});

module.exports = app;