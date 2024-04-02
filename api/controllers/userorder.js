const UserOrder = require("../models/userorder");
const Product = require("../models/product")

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

const getUserOrders = async (req, res) => {
    const userId = req.params.userid;
    try {
        const userOrderDetails = await UserOrder.find({ userid: userId });
        const productIds = userOrderDetails.map(order => order.productsId).flat(); 
        const products = await Product.find({ _id: { $in: productIds } });
       
        res.json({ orders: userOrderDetails, products: products });
    } catch (err) {
        console.error("Error retrieving user's information", err);
        res.status(500).json({ message: "Error retrieving user's information" });
    }
};
  
const UserOrderControler = {
    createOrder:createOrder,
    getUserOrders:getUserOrders
  
  };

  module.exports = UserOrderControler;