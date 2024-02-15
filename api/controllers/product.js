
const Product = require("../models/product")

const createPost = async (req, res) => {
    const product = req.body.message;
    const productImage = req.file ? req.file.path : ''; // Get the file path from Multer// multer is a lirary that we will need to add on our api end. 
    try {
        const newProduct = new Product({
            productName: req.body.productName,
            productGender: req.body.productGender,
            productCategory: req.body.productCategory,
            productPrice: req.body.productAmount,
            productFeatured: req.body.productFeatured,
            productPicture: productImage,
        });
        await newProduct.save()
        res.status(201).json({ message: 'Product created successfully', product: newProduct });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}


const getProducts = async (req, res) => {
    try {
        const products = await Product.find().populate('productName', 'productName')
        res.json(products)
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error getting products" });
    }
}



const ProductController = {
    createPost: createPost,
    getProducts:getProducts
  };

  module.exports = ProductController;