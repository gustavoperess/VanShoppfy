const mongoose = require("mongoose")


const CartSchema = new mongoose.Schema({ 
    product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
})


const Cart = mongoose.model("Cart", CartSchema)
module.exports = Cart;


// user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },