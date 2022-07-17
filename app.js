// Import Express and set up the app
const express = require('express');
const app = express();
const port = 3000

const data = require('data.json');

// Import routes
const routes = require('./routes/routes');

// Import 404 and global error handlers
const errorHandlers = require('./errorHandlers');

// Pass route handlers to the app
app.use(routes);

// Pass 404 and global error handlers to the app
// app.use(errorHandlers.handleFourOhFour);
// app.use(errorHandlers.handleGlobalError);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

//middleware set up
app.set('view engine', 'pug');

//use a static route and the express.static method to serve the static files located in the public folder
 app.use('/static', express.static('public'));



// app.use(bodyParser.urlencoded({ extended: false}));
// app.use(cookieParser());
// const mainRoutes = require('./routes');


// app.use(mainRoutes);


// app.use((req, res, next) => {
//   const err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });

// app.use((err, req, res, next) => {
//   res.locals.error = err;
//   res.status(err.status);
//   res.render('error');
// });

// Turn on Express Server
app.listen(port, () => {
    console.log('Server listening on port 3000')
});