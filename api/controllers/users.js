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

const getUserInformationById = async (req, res) => {
    const userid = req.params.userid
    try {
      const user = await User.findById(userid);
      res.status(200).json(user);
  } catch (err) {
      console.error("Error retriving user's information", err);
      res.status(500).json({ message: "EError retriving user's information" });
  }
}


const updateUserInformation = async (req, res) => {
  const userid = req.params.userid;
  const { name, password, email } = req.body; 

  try {
    const updatedUser = await User.findByIdAndUpdate(userid, 
      { name, password, email }, 
      { new: true, runValidators: true } 
    );

    if (updatedUser) {
      res.status(200).json(updatedUser);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (err) {
    console.error("Error updating user's information", err); 
    res.status(500).json({ message: "Error updating user's information" });
  }
};


const UsersController = {
    create: create,
    getUserInformationById:getUserInformationById,
    updateUserInformation:updateUserInformation
  
  };

  module.exports = UsersController;