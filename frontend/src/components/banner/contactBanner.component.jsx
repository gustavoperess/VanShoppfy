import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import styled from 'styled-components';
import "./singleBannerStyle.css";

const myPicture = [
    {
      label: "I appreciate your contact",
    },
  ];

function ContactBanner() {
  const [pictures, setPictures] = useState([]);

  useEffect(() => {
    setPictures(myPicture);
  }, []);

  return (
    <div className='singleBannerComponent'>
    <CardLayout>
      {pictures.map((picture, index) => (
        <CardThree key={index}>
          
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
  background: url(../../../src/assets/myBanners/contact2.jpg) no-repeat center center;
  background-size: cover; /* This will cover the entire container without repeating */
  height: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
`;

export default ContactBanner;
