const express = require("express")
const router = express. Router()
const CartstionController = require("../controllers/cart");
const { generateUniqueId } = require('./utils');

router.use((req, res, next) => {
    if (!req.cookies.sessionId) {
      const sessionId = generateUniqueId(); // Implement this function
      res.cookie('sessionId', sessionId, { httpOnly: true, sameSite: 'Lax', maxAge: 24 * 60 * 60 * 1000 }); // Adjust options as needed
      req.cookies.sessionId = sessionId;
    }
    next();
  });
  
router.post("/addItem", CartstionController.addItemToCart);
router.get("/getItems", CartstionController.getProductBySessionId);

module.exports = router;