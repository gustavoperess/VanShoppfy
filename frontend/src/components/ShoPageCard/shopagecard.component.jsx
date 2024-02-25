import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React, { useState, useEffect } from 'react';
import { getAllProducts } from "../../services/product"
import "./shopagecardStyle.css"
import { useLocation } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { addItemToCart } from '../../services/cart'; 
import { useCart } from '../../contexts/CartContext';
import { getProductBySessionId } from '../../services/cart';
 
function ShopPageComponent() {
  let location = useLocation();
  let state = location.state;
  let my_key = state == null ? 'Featured' : state.key
  const [products, setProducts] = useState([])
  const [filter, setFilter] = useState(my_key)
  const { addToCart } = useCart();
  const [ productCount, setProductCount ] = useState([])
  
  useEffect(() => {
    const fetchData = async () => {
      try {
      let productsData = await getAllProducts();
      productsData = productsData.map((product) => ({
        ...product,
        productPrice: product.productPrice.$numberDecimal.toString(),
      }));
      setProducts(productsData);
    } catch (err){
      console.error('Error fetching products information:', err);
      }
    };
    fetchData();
  }, []);


  useEffect(() => {
    const myCartProducts = async () => {
        try {
            const getCartProducts = await getProductBySessionId();
            setProductCount(getCartProducts); // Assuming this returns an array of products
        } catch (err) {
            console.log("Product not fetched", err);
        }
    };

    myCartProducts();
}, []); 


  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(price);
  };
  
  const handleCategoryClick = (category) => {
    setFilter(category);
  };

  const filteredProducts = products.filter((product) => {
    if (filter === "Male" || filter === "Female") {
      return product.productGender === filter;
    } else if (filter === "Featured") {
      return product.productFeatured === "Yes";
    } else {
      return product.productCategory === filter;
    }
  });

  const handleShoppingClick = async (product) => {
    try {
       addToCart(product);
       await addItemToCart(product)
    } catch (err) {
      console.error("Product not added", JSON.stringify(err, null, 2));
      if (err.response && err.response.data) {
          console.error("Product not added", err.response.data.message);
      }
    }
}

  return (  
    <div className="shopCart">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />   
                <Nav className="shop-cart-menu">
                  <Nav.Link  className={filter === 'Featured' ? 'active': ''} onClick={() => handleCategoryClick('Featured')}>Featured</Nav.Link>
                  <Nav.Link  className={filter === 'Hats' ? 'active': ''}onClick={() => handleCategoryClick('Hats')}>Hats</Nav.Link>
                  <Nav.Link  className={filter === 'Watches' ? 'active': ''} onClick={() => handleCategoryClick('Watches')}>Watches</Nav.Link>
                  <Nav.Link  className={filter === 'Female' ? 'active': ''}onClick={() => handleCategoryClick('Female')}>Womens</Nav.Link>
                  <Nav.Link  className={filter === 'Male' ? 'active': ''} onClick={() => handleCategoryClick('Male')}>Mens</Nav.Link>
                  <Nav.Link  className={filter === 'Sneakers' ? 'active': ''}onClick={() => handleCategoryClick('Sneakers')}>Sneakers</Nav.Link>
                  <Nav.Link  className={filter === 'Jackets' ? 'active': ''} onClick={() => handleCategoryClick('Jackets')}>Jackets</Nav.Link>
              </Nav>
              <CardGroup className='shop-card-group'> 
            {filteredProducts.map((product, index) => (
              <Card key={index} className='shop-card-card' >
                <div className="image-container">
                <Card.Img variant="top" className='shop-card-img' src={product?.productPicture ? product?.productPicture : 'default-picture-url'} alt={product.productName} />
                  <Button variant="primary" className="overlay-button"  onClick={() => handleShoppingClick(product)}>ADD TO CART</Button>
                </div>
                <Card.Footer>
                  <Card.Title>{product.productName}</Card.Title>
                  <small className="text-muted">{formatPrice(product.productPrice)}</small>
                </Card.Footer>
              </Card>
            ))}
        </CardGroup>
   </div>

  );
}





export default ShopPageComponent;