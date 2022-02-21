const {csvParse} = require('../controller/csv.controller')

const express = require('express');

const router = express.Router();
router.post('/fileupload',csvParse)