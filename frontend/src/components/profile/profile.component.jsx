import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { useUser } from "../../contexts/UserContext";
import { getUserOrders } from '../../services/userorder';

function ProfileComponent() {
    const { userData, refreshUserData } = useUser();
    const token = window.localStorage.getItem("token")
    const [userOrder, setUserOder] = useState("")


    useEffect(() => {
     const fetchUserOders = async () => {
        try {
           const data = getUserOrders("65c7af0ce8d88c143ebf21e4", token)
           setUserOder(data)
        } catch (err) {
            console.log("error in loading the orders", err)
        }
    }
    fetchUserOders()
    },[])
    
  return (
    <div >
      
    </div>
  );
}

export default ProfileComponent;