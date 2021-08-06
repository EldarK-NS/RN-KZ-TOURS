/* eslint-disable prettier/prettier */
const path = require('path');
const express = require('express');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSinitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');
const bodyParser = require('body-parser');

const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController');
const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');
const reviewRouter = require('./routes/reviewRoutes');

const app = express();

// // app.set('view engine', 'pug');
// app.set('views', path.join(__dirname, 'views'));
app.use(bodyParser.json());

//Serving static files
app.use(express.static(path.join(__dirname, 'public')));
//!Middlewares
//set Security HTTP Headers
app.use(helmet());

//Development login
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
//TODO: !Limit request from same API -отключил временно!!!!-----------
// const limiter = rateLimit({
//   max: 100,
//   windowMs: 60 * 60 * 1000,
//   messge: 'Too many requests from this IP, please try again in an hour! ',
// });
// app.use('/api', limiter);
//TODO:----------------------------------------
// Body parser, reading data from body into req.body
app.use(express.json({ limit: '10kb' }));

//Data sanitization against NoSQL query injection
app.use(mongoSinitize());

//Data sanitization against XSS
app.use(xss());

//Prevent parametr pollution
app.use(
  hpp({
    whitelist: [
      'duration',
      'ratingsQuantity',
      'ratingsAverage',
      'maxGroupSize',
      'difficulty',
      'price',
    ],
  })
);

// app.use((req, res, next) => {
//   req.requesTime = new Date().toISOString();
//   console.log(req.headers);
//   next();
// });

//!ROUTES

// app.get('/', (req, res) => {
//   res.status(200).render('base', {
//     tour: 'The Forest Hicker',
//     user: 'Jonas',
//   });
// });
// app.get('/overview', (req, res) => {
//   res.status(200).render('overview', {
//     title: 'All Tours',
//   });
// });
// app.get('/tour', (req, res) => {
//   res.status(200).render('tour', {
//     title: 'The Forest Hiker Tour',
//   });
// });

app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/reviews', reviewRouter);

//!!Middleware for all incorrect routes, ( в этом случае ОЧЕНЬ!!! ВАЖЕН порядок расположения кода так как если этот блок будет выше оастальных путей то он заблокирует весь поток)
app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server`, 404));
});

//! global error
app.use(globalErrorHandler);

module.exports = app;
