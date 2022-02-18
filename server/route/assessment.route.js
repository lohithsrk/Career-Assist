const express = require('express');

const router = express.Router();

const { get } = require('../controller/assessment.controller');

router.route('/').get(get);

module.exports = router;
