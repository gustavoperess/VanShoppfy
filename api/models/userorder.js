const mongoose = require("mongoose")


const UseOrderrSchema =  new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
    address: {type: String},
    zip: {type: Number},
    month: {type: Number},
    cvv: {type: Number},
    city: {type: String},
    creditcard: {type: Number},
    country: {type: String},
    total: {type: Number},
    oderNumber: {type: Number},

})


const UserOder = mongoose.model("UserOrder", UseOrderrSchema)
module.exports = UserOder;
