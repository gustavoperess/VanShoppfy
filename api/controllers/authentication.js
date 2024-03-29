const { generateToken } = require("../lib/token");
const User = require("../models/user");


const createToken = async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    const user = await User.findOne({email: email});
    if(!user) {
        // console.log("Auth error: User not found")
        res.status(401).json({ message: "User not found" });
    } else if (user.password != password) {
        // console.log("Password incorrect")
        res.status(401).json({ message: "Password incorrect" });
    } else {
        const token = generateToken(user.id);
        res.status(201).json({ token: token, userid: user.id, message: "OK" });
    };
};

const AuthenticationController = {
    createToken: createToken,
  };
  
  module.exports = AuthenticationController;