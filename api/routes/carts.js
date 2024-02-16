const express = require("express")
const router = express. Router()

const CartstionController = require("../controllers/cart");

router.post("/addItem", CartstionController.addItemToCart);

module.exports = router;