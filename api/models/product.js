const mongoose = require("mongoose")

const ProductSchema =  new mongoose.Schema({
    productName: {type: String},
    productPrice: { type: mongoose.Types.Decimal128 },
    productPicture: {type: String} ,
    productGender: {type: String },
    productCategory: {type: String },
    productFeatured: {type: String },
})

const Product = mongoose.model("Product", ProductSchema)
module.exports = Product;


// product name, product price, product picture, product gender, product category