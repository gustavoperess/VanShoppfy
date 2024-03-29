import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { CartProvider } from './contexts/CartContext';
import { UserProvider } from './contexts/UserContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
    <CartProvider>
            <App />
    </CartProvider>
    </UserProvider>
  </React.StrictMode>,
)
