import Card from 'react-bootstrap/Card';
import { useState, useEffect } from 'react';
import "./thirdMenuStyle.css"

const myImages = [
  {
    src: "https://res.cloudinary.com/dououppib/image/upload/v1712246311/MY_UPLOADS/ga4d1irifqizu8g6lcq9.jpg",
    title: "New Arrival",
    text: "On eligible items."
  },
  {
    src: "https://res.cloudinary.com/dououppib/image/upload/v1712246313/MY_UPLOADS/li3jqja4bf0j0yrnrmtn.jpg",
    title: "Summer Sales 30% OFF",
    text: "On eligible items."
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



