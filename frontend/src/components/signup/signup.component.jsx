import { useState } from "react";
import { signup } from "../../services/authentication";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { Container, Button,  Form} from "react-bootstrap";
import "./signUpStyle.css"
import LogoComponent from "../banner/logo.component";

const isValidPassword = (password) => {
  const minLength = 8;
  const hasUpperCase = /[A-Z]/.test(password);
  const hasNumber = /\d/.test(password);
  const hasSpecialChar = /[^A-Za-z0-9]/.test(password);
  return (
    password.length >= minLength && hasUpperCase && hasNumber && hasSpecialChar
  );
};

function SignupComponent()  {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const navigate = useNavigate();
  const location = useLocation();
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    const errors = {};
  
    if (!isValidPassword(password)) {
      errors.password = "Password must be at least 8 characters long with 1 uppercase, 1 number, and 1 special character.";
    }

    if (password !== confirmPassword) {
      errors.confirmPassword = "Passwords do not match.";
    }
  
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
  
  const handleNameChange = (event) => setName(event.target.value)
  const handleEmailChange = (event) => setEmail(event.target.value);
  const handlePasswordChange = (event) => setPassword(event.target.value);
  const handleConfirmPasswordChange = (event) => setConfirmPassword(event.target.value);

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
              <h4 className="white-text">I do not have an account</h4>
              <h6 className="white-text">Please fill out the below information to start with us</h6>
              <hr className="white-line" />
        <Form onSubmit={handleSubmit}>
        <Form.Group className="MyForm" controlId="formBasicName">
            <Form.Control 
                type="name" 
                placeholder="Name"
                className="custom-input-size" 
                value={name}
                onChange={handleNameChange} />
            </Form.Group>
            <Form.Group className="MyForm" controlId="formBasicEmail">
            <Form.Control 
                type="email" 
                placeholder="Enter email"
                className="custom-input-size"
                value={email}
                onChange={handleEmailChange} />
            <Form.Text className="text-muted">
                We'll never share your email with anyone else.
            </Form.Text>
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
            <Form.Group className="MyForm" controlId="formConfirmPassword">
            <Form.Control 
                type="password" 
                placeholder="Confirm Password" 
                value={confirmPassword}
                className="custom-input-size"
                onChange={handleConfirmPasswordChange} />
            {formErrors.confirmPassword && <div className="error">{formErrors.confirmPassword}</div>}
            </Form.Group>
            {formErrors.submission && <div className="alert alert-danger">{formErrors.submission}</div>}
            <div className="ButtonDiv">
            <Button className="singInButton" type="submit">Sign Up</Button>
            </div>
        </Form>
        </div>
     </Container>
  );
};

export default SignupComponent;
