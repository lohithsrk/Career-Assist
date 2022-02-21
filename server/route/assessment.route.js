const express = require('express');

const router = express.Router();

const { questionsClientGet } = require('../controller/assessment.controller');

router.route('/client/:extraSubject').get(questionsClientGet);

module.exports = router;
