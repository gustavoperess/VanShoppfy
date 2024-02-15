import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { useState, useEffect } from 'react';
import "./secondMenuStyle.css"

const myImages = [
  {
    src: "../../../src/assets/myBanners/newArrival.jpg",
    title: "Man",
    text: "Shop Now."
  },
  {
    src: "../../../src/assets/myBanners/woman_W.jpg",
    title: "Woman",
    text: "Shop Now."
  },

]

function SecondMenuComponent() {
  const [pictures, setPictures] = useState([]);

  useEffect(() => {
    setPictures(myImages);
  }, []);
  return (
    <div className='secondMenuComponent'>
    <CardGroup className="second-card-group">
      {pictures.map((picture, index) =>
    <Card key={index} className="second-card-card">
        <Card.Img variant="top" src={picture.src}  className="second-card-img"/>
        <Card.ImgOverlay>
          <Card.Title>{picture.title}</Card.Title>
          <Card.Text>{picture.text}</Card.Text>
          </Card.ImgOverlay>
      </Card>
      )}
    </CardGroup>
    </div>
  );
}


export default SecondMenuComponent;



