const path = require('path');
const express = require('express');
const app = express();

const gifController = require('./controllers/gifController');

//handle parsing request body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//handle static files
app.use(express.static(path.join(__dirname, '../src')));

//route handler
app.get('/gif', gifController.getGif ,(req, res) => {
    console.log("Your gif made it to the final middleware!", res.locals.gif)
    res.status(200).json(res.locals.gif)}
    );

//catch all
app.use('*', (req, res) => res.status(404).send('The page you requested does not exist'));

//global error handler
app.use((err, req, res, next) => {
    const defaultErr = {
      log: 'Express error handler caught unknown middleware error',
      status: 500,
      message: { err: 'An error occurred' },
    };
    const errorObj = Object.assign({}, defaultErr, err);
    console.log(errorObj.log);
    console.log(err);
    return res.status(errorObj.status).json(errorObj.message);
  });

//start server
app.listen(3000, () => console.log('The server is listening!'));

module.exports = app;