const express = require("express");

const UserOrderControler = require("../controllers/users.js");
const tokenChecker = require('../middleware/tokenChecker.js'); // Your token verification middleware

const router = express.Router();


router.post("/postUserOrder/:userid", UserOrderControler);

module.exports = router;