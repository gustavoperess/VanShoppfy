import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
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
      <CardGroup className='shop-card-group'> 
          {products.map ((product, index) =>  
              <Card key={index} className='shop-card-card'> 
              <Card.Img variant="top"  className='shop-card-img' src={product?.productPicture ? `http://localhost:3000/${product?.productPicture}` : 'default-picture-url'} />
                <Card.Title>{product.productName}</Card.Title>
              <Card.Footer>
                <small className="text-muted">{formatPrice(product.productPrice)}</small>
              </Card.Footer>
            </Card>
          )}
      </CardGroup>
   </div>
  );
}





export default ShopPageComponent;