import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React, { useState, useEffect } from 'react';
import { getAllProducts } from "../../services/product"
import "./shopagecardStyle.css"

function ShopPageComponent() {
  const [products, setProducts] = useState([])
  
  useEffect(() => {
    const fetchData = async () => {
      let productsData = await getAllProducts();
      productsData = productsData.map((product) => ({
        ...product,
        productPrice: product.productPrice.$numberDecimal.toString(),
      }));
      setProducts(productsData);
    };
    fetchData();
  }, []);

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(price);
  };


  return (  
    <div className="shopCart">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />   
                <Nav className="shop-cart-menu">
                  <Nav.Link href="#home">Featured</Nav.Link>
                  <Nav.Link href="#link">Hats</Nav.Link>
                  <Nav.Link href="#link">Watches</Nav.Link>
                  <Nav.Link href="#link">Womens</Nav.Link>
                  <Nav.Link href="#link">Mens</Nav.Link>
                  <Nav.Link href="#link">Sneakers</Nav.Link>
                  <Nav.Link href="#link">Jackets</Nav.Link>
              </Nav>
      <CardGroup className='shop-card-group'> 
          {products.map ((product, index) =>  
              <Card key={index} className='shop-card-card'> 
              <Card.Img variant="top"  className='shop-card-img' src={product?.productPicture ? `http://localhost:3000/${product?.productPicture}` : 'default-picture-url'} />   
              <Card.Footer>
              <Card.Title>{product.productName}</Card.Title>
                <small className="text-muted">{formatPrice(product.productPrice)}</small>
              </Card.Footer>
            </Card>
          )}
      </CardGroup>
   </div>

  );
}





export default ShopPageComponent;