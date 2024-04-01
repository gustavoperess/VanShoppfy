const mongoose = require("mongoose")


const UseOrderrSchema =  new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
    total: {type: Number},
    oderNumber: {type: Number, unique: true},

})


const UserOder = mongoose.model("UserOrder", UseOrderrSchema)
module.exports = UserOder;
