const express = require("express");
const multer = require('multer');
const UsersController = require("../controllers/users.js");
const tokenChecker = require('../middleware/tokenChecker.js'); // Your token verification middleware

const router = express.Router();
const upload = multer();

router.post("/", upload.none(), UsersController.create);
router.get("/getInformationById/:userid", upload.none(), UsersController.getUserInformationById);

module.exports = router;