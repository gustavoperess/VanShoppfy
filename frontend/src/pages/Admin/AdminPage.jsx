import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useState } from "react";
import InputGroup from 'react-bootstrap/InputGroup';
import { createProduct } from '../../services/product';

// product name, product price, product picture, product gender, product category

export const AdminArea = () => {
    const [productName, setProductName] = useState("")
    const [productGender, setProductGender] = useState("")
    const [productAmount, setProductAmount] = useState("")
    const [productCategory, setProductCategory] = useState("")
    const [productPicture, setProductPicture] = useState(null)

    

    const handleSubmit = async (event) => {
        event.preventDefault()
        const formData = new FormData()
        formData.append('productName', productName)
        formData.append('productGender', productGender)
        formData.append('productAmount', productAmount)
        formData.append('productPicture', productPicture)
        formData.append('productCategory', productCategory)
        
        try {
            await createProduct(formData)
        } catch (err) {
            console.error('Error creating product:', err.message);
        }
    }

    const handleNameChange = (event) => setProductName(event.target.value);
  
    const handleProductGender = (event) => {
        const selectedIndex = event.target.options.selectedIndex;
        const selectedText = event.target.options[selectedIndex].text;
        setProductGender(selectedText);
    };

    const handleProductAmount = (event) => setProductAmount(event.target.value);
    
    const handleProductPicture = (event) => setProductPicture(event.target.files[0]); 
    
    const handleProductCategory = (event) => {
        const selectedIndex = event.target.options.selectedIndex;
        const selectedText = event.target.options[selectedIndex].text;
        setProductCategory(selectedText);
    };


    return (
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" >
            <Form.Label>Product Name</Form.Label>
            <Form.Control id="producName" onChange={handleNameChange} type="Name" placeholder="Product Name" />
          </Form.Group>
          <Form.Label>Product Gender</Form.Label>
          <Form.Select id="productGender" onChange={handleProductGender} aria-label="Default select example">
                <option value="1">Male</option>
                <option value="2">Female</option>
            </Form.Select>
            <Form.Label>Product Category</Form.Label>
          <Form.Select id="producCategory" onChange={handleProductCategory} aria-label="Default select example">
                <option value="1">Hats</option>
                <option value="2">Sneakers</option>
                <option value="2">Jackets</option>
            </Form.Select>
        <InputGroup className="mb-3">
            <InputGroup.Text>$</InputGroup.Text>
            <Form.Control id="producAmount"  onChange={handleProductAmount} aria-label="Amount (to the nearest dollar)" />
            <InputGroup.Text>.00</InputGroup.Text>
        </InputGroup>
        <Form.Group className="mb-3" >
        <Form.Label>Product Pictute</Form.Label>
            <Form.Control type="file" id="productPic" onChange={handleProductPicture} accept="image/*" placeholder="Product Name" />
        </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      );
    }
        
  


    