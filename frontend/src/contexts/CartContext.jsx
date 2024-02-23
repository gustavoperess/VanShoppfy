import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [totalAmount, setTotalAmount] = useState(() => {
        const savedAmount = localStorage.getItem('totalAmount');
        return savedAmount ? parseInt(savedAmount, 10) : 0;
    });

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
        localStorage.setItem('totalAmount', totalAmount);
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartCount, cartItems, totalAmount]);

    const addToCart = (item) => {
        setTotalAmount(prevTotalAmount => prevTotalAmount + parseFloat(item.productPrice));

        setCartItems(prevItems => {
            const itemIndex = prevItems.findIndex(cartItem => cartItem.productName === item.productName);
            if (itemIndex !== -1) {
                // If item is already in the cart, update its quantity
                const updatedItems = [...prevItems];
                updatedItems[itemIndex] = {
                    ...updatedItems[itemIndex],
                    quantity: updatedItems[itemIndex].quantity + 1,
                };
                return updatedItems;
            } else {
                // If item is new, add it to the cart with quantity 1
                return [...prevItems, { ...item, quantity: 1 }];
            }
        });

        setCartCount(prevCount => prevCount + 1);
    };

    return (
        <CartContext.Provider value={{ cartCount, cartItems, addToCart, totalAmount }}>
            {children}
        </CartContext.Provider>
    );
};
