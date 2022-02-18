const express = require('express');

const router = express.Router();

const {
	questionsClientGet,
	questionsAdminGet
} = require('../controller/assessment.controller');

router.route('/admin/').post(questionsAdminGet);
router.route('/client/:extraSubject').get(questionsClientGet);

module.exports = router;
