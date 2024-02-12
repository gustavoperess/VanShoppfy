import HeaderComponent from '../../components/header/header.component';
import BannerComponent from '../../components/banner/banner.component';
import Container from 'react-bootstrap/Container';
import "./HomePage.css"

export const HomePage = () => {
  return (
    <>
    <Container fluid>
      <HeaderComponent />
      <BannerComponent />
      </Container>
    </>
  );
};