import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "./pages/Home/HomePage";
import { LoginPage } from "./pages/Login/LoginPage";
import { MySignUpPage } from "./pages/Signup/MySignupPage";
import { MyShopPage } from "./pages/Shop/ShopPage";
import { AdminArea } from "./pages/Admin/AdminPage"
import { ContactPage } from "./pages/Contact/ContactPage";
import { CartPage } from "./pages/Cart/cartPage";
import { ProfilePage } from "./pages/Profile/ProfilePage";

import './App.css'

//Shift + Option + F to indent 
// docs: https://reactrouter.com/en/main/start/overview

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/login", 
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <MySignUpPage />,
  },
  {
    path: "/shop",
    element: <MyShopPage />,
  },
  {
    path: "/admin",
    element: <AdminArea />,
  },
  {
    path: "/contact",
    element: <ContactPage />,
  },
  {
    path: "/cart",
    element: <CartPage />,
  },
  {
    path: "/profile",
    element: <ProfilePage />,
  },


]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App
