import React, { createContext, useContext, useState, useEffect } from 'react';
import { getUserInformationById } from '../services/authentication';

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const refreshUserData = async () => {
    const userid = window.localStorage.getItem("userid")
    const token = window.localStorage.getItem("token")
    if (!userid && !token) {
      return;
    }

    try {
      const fetchedUserData = await getUserInformationById(userid, token);
      setUserData(fetchedUserData);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  useEffect(() => {
    refreshUserData();
  }, []);

  return (
    <UserContext.Provider value={{ userData, refreshUserData }}>
      {children}
    </UserContext.Provider>
  );
};
