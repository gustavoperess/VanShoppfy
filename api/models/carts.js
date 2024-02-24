const mongoose = require("mongoose")


const CartSchema = new mongoose.Schema({ 
    product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
    sessionId: { type: String },
})


const Cart = mongoose.model("Cart", CartSchema)
module.exports = Cart;

