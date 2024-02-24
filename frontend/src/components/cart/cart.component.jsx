import { getProductBySessionId } from "../../services/cart";
import { useEffect, useState } from "react";
import "./cartStyle.css"
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

function CartComponent() {
    const [products, setProduct] = useState([])

useEffect(() =>{
    const fetchData = async () => {
        try  {
            let produtsData = await getProductBySessionId();
            produtsData = produtsData.map((product) => ({
                ...product
            }))
            setProduct(produtsData);
        } catch(err) {
            console.error('Error fetching products information:', err);
        }
    }
    fetchData()
}, []);

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
                        <td>Mark</td>
                        <td>Otto</td>    
                    </tr>  
                </tbody>
                )}
            </Table>
        </div>
    </div>
    )
};

export default CartComponent




