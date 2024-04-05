const mongoose = require("mongoose")


const UseOrderrSchema =  new mongoose.Schema({
    userid: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    productsId: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],
    name: {type: String},
    totalAmount: {type: Number},
    address: {type: String},
    zip: mongoose.Schema.Types.Mixed,
    month: {type: Number},
    cvv: {type: Number},
    city: {type: String},
    creditcard: {type: Number},
    country: {type: String},
    orderNumber: {type: Number},
    orderDate: {type: Date, default: Date.now}

})
UseOrderrSchema.index({ userid: 1 });
UseOrderrSchema.index({ orderNumber: 1 });
UseOrderrSchema.index({ orderDate: -1 });

const UserOrder = mongoose.model("UserOrder", UseOrderrSchema)
module.exports = UserOrder;





