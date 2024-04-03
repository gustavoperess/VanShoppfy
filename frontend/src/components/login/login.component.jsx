import { useState } from "react";
import { login } from "../../services/authentication";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { Container, Button,  Form} from "react-bootstrap";
import "../signup/signUpStyle.css"
import LogoComponent from "../banner/logo.component";
import { useUser } from "../../contexts/UserContext";


function LoginCompononent()  {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setError] = useState()
  const navigate = useNavigate();
  const location = useLocation();
  const { userData, refreshUserData } = useUser();


  const handleSubmit = async (event) => {
    event.preventDefault();
      try {
        const response = await login(email, password);
        window.localStorage.setItem("token", response.token);
        window.localStorage.setItem("userid", response.userid);
        refreshUserData()
        navigate("/");
      } catch (err) {
        setError(err.message)
        console.log("erro trying to log in", err)
        navigate("/login");
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
            {loginError && <div className="wrongCredentials">
                <p>Wrong credentials</p>
                <p>{loginError}</p>
            </div> }
            <Form.Group className="MyForm" controlId="formBasicEmail">
            <Form.Control 
                type="email" 
                placeholder="Enter email"
                className="custom-input-size"
                value={email}
                onChange={handleEmailChange} />
            </Form.Group>
            <Form.Group className="MyForm" controlId="formBasicPassword">
            <Form.Control 
                type="password" 
                placeholder="Password"
                className="custom-input-size" 
                value={password}
                onChange={handlePasswordChange} />
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
