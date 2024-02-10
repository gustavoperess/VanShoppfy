const { generateToken } = require("../lib/token");

const createToken = async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
}