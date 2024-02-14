import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import styled from 'styled-components';
import "./singleBannerStyle.css";

const myPicture = [
  {
    src: "../../../src/assets/myBanners/Banner_01.png",
    label: "Enjoy 30% off on Winter Products",
    description: "Summer Collection has already arrived."
  },
];

function SingleBannerComponent() {
  const [pictures, setPictures] = useState([]);

  useEffect(() => {
    setPictures(myPicture);
  }, []);

  return (
    <CardLayout>
      {pictures.map((picture, index) => (
        <CardTwo key={index}>
           <Card.Title className="custom-card-title">{picture.label}</Card.Title>
           <Card.Text className="custom-card-text">
            {picture.description}
            </Card.Text>
        </CardTwo>
      ))}
    </CardLayout>
  );
}

const CardLayout = styled.div`
  margin: 0px 0px 1rem;
`;


const CardTwo = styled.div`
  background: url(../../../src/assets/myBanners/them.jpg) center center / cover;
  height: 500px;
  border-radius: 7px;
  display: flex;
  flex-direction: column; /* This ensures children are stacked vertically */
  align-items: center;
  text-align: center;
  justify-content: center;
  padding: 20px; /* Adds some padding around the content */
`;

export default SingleBannerComponent;
