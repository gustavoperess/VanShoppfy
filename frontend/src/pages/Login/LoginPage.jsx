import  { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { login } from "../../services/authentication";

export const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const token = await login(email, password);
            window.localStorage.setItem("token", token);
            navigate("/posts");
        }   catch (err) {
            console.error(err);
            navigate("/login");
            alert("Wrong details try again")
        }     
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
      };
    
      const handlePasswordChange = (event) => {
        setPassword(event.target.value);
      };

    return (
        <div>
            <h2>Please log in</h2>
            <form onSubmit={handleSubmit}>
            <input
                id="email"
                type="email"
                placeholder="Email Address" 
                className="form-control"
                value={email}
                onChange={handleEmailChange}
              />
             <input
                id="password"
                type="password"
                placeholder="Password" 
                className="form-control"
                value={password}
                onChange={handlePasswordChange}
              />
        
            <button 
                role="submit-button"
                id="submit"
                type="submit"
                className="btn btn-primary"
              >
                Log In
            </button>
            </form>
        </div>
    )

}