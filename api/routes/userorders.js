const express = require("express");
const UserOrderControler = require("../controllers/userorder.js");
const tokenChecker = require('../middleware/tokenChecker.js'); 
const multer = require('multer');
const router = express.Router();
const upload = multer();

router.post("/createOrder/:userid", upload.none(), UserOrderControler.createOrder);
router.get("/getOrders/:userid",  UserOrderControler.getUserOrders);

module.exports = router;