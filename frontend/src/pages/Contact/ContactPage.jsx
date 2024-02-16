import HeaderComponent from '../../components/header/header.component';
import FooterComponent from '../../components/footer/footer.component';
import ContactComponent from '../../components/contact/contact.component';
import Container from 'react-bootstrap/Container';


export const ContactPage = () => {
    return (
        <Container>
            <HeaderComponent />
            <h1>HELLO</h1>
            <ContactComponent />
            <FooterComponent />
        </Container>
    )
}

