const UserOder = require("../models/user");

const createOrder = async (req, res) => {
    try {
        const newOrder = new UserOder({ 
            username : req.user.username,
            email : req.user.email,
            total: req.products.total,
        });
        await newOrder.save()
        res.status(201).json({ message: 'Order created successfully', order: newOrder });
    }catch(err) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

const UserOrderControler = {
    createOrder:createOrder
  
  };

  module.exports = UserOrderControler;