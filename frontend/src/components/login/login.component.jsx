import { useState } from "react";
import { signup } from "../../services/authentication";
import { useNavigate, Link } from "react-router-dom";
import { Container, Form,  Button} from "react-bootstrap";
import "./signUpStyle.css"

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
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const navigate = useNavigate();
  
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
  
  const handleEmailChange = (event) => setEmail(event.target.value);
  const handlePasswordChange = (event) => setPassword(event.target.value);
  const handleConfirmPasswordChange = (event) => setConfirmPassword(event.target.value);

  return (
    
    <Container className="signup-container" >
                Login / Create an account
        <div className="form-container">
           <h1>I already have an account</h1>
           <h6>Sign in with your email and password</h6>
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
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
            <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control 
                type="password" 
                placeholder="Password"
                className="custom-input-size" 
                value={password}
                onChange={handlePasswordChange} />
            {formErrors.password && <div className="error">{formErrors.password}</div>}
            </Form.Group>
            <Form.Group className="mb-3" controlId="formConfirmPassword">
            <Form.Control 
                type="password" 
                placeholder="Confirm Password" 
                value={confirmPassword}
                className="custom-input-size"
                onChange={handleConfirmPasswordChange} />
            {formErrors.confirmPassword && <div className="error">{formErrors.confirmPassword}</div>}
            </Form.Group>
            {formErrors.submission && <div className="alert alert-danger">{formErrors.submission}</div>}
            <Button variant="primary" type="submit">Sign In</Button>
        </Form>
        </div>
     </Container>
  );
};

export default SignupComponent;
