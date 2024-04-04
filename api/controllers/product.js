
const Product = require("../models/product")
const cloudinary = require('cloudinary').v2;

cloudinary.config({ 
    cloud_name: process.env.CLOUDNAME, 
    api_key: process.env.API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET
  });
  // nnew ip addresses added! 

const createPost = async (req, res) => {
    if (!req.file) {
        return res.status(400).json({ message: 'No image file provided.' });
    }
    try {
        const result = await cloudinary.uploader.upload(`data:image/jpeg;base64,${req.file.buffer.toString('base64')}`, {
            upload_preset: 'vanShoppFY'
        });
        const newProduct = new Product({
            productName: req.body.productName,
            productGender: req.body.productGender,
            productCategory: req.body.productCategory,
            productPrice: req.body.productAmount,
            productFeatured: req.body.productFeatured,
            productPicture: result.secure_url,
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