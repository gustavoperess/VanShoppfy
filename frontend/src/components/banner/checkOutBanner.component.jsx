import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import styled from 'styled-components';
import "./singleBannerStyle.css";

const myPicture = [
  {
    label: "Thanks for shopping with us",
  },
];

function CheckOutBannerComponent() {
  const [pictures, setPictures] = useState([]);

  useEffect(() => {
    setPictures(myPicture);
  }, []);

  return (
    <div className='singleBannerComponent'>
    <CardLayout>
      {pictures.map((picture, index) => (
        <CardThree key={index}>
           <Card.Title className="custom-card-title">{picture.label}</Card.Title>
           <Card.Text className="custom-card-text">
            {picture.description}
            </Card.Text>
        </CardThree>
      ))}
    </CardLayout>
    </div>
  );
}

const CardLayout = styled.div`
  margin: 0px 0px 1rem;
`;


const CardThree = styled.div`
  background: url(https://res.cloudinary.com/dououppib/image/upload/v1712246312/MY_UPLOADS/bvqerufbd23htn7m3tkn.jpg) ;
  height: 300px;
  display: flex;
  flex-direction: column; /* This ensures children are stacked vertically */
  align-items: center;
  text-align: center;
  justify-content: center;

`;

export default CheckOutBannerComponent;
