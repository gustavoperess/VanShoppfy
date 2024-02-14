const express = require("express");
const multer = require('multer');
const ProductController = require("../controllers/product");
const tokenChecker = require('../middleware/tokenChecker'); // Your token verification middleware


const router = express.Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        // console.log("Multer destination function:", file); // Debugging log
        cb(null, 'uploads/products') // this is where the images are going to be uploaded 
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + require('path').extname(file.originalname)); // this is the file name of the images are going to be uploaded 
    }
});
const upload = multer({ storage: storage });

router.post("/create", upload.single("productPicture"), ProductController.createPost)

module.exports = router;