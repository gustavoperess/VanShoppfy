const { generateToken } = require("../lib/token");
const Cart = require("../models/carts")


const addItemToCart = async (req, res) => {
    const  productId  = req.body.productId;
    let sessionId = req.cookies.sessionId;

    const cartItem = new Cart({
        product: productId,
        sessionId:sessionId
    });

    try {
        const savedCartItem = await cartItem.save();
        console.log("Product added to cart successfully", savedCartItem);
        res.status(201).json({ message: "Product added to cart successfully" });
    } catch (err) {
        console.error("Error adding product to cart:", err);
        res.status(400).json({ message: "Something went wrong..", error: err.message });
    }
};

const getProductBySessionId = async (red, res) => {
    try {
        const products = await Cart.find({ sessionId: sessionId });
        res.status(200).json(products);
    } catch (err) {
        console.error("Error finding products by sessionId:", err);
        res.status(500).json({ message: "Error retrieving products from the cart." });
    }
};


const CartActionController = {
    addItemToCart:addItemToCart,
    getProductBySessionId:getProductBySessionId
};

module.exports = CartActionController;
