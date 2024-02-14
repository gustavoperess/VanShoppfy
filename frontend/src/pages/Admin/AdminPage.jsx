import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import React, { useState } from "react";
import InputGroup from "react-bootstrap/InputGroup";
import { createProduct } from "../../services/product";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// product name, product price, product picture, product gender, product category

export const AdminArea = () => {
  const [productName, setProductName] = useState("");
  const [productGender, setProductGender] = useState("");
  const [productAmount, setProductAmount] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [productPicture, setProductPicture] = useState(null);
  const [validated, setValidated] = useState(false);
  const [key, setKey] = useState(0); // Key for the file input to force re-render

  const handleSubmit = async (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      const gender = productGender || "Male";
      const category = productCategory || "Hats";
      const formData = new FormData();
      formData.append("productName", productName);
      formData.append("productGender", productGender);
      formData.append("productAmount", productAmount);
      formData.append("productPicture", productPicture);
      formData.append("productCategory", productCategory);

      try {
        await createProduct(formData);
        setProductName("");       // Clear the form here after successful submission
        setProductAmount("");       // Clear the form here after successful submission
        setProductPicture(null);       // Clear the form here after successful submission
        setValidated(false); // Reset validation state
        setKey(prevKey => prevKey + 1);
      } catch (err) {
        console.error("Error creating product:", err.message);
      }
    }
    setValidated(true);
  };

  const handleProductGender = (event) => {
    const selectedIndex = event.target.options.selectedIndex;
    const selectedText = event.target.options[selectedIndex].text;
    setProductGender(selectedText);
  };

  const handleProductAmount = (event) => setProductAmount(event.target.value);

  const handleProductPicture = (event) =>
    setProductPicture(event.target.files[0]);

  const handleProductCategory = (event) => {
    const selectedIndex = event.target.options.selectedIndex;
    const selectedText = event.target.options[selectedIndex].text;
    setProductCategory(selectedText);
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs={12} md={8}>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Product Name</Form.Label>
              <Form.Control
                key={key} 
                required
                type="text"
                placeholder="Product Name"
                onChange={(e) => setProductName(e.target.value)}
                isInvalid={!productName}
              />
            </Form.Group>
            <Form.Label>Product Gender</Form.Label>
            <Form.Select
              id="productGender"
              onChange={handleProductGender}
              aria-label="Default select example"
            >
              <option value="1">Male</option>
              <option value="2">Female</option>
              <option value="3">Neutral</option>
            </Form.Select>
            <Form.Label>Product Category</Form.Label>
            <Form.Select
              id="producCategory"
              onChange={handleProductCategory}
              aria-label="Default select example"
            >
              <option value="1">Hats</option>
              <option value="2">Sneakers</option>
              <option value="3">Jackets</option>
            </Form.Select>
            <Form.Label>Product Price</Form.Label>
            <InputGroup className="mb-3">
              <InputGroup.Text>$</InputGroup.Text>
              <Form.Control
                key={key}
                required
                id="producAmount"
                onChange={handleProductAmount}
                aria-label="Amount (to the nearest dollar)"
              />
              <InputGroup.Text>.00</InputGroup.Text>
            </InputGroup>
            <Form.Group className="mb-3">
              <Form.Label>Product Pictute</Form.Label>
              <Form.Control
                key={key} 
                type="file"
                required
                id="productPic"
                onChange={handleProductPicture}
                accept="image/*"
                placeholder="Product Name"
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};
