const UserOrder = require("../models/userorder");


const createOrder = async (req, res) => {
    try {
        const orderNumber = Math.floor(Math.random() * (5000 - 1000 + 1)) + 1000; 
        const newOrder = new UserOrder({
            userid: req.params.userid,
            name: req.body.name,
            address: req.body.address,
            zip: req.body.zip,
            city: req.body.city,
            country: req.body.country,
            creditcard: req.body.creditcard,
            month: req.body.month,
            cvv: req.body.cvv,
            totalAmount: req.body.totalAmount,
            productsId: req.body.productsBought,
            oderNumber: orderNumber,
        });

        await newOrder.save(); 

        res.status(201).json({ message: 'Order created successfully', order: newOrder });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
};

const UserOrderControler = {
    createOrder:createOrder
  
  };

  module.exports = UserOrderControler;