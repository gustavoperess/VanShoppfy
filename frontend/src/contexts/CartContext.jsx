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


    
    const addToCart = (newItem) => {
        setTotalAmount(prevTotalAmount => prevTotalAmount + parseFloat(newItem.productPrice));
        setCartItems(prevItems => {
            // Check if the item already exists in the cart
            const existingItem = prevItems.find(item => item._id === newItem._id);
           
            if (existingItem) {
                // If it exists, create a new array with the item's quantity incremented
                return prevItems.map(item => 
                    item._id === newItem._id ? { ...item, quantity: item.quantity + 1 } : item
                );
            } else {
                // If the item is new, add it to the cart with quantity 1
                return [...prevItems, { ...newItem, quantity: 1 }];
            }
        });
        setCartCount(prevCount => prevCount + 1);
    };

    const removeFromCart = (productId) => {
        setCartItems(currentItems => {
            const updatedItems = currentItems.filter(item => item._id !== productId);
            return updatedItems;
        });

        // Recalculate the total amount and cart count after item removal
        const updatedCartItems = cartItems.filter(item => item._id !== productId);
        const newTotalAmount = updatedCartItems.reduce((acc, item) => acc + (item.productPrice * item.quantity), 0);
        setTotalAmount(newTotalAmount);
        setCartCount(updatedCartItems.length);
    };

    const decreaseItem = (productId) => {
        setCartItems(prevItems => prevItems.map(item => {
            if (item._id === productId._id) {
                const newQuantity = Math.max(item.quantity - 1, 1);
                return { ...item, quantity: newQuantity };
            }
            return item;
        }).filter(item => item.quantity > 0));
    };

    const increaseItem = (productId) => {
        setCartItems(prevItems => prevItems.map(item => {
            if (item._id === productId._id) {
                const newQuantity = Math.max(item.quantity + 1, 0);
                return { ...item, quantity: newQuantity };
            }
            return item;
        }));
        
    };


    const updateItem = (productId) => {
        setCartItems(prevItems => prevItems.map(item => {
            return {...item}
        }))
        const updatedCartItems = cartItems.filter(item => item._id !== productId);
        const newTotalAmount = updatedCartItems.reduce((acc, item) => acc + (item.productPrice * item.quantity), 0);
        setTotalAmount(newTotalAmount);
        setCartCount(updatedCartItems.length);
    }



    return (
        <CartContext.Provider value={{ cartCount, cartItems, addToCart, totalAmount, removeFromCart, decreaseItem, increaseItem, updateItem }}>
            {children}
        </CartContext.Provider>
    );
};
