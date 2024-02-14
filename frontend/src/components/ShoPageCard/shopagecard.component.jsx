import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import React, { useState, useEffect } from 'react';
import { getAllProducts } from "../../services/product"
import "./shopagecardStyle.css"

function ShopPageComponent() {
  const [products, setProducts] = useState([])
  
  useEffect(() => {
    const fetchData = async () => {
      const productsData = await getAllProducts();
      setProducts(productsData)

    }
    fetchData()
  })

  return (
    <div className="new-card">
      <CardGroup style={{ all: 'unset' }}> 
      {products.map ((product, index) =>  
          <Card key={index} style={{ all: 'unset' }}> 
          <Card.Img variant="top"  src={product?.productPicture ? `http://localhost:3000/${product?.productPicture}` : 'default-picture-url'} />
          <Card.Body>
            <Card.Title>{product.productName}</Card.Title>
            <Card.Text>
              {product.ProductPrice}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
      )}
   </CardGroup>
   </div>
  );
}





export default ShopPageComponent;