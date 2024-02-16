const { generateToken } = require("../lib/token");
const Cart = require("../models/carts")


const addItemToCart = async (req, res) => {
    const  productId  = req.body.productId;
    let sessionId = req.cookies.sessionId;
    console.log(sessionId) // FINALLY GOT A USERID PER SESSION 

    const cartItem = new Cart({
        product: productId,    
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

const CartActionController = {
    addItemToCart:addItemToCart
};

module.exports = CartActionController;
