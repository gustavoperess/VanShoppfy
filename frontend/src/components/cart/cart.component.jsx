import "./cartStyle.css";
import { useCart } from '../../contexts/CartContext';
import { useNavigate } from "react-router-dom"; 
import {Form, Button, Modal, Container, Table} from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { useUser } from "../../contexts/UserContext";
import VisitorAPI from 'visitorapi';
import countries from 'country-list';



function CartComponent() {
    const [show, setShow] = useState(false);
    const navigate = useNavigate();
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const { userData, refreshUserData } = useUser();
    const [formData, setFormData] = useState({ name: userData?.name});
    const [country, setCountry] = useState("");
    const [selectedCountry, setSelectedCountry] = useState('');

    // useEffect(() => {
    //     VisitorAPI("B878v04eK6t1EbCNsi7r").then(data => {
    //         setCountry(data.countryName);
    //     }).catch(error => {
    //        console.log("Error in loading the Country", error)
    //     });
    //  },[]);


    const { cartItems, cartCount, totalAmount, removeFromCart, addToCart, decreaseItem, increaseItem, updateItem} = useCart();

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
    
    const handleForwardClick = () => {
        if(userData) {
            handleShow()
        } else {
            navigate("/login");
        }
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleCountryChange = (event) => {
        setSelectedCountry(event.target.value);
      };
    

    return (
        <Container>
            <div className="my-bag-container">
                    <h1>Your Bag</h1>
                    <Button variant="primary" size="lg" onClick={handleForwardClick}>
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
                                            <button className="decrease-quantity" onClick={() => decreaseItem(product)}>-</button>
                                            <input type="text" value={product.quantity} size={2} className="quantity-input" readOnly />
                                            <button  className="increase-quantity" onClick={() => increaseItem(product)}>+</button>
                                        </div>
                                        <div className="edit-buttons">
                                            <Button variant="outline-primary" size="sm" onClick={() => updateItem(product)}>Update</Button>
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
                    <Modal show={show}  onHide={handleClose}>
                        <Modal.Header closeButton>
                        <Modal.Title>
                            VanShoppFY
                            your total is {formatPrice(totalAmount)}
                        </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form>
                            <Form.Group className="MyForm" controlId="formBasicEmail">
                            <Form.Control 
                                    type="name" 
                                    name="name" 
                                    placeholder="Enter name" 
                                    className="custom-input-size"
                                    value={formData.name} 
                                    onChange={handleChange}/>
                                </Form.Group>
                                <Form.Group className="MyForm" controlId="formBasicEmail">
                                <Form.Control 
                                    type="Adress" 
                                    placeholder="Adress"
                                    className="custom-input-size"/>
                                </Form.Group>   <Form.Group className="MyForm" controlId="formBasicEmail">
                                <Form.Control 
                                    type="Zip" 
                                    placeholder="Zip"
                                    className="custom-input-size"/>
                                </Form.Group>  
                             <Form.Group className="MyForm" controlId="formBasicEmail">
                                <Form.Control 
                                    type="City" 
                                    placeholder="City"
                                    className="custom-input-size"/>
                                </Form.Group>
                                <Form.Select aria-label="Default select example">
                                <option>Open this select menu</option>
                                {countries.getNames().map((country, index) => (
                                     <option key={index} value="1">{country}</option>
                                ))};
                                </Form.Select>
                            </Form>
                        </Modal.Body>
                    </Modal>
             </div>
        </Container>
    );
}

export default CartComponent;
