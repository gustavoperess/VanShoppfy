import HeaderComponent from '../../components/header/header.component';
import Container from 'react-bootstrap/Container';
import "./ShopPageStyle.css"

export const MyShopPage = () => {
    return (
        <>
        <Container fluid>
        <HeaderComponent /> 
        <h1>Hello</h1>
        </Container>
        </>
    );
};
