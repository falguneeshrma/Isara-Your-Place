const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const Review = require("../models/review.js");
const Listing = require("../models/listing.js");
const {
	isloggedIn,
	validateReview,
	isReviewAuthor,
	savedRedirectUrl,
} = require("../middleware.js");

const reviewController = require("../controllers/reviews.js");

//Reviews- post route
router.post(
	"/",
	isloggedIn,
	validateReview,
	wrapAsync(reviewController.createReview)
);

//Reviews- delete route
router.delete(
	"/:reviewId",
	isloggedIn,
	isReviewAuthor,
	wrapAsync(reviewController.destroyReview)
);

module.exports = router;
