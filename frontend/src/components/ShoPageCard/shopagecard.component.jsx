import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React, { useState, useEffect } from 'react';
import { getAllProducts } from "../../services/product"
import "./shopagecardStyle.css"

function ShopPageComponent() {
  const [products, setProducts] = useState([])
  const [filter, setFilter] = useState('Featured');
  
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
  
  const handleCategoryClick = (category) => {
    setFilter(category);
  };

  const filteredProducts = filter
  ? products.filter((product) => product.productCategory === filter)
  : products;



  return (  
    <div className="shopCart">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />   
                <Nav className="shop-cart-menu">
                  <Nav.Link onClick={() => handleCategoryClick('Featured')}>Featured</Nav.Link>
                  <Nav.Link onClick={() => handleCategoryClick('Hats')}>Hats</Nav.Link>
                  <Nav.Link onClick={() => handleCategoryClick('Watches')}>Watches</Nav.Link>
                  <Nav.Link onClick={() => handleCategoryClick('Womens')}>Womens</Nav.Link>
                  <Nav.Link onClick={() => handleCategoryClick('Mens')}>Mens</Nav.Link>
                  <Nav.Link onClick={() => handleCategoryClick('Sneakers')}>Sneakers</Nav.Link>
                  <Nav.Link onClick={() => handleCategoryClick('Jackets')}>Jackets</Nav.Link>
              </Nav>
      <CardGroup className='shop-card-group'> 
          {filteredProducts.map ((product, index) =>  
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