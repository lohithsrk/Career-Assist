const express = require('express');

const router = express.Router();

const {
	questionsClientGet
} = require('../controller/assessmentClient.controller');

router.route('/').get(questionsClientGet);

module.exports = router;
