const { generateToken } = require("../lib/token");
const Cart = require("../models/carts");

const addItemToCart = async (req, res) => {
    const productId = req.body.productId._id;
    const productName = req.body.productId.productName;
    let sessionId = req.cookies.sessionId;

    try {
        const existingCartItem = await Cart.findOne({ product: productId, sessionId: sessionId });
        
        if (existingCartItem) {
            existingCartItem.quantity += 1;
            await existingCartItem.save();
            res.status(200).json({ message: "Product quantity updated successfully" });
        } else {
            const cartItem = new Cart({
                product: productId,
                productName: productName,
                sessionId: sessionId,
                quantity: 1
            });

            const savedCartItem = await cartItem.save();
            // console.log("Product added to cart successfully", savedCartItem);
            res.status(201).json({ message: "Product added to cart successfully" });
        }
    } catch (err) {
        console.error("Error adding product to cart:", err);
        res.status(400).json({ message: "Something went wrong..", error: err.message });
    }
};

const removeItemfromCart = async (req, res) => {
    let sessionId = req.cookies.sessionId;
    try {
        const product_cart = await Cart.deleteMany({ product: req.params.productId });
        res.status(200).json(product_cart);
    } catch (err) {
        console.error("Error deleting item from the cart", err);
        res.status(500).json({ message: "Error deleting item from the cart." });
    }
};

const getProductBySessionId = async (req, res) => {
    let sessionId = req.cookies.sessionId;
    try {
        const products = await Cart.find({ sessionId: sessionId }).populate("product");
        res.status(200).json(products);
    } catch (err) {
        console.error("Error finding products by sessionId:", err);
        res.status(500).json({ message: "Error retrieving products from the cart." });
    }
};

const CartActionController = {
    addItemToCart: addItemToCart,
    getProductBySessionId: getProductBySessionId,
    removeItemfromCart: removeItemfromCart
};

module.exports = CartActionController;
