const express = require("express");
const multer = require('multer');
const UsersController = require("../controllers/users.js");
const tokenChecker = require('../middleware/tokenChecker.js'); // Your token verification middleware

const router = express.Router();

router.post("/",  UsersController.create);

module.exports = router;