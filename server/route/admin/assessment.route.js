const express = require('express');

const router = express.Router();

const {
	questionsAdminGet,
	questionsAdminPost
} = require('../../controller/admin/assesment.controller');

router.route('/admin/').get(questionsAdminGet).post(questionsAdminPost);

module.exports = router;
