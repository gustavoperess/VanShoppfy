import HeaderComponent from '../../components/header/header.component';
import BannerComponent from '../../components/banner/banner.component';
import MenuComponent from '../../components/menu/menu.component';
import SecondMenuComponent from '../../components/menu/secondMenu.component';
import Container from 'react-bootstrap/Container';
import "./HomePage.css"

export const HomePage = () => {
  return (
    <>
    <Container fluid>
      <HeaderComponent />
      <BannerComponent />
      <MenuComponent />
      <SecondMenuComponent />
      </Container>
    </>
  );
};