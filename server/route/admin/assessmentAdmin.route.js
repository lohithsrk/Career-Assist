const express = require('express');

const router = express.Router();

const {
	questionsAdminGet,
	questionsAdminPost,
	questionsAdminPut,
	questionsAdminDelete
} = require('../../controller/admin/assesmentAdmin.controller');

router
	.route('/')
	.get(questionsAdminGet)
	.post(questionsAdminPost)
	.put(questionsAdminPut)
	.delete(questionsAdminDelete);

module.exports = router;
