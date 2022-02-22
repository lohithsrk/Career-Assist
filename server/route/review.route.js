const express = require('express');
const router = express.Router();

const { reviewGet, reviewPost } = require('../controller/review.controller');

router.route('/').get(reviewGet).post(reviewPost);

module.exports = router;
