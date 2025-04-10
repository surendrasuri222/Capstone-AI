const express = require("express");
const router = express.Router();

const userSignUp = require("../controllers/usersignup");
const userSignin = require("../controllers/usersignin");

//router
router.post("/signup", userSignUp);
router.post("/", userSignin);

module.exports = router;
