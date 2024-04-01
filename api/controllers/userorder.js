const UserOder = require("../models/userorder");

const createOrder = async (req, res) => {
    console.log(req.body)
    try {
        const newOrder = new UserOder({ 
            // username : req.user.username,
            // email : req.user.email,
            // total: req.products.total,
        });
        res.status(201).json({ message: 'Order created successfully', order: newOrder });
    }catch(err) {
        res.status(500).json({ message: 'Internal server error' });
    }
}

const UserOrderControler = {
    createOrder:createOrder
  
  };

  module.exports = UserOrderControler;