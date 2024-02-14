const mongoose = require("mongoose")

const ProductSchema =  new mongoose.Schema({
    name: {type: String, required: true},
    price: { type: Number, required: true },
    image: {type: String, required: true},
    gender: {type: String, required: true},
    categoru: {type: String, required: true},
})

const Product = mongoose.model("Product", ProductSchema)
module.exports = Product;


// product name, product price, product picture, product gender, product category