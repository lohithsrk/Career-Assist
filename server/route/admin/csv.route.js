const {csvParse} = require('../../controller/admin/csv.controller');

const express = require('express');

const router = express.Router();
router.post('/fileupload',csvParse)
module.exports = router;