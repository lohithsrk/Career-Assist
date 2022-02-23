const express = require('express');

const router = express.Router();

const {
	questionsClientGet,
	questionsClientPost
} = require('../controller/assessmentClient.controller');

router.route('/').get(questionsClientGet).post(questionsClientPost);

module.exports = router;
