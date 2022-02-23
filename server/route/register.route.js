const {
    userRegisterGet,
    userRegister,
} = require("../controller/register.controller");

const express = require("express");

const router = express.Router();

// router.get("/register", userRegisterGet);

router.post("/register", userRegister);

module.exports = router;
