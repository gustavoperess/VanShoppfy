const mongoose = require("mongoose")


const CartSchema = new mongoose.Schema({ 
    product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
    productName: { type: String },
    sessionId: { type: String },
    quantity: {type: Number},
})
CartSchema.index({ product: 1, sessionId: 1 });

const Cart = mongoose.model("Cart", CartSchema)
module.exports = Cart;





