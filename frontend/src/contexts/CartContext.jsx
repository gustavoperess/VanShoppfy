import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);


export const CartProvider = ({ children }) => {

    const [itemSelected, setItemSelected] = useState(() => {
        const numberOftimesSameItem = localStorage.getItem('itemSelected');
        return numberOftimesSameItem ? JSON.parse(numberOftimesSameItem) : [];
    })

    const [totalAmount, setTotalAmount] = useState(() => {
        const savedAmount = localStorage.getItem('totalAmount');
        return savedAmount ? parseInt(savedAmount, 10) : 0;
    })

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
        localStorage.setItem('itemSelected', JSON.stringify(itemSelected));
    }, [cartCount, cartItems, totalAmount, itemSelected]);

    const addToCart = (item) => {
        setTotalAmount((prevTotalAmount) => prevTotalAmount + parseFloat(item.productPrice))

        setCartCount((prevCount) => prevCount + 1);
     
        setCartItems((prevItems) => {
            // Check if the item is already in the cart based on productName
            const isItemInCart = prevItems.some(cartItem => cartItem.productName === item.productName);
            // If item is already in the cart, return previous items without adding
            if (isItemInCart) {
                setItemSelected((prevTotalItem) => prevTotalItem + 1)
                return prevItems;
            }
            return [...prevItems, item];
        });


    };

    return (
        <CartContext.Provider value={{ cartCount, cartItems, addToCart, totalAmount, itemSelected}}>
            {children}
        </CartContext.Provider>
    );
};
