import path from 'path';
import express from 'express';
const app = express();
import dotenv from 'dotenv'
dotenv.config();

// import gifController from './controllers/gifControllers';

//handle parsing request body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//handle static files
// app.use(express.static(path.join(__dirname, '../src')));
app.use(express.static(path.join(__dirname, '../dist')));

//route handler
// app.get('/gif/:query', gifController.getQueriedGif ,(req, res) => {
//   res.status(200).json(res.locals.array)
// });

app.get('/gif', 
    gifController.getRandomGif, 
    gifController.addRandomGif, 
    gifController.addRandomGif,
    (req, res) => {
      res.status(200).json(res.locals.array)
});

//catch all
app.use('*', (req, res) => {
  res.status(404).send('The page you requested does not exist')
});

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
app.listen( process.env.PORT || 3000, () => console.log('The server is listening!'));

module.exports = app;