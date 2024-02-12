import HeaderComponent from '../../components/header/header.component';
import BannerComponent from '../../components/banner/banner.component';
import { Container } from "react-bootstrap";

export const HomePage = () => {
  return (
    <Container>
    <HeaderComponent />
    <BannerComponent />

    </Container>
  );
};