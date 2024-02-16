const express = require("express")
const router = express. Router()
const CartstionController = require("../controllers/cart");
const { generateUniqueId } = require('./utils');

router.use((req, res, next) => {
    if (!req.cookies.sessionId) {
      const sessionId = generateUniqueId(); // Implement this function
      res.cookie('sessionId', sessionId, { httpOnly: true, path: '/', secure: false, sameSite: 'Lax' });
    }
    next();
  });
  
router.post("/addItem", CartstionController.addItemToCart);

module.exports = router;