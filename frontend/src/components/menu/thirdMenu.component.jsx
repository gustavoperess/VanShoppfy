import Card from 'react-bootstrap/Card';
import { useState, useEffect } from 'react';
import "./thirdMenuStyle.css"

const myImages = [
  {
    src: "../../../src/assets/myBanners/summerSales.jpg",
    title: "New Arrival",
    text: "On eligeble items."
  },
  {
    src: "../../../src/assets/myBanners/SummerSalesTwo.jpg",
    title: "Summer Sales OFF",
    text: "On eligeble items."
  },

]

function ThirdMenuComponent() {
  const [pictures, setPictures] = useState([]);
  

  useEffect(() => {
    setPictures(myImages);
  }, []);
  return (
    <div  className="third-card-group" >
      {pictures.map((picture, index) =>
      <Card key={index} className="third-menu-card">
          <Card.Img variant="top" src={picture.src}/>
          <Card.ImgOverlay>
            <Card.Title>{picture.title}</Card.Title>
            <Card.Text>{picture.text}</Card.Text>
            </Card.ImgOverlay>
        </Card>
        )}
    </div>
  );
}


export default ThirdMenuComponent;



