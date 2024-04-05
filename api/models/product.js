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

ProductSchema.index({ productName: 1 });
ProductSchema.index({ productGender: 1 });
ProductSchema.index({ productCategory: 1 });
ProductSchema.index({ productFeatured: 1 });



