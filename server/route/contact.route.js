const express = require('express');
const { route } = require('./review.route');
const router = express.Router();

const { contactGet, contactPost } = require('../controller/contact.controller');

router.route('/').get(contactGet).post(contactPost);

module.exports = router;
