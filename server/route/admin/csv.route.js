const {csvParse,bulkEmail} = require('../../controller/admin/csv.controller');

const express = require('express');

const router = express.Router();
router.post('/fileupload',csvParse)
router.post('/csvmail',bulkEmail)
module.exports = router;