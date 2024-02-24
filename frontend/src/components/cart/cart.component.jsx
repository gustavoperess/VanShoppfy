import { getProductBySessionId } from "../../services/cart";
import { useEffect, useState } from "react";
import "./cartStyle.css";
import Table from 'react-bootstrap/Table';
import { useCart } from '../../contexts/CartContext';
import Button from 'react-bootstrap/Button';

function CartComponent() {
    const { cartItems, cartCount, totalAmount, removeFromCart } = useCart();

    const formatPrice = (price) => {
        return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'GBP' }).format(price);
    };

    const handleShoppingClick = async (product) => {
        try {
            removeFromCart(product);
        } catch (err) {
            console.log("Product not removed", err);
        }
    };

    return (
        <div className="my-bag-container">
            <div className="my-bag-checkout">
                <h1>Your Bag</h1>
                <Button variant="primary" size="lg">
                    Procced to checkout
                </Button>
            </div>
            <div className="my-bag-products">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Edit</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    {cartItems.map((product, index) =>
                        <tbody key={index} className="table-body">
                            <tr>
                                <td className="table-body-product"> 
                                    <img className="myImage" src={product?.productPicture ? product?.productPicture : 'default-picture-url'} alt={product.productPicture} />
                                    <div className="table-body-product-text">
                                        <h1>{product.productName}</h1>
                                        <p>{product.productCategory}</p>
                                        <p>{product.productGender}</p>
                                    </div>     
                                </td>
                                <td className="table-body-edit">
                                    <div className="quantity-selector">
                                        <button className="decrease-quantity">-</button>
                                        <input type="text" value={product.quantity} className="quantity-input" readOnly />
                                        <button className="increase-quantity">+</button>
                                    </div>
                                    <div className="edit-buttons">
                                        <Button variant="outline-primary" size="sm">Update</Button>
                                        <Button variant="outline-secondary" size="sm" onClick={() => handleShoppingClick(product._id)}>Remove</Button>
                                    </div>
                                </td>
                                <td className="table-body-price">{formatPrice(product.productPrice)}</td>
                            </tr>
                        </tbody>
                    )}
                    <tbody>
                        <tr className="table-total"> 
                            <td colSpan={3}><p>Subtotal: {formatPrice(totalAmount)}</p></td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </div>
    );
}

export default CartComponent;
