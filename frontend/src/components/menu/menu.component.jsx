import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import "./menuStyle.css"
import { useState, useEffect } from 'react';

const myImages = [
  {
    src: "../../../src/assets/myBanners/hatsTwo.jpg",
    title: "Hats",
    text: "Shop Now."
  },
  {
    src: "../../../src/assets/myBanners/jackets.jpg",
    title: "Jackets",
    text: "Shop Now."
  },
  {
    src: "../../../src/assets/myBanners/sneakers.jpg",
    title: "Sneakers",
    text: "Shop Now."
  }
]


function MenuComponent() {
  const [pictures, setPictures] = useState([]);

  useEffect(() => {
    setPictures(myImages);
  }, []);

  return (
    <CardGroup>
      {pictures.map((picture, index) =>
      <Card key={index}>
        <Card.Img variant="top" src={picture.src}/>
        <Card.ImgOverlay>
          <Card.Title>{picture.title}</Card.Title>
          <Card.Text>{picture.text}</Card.Text>
          </Card.ImgOverlay>
      </Card>
      )}
    </CardGroup>
  );
}

export default MenuComponent;