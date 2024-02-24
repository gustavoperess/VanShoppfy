import { getProductBySessionId } from "../../services/cart";
import { useEffect, useState } from "react";
import "./cartStyle.css"
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useCart } from '../../contexts/CartContext';

function CartComponent() {
    const [products, setProduct] = useState([])
    const { cartItems, cartCount, totalAmount, removeFromCart } = useCart();

useEffect(() =>{
    const fetchData = async () => {
        try {
            let productsData = await getProductBySessionId();
            productsData = productsData.map((product) => ({
                ...product,
                product: {
                    ...product.product,
                    productPrice: product.product.productPrice.$numberDecimal ? parseFloat(product.product.productPrice.$numberDecimal) : product.product.productPrice,
                }
            }));
            setProduct(productsData);
        } catch (err) {
            console.error('Error fetching products information:', err);
        }
    }
    fetchData()
}, []);

const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'GBP' }).format(price);
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
                {products.map ((product, index) =>
                <tbody key={index}>
                    <tr>
                        <td> {product.product.productCategory} </td>
                        <td></td>
                        <td>{formatPrice(product.product.productPrice)}</td>
                    </tr>
                </tbody>
                )}
                <tbody>
                    <tr> 
                        <td colSpan={3}>{formatPrice(totalAmount)}</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    </div>
    )
};

export default CartComponent




