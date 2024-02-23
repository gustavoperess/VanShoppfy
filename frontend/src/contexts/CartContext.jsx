import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {

    const [cartCount, setCartCount] = useState(() => {
        const savedCount = localStorage.getItem('cartCount');
        return savedCount ? parseInt(savedCount, 10) : 0;
    });

    const [cartItems, setCartItems] = useState(() => {
        const savedItems = localStorage.getItem('cartItems');
        return savedItems ? JSON.parse(savedItems) : [];
    });

    useEffect(() => {
        localStorage.setItem('cartCount', cartCount);
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartCount, cartItems]);

    const addToCart = (item) => {
        setCartCount((prevCount) => prevCount + 1);
        setCartItems((prevItems) => [...prevItems, item]);
    };

    return (
        <CartContext.Provider value={{ cartCount, cartItems, addToCart }}>
            {children}
        </CartContext.Provider>
    );
};
