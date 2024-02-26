import HeaderComponent from '../../components/header/header.component';
import SignupComponent from '../../components/signup/signup.component';
import FooterComponent from '../../components/footer/footer.component';
import { Container } from "react-bootstrap";

export const MySignUpPage = () => {
  return (
      <Container fluid>
        <HeaderComponent />
        <SignupComponent />
        <FooterComponent />      
      </Container>
  )
}