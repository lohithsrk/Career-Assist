const { userRegister } = require("../controller/register.controller");

const express = require("express");

const router = express.Router();
router.post("/register", userRegister);

module.exports = router;
