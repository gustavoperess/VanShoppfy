import React, { useState, useEffect } from 'react';
import styled from 'styled-components';


const myPicture = [
  {
    src: "../../../src/assets/myBanners/VanShoppFYLogo.png",

  },
];

function LogoComponent() {
  const [pictures, setPictures] = useState([]);

  useEffect(() => {
    setPictures(myPicture);
  }, []);

  return (
    <div className='singleBannerComponent'>
      <CardLayout>
        {pictures.map((picture, index) => (
          <CardFour key={index} src={picture.src}>
          </CardFour>
        ))}
      </CardLayout>
    </div>
  );
}

const CardLayout = styled.div`
  margin: 0px 0px 1rem;
`;

const CardFour = styled.div`
  background: ${({ src }) => `url(${src})`} center center / cover;
  height: 200px;
  width: 400px;
  border-radius: 7px;
  position: relative; 
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  padding: 20px;
  margin-bottom: 80px;
`;

export default LogoComponent;
