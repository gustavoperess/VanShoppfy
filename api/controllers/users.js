const User = require("../models/user");

const create = (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  const user = new User({ name, email, password });

  user
  .save()
  .then((user) => {
    console.log("User created, id:", user._id.toString());
    res.status(201).json({ message: "User successfully created." });
  })
  .catch((err) => {
    if (err.code === 11000) {
      res.status(400).json({ message: "Email already exists. Please use a different email." });
    } else {
      // For other kinds of errors
      res.status(500).json({ message: "Something went wrong. Please try again later." });
    }
  });
};

const UsersController = {
    create: create,
  
  };

  module.exports = UsersController;