import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import "./menuStyle.css"
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';

const myImages = [
  {
    src: "https://res.cloudinary.com/dououppib/image/upload/v1712246314/MY_UPLOADS/xyddydbjtlxfc5vdioye.avif",
    title: "Hats",
    text: "Shop Now."
  },
  {
    src: "https://res.cloudinary.com/dououppib/image/upload/v1712246310/MY_UPLOADS/oqpf74xxjg1pn2avpdpw.jpg",
    title: "Jackets",
    text: "Shop Now."
  },
  {
    src: "https://res.cloudinary.com/dououppib/image/upload/v1712246310/MY_UPLOADS/u5aybmezkretnuoqbsbl.jpg",
    title: "Sneakers",
    text: "Shop Now."
  }
]

function MenuComponent() {
  const [pictures, setPictures] = useState([]);
  let navigate = useNavigate(); 

  useEffect(() => {
    setPictures(myImages);
  }, []);


  function handleClick(event) {
    const text = (event.target.closest('.card').querySelector('.card-title').innerText)
    if (text === "Hats") {
        navigate("/shop", {state: {key: text}});
    } else if (text === "Jackets") {
      navigate("/shop", {state: {key: text}});
    }  else if (text === "Sneakers") {
      navigate("/shop", {state: {key: text}});
    }
  }


  return (
    <div className='menuComponent'>
      <CardGroup className="first-card-group">
        {pictures.map((picture, index) =>
        <Card key={index} className="first-card-card"  onClick={handleClick}>
          <Card.Img variant="top" src={picture.src}  className="first-card-img" />
          <Card.ImgOverlay>
            <Card.Title >{picture.title}</Card.Title>
            <Card.Text>{picture.text}</Card.Text>
            </Card.ImgOverlay>
        </Card>
        )}
      </CardGroup>
    </div>
  );
}

export default MenuComponent;