import React, { useState, useEffect } from 'react';
import styled from 'styled-components';


const myPicture = [
  {
    src: "https://res.cloudinary.com/dououppib/image/upload/v1712246312/MY_UPLOADS/gwhxtfzgaklleaa8fvct.png",

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
  height: 130px;
  width: 300px;
  border-radius: 7px;
  position: relative; 
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  padding: 20px;
  margin-bottom: 25px;
`;

export default LogoComponent;
