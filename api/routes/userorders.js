const express = require("express");
const UserOrderControler = require("../controllers/userorder.js");
const tokenChecker = require('../middleware/tokenChecker.js'); 

const router = express.Router();


router.post("/createOrder/:userid", UserOrderControler.createOrder);

module.exports = router;