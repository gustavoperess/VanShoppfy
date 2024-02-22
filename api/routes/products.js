const express = require("express");
const multer = require('multer');
const ProductController = require("../controllers/product");
const tokenChecker = require('../middleware/tokenChecker'); // Your token verification middleware

const router = express.Router();

// Use multer memory storage
const storage = multer.memoryStorage();

const upload = multer({ storage: storage });

router.post("/create", upload.single("productPicture"), ProductController.createPost);

router.get("/getProducts", ProductController.getProducts);

module.exports = router;
