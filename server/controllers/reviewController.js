/* eslint-disable prettier/prettier */
const Review = require('../models/reviewModel');
const factory = require('./handlerFactory');

/*Middleware for setting tour and user id's in req.body when
 creating new Review, and we embeded it in the reviewRoute*/
exports.setTourUserIds = (req, res, next) => {
  //Allow nested routes
  if (!req.body.tour) req.body.tour = req.params.tourId;
  if (!req.body.user) req.body.user = req.user.id;
  next();
};

exports.getAllReviews = factory.getAll(Review);
exports.getReview = factory.getOne(Review);
exports.createReview = factory.createOne(Review);
exports.updateReview = factory.updateOne(Review);
exports.deleteReview = factory.deleteOne(Review);

//!This is nested getAll reviews OLD fuction, which get all reviews for all tours AND for definite tour
/*
exports.getAllReviews = catchAsync(async (req, res, next) => {
  let filter = {};
  if (req.params.tourId) filter = { tour: req.params.tourId };

  const reviews = await Review.find(filter);
  res.status(200).json({
    status: 'success',
    result: reviews.length,
    data: { reviews },
  });
});
*/
