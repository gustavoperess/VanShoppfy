import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useState } from "react";
import InputGroup from 'react-bootstrap/InputGroup';

// product name, product price, product picture, product gender, product category

export const AdminArea = () => {
    return (
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Product Name</Form.Label>
            <Form.Control type="Name" placeholder="Product Name" />
          </Form.Group>
          <Form.Label>Product Gender</Form.Label>
          <Form.Select aria-label="Default select example">
                <option value="1">Male</option>
                <option value="2">Female</option>
            </Form.Select>
            <Form.Label>Product Category</Form.Label>
          <Form.Select aria-label="Default select example">
                <option value="1">Hats</option>
                <option value="2">Sneakers</option>
                <option value="2">Jackets</option>
            </Form.Select>
        <InputGroup className="mb-3">
            <InputGroup.Text>$</InputGroup.Text>
            <Form.Control aria-label="Amount (to the nearest dollar)" />
            <InputGroup.Text>.00</InputGroup.Text>
        </InputGroup>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Product Pictute</Form.Label>
            <Form.Control type="file" accept="image/*"  placeholder="Product Name" />
        </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      );
    }
        
  