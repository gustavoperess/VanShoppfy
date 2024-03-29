import { useState } from "react";
import { signup } from "../../services/authentication";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { Container, Button,  Form} from "react-bootstrap";
import "../signup/signUpStyle.css"
import LogoComponent from "../banner/logo.component";



function LoginCompononent()  {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const navigate = useNavigate();
  const location = useLocation();
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    const errors = {};
  
    if (Object.keys(errors).length === 0) {
      const formData = new FormData();
      formData.append("email", email);
      formData.append("password", password);
  
      try {
        await signup(formData);
        navigate("/login");
      } catch (err) {
        setFormErrors({ ...formErrors, submission: err.message });
      }
    } else {
      setFormErrors(errors);
    }
  };

    const loginPage = () => {
      navigate(`/login`);
      
  }

  const signupPage = () => {
      navigate(`/signup`);
      
  }
  

  const handleEmailChange = (event) => setEmail(event.target.value);
  const handlePasswordChange = (event) => setPassword(event.target.value);


  return (
    
    <Container className="signup-container" >
      < LogoComponent />
           <div className="ItemsToNavigate">
                    <button type="button" 
                            className={`itemstoNavigateButton ${location.pathname === '/login' ? 'active-nav-item' : ''}`} 
                            onClick={loginPage}>
                        Login
                    </button>
                    <button type="button" 
                            className={`itemstoNavigateButton ${location.pathname === '/signup' ? 'active-nav-item' : ''}`} 
                            onClick={signupPage}>
                        Create an account
                    </button>
            </div>
        <div className="form-container">
              <h4 className="white-text">I already have an account</h4>
              <h6 className="white-text">Sign in with your email and password</h6>
              <hr className="white-line" />
        <Form onSubmit={handleSubmit}>
            <Form.Group className="MyForm" controlId="formBasicEmail">
            <Form.Control 
                type="email" 
                placeholder="Enter email"
                className="custom-input-size"
                value={email}
                onChange={handleEmailChange} />
            {formErrors.email && <div className="error">{formErrors.email}</div>}
            </Form.Group>
            <Form.Group className="MyForm" controlId="formBasicPassword">
            <Form.Control 
                type="password" 
                placeholder="Password"
                className="custom-input-size" 
                value={password}
                onChange={handlePasswordChange} />
            {formErrors.password && <div className="error">{formErrors.password}</div>}
            </Form.Group>
            <div className="ButtonDiv">
            <Button className="singInButton" type="submit">Login</Button>
            </div>
        </Form>
        </div>
     </Container>
  );
};

export default LoginCompononent;
