import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [username, setUsername] = useState('');

  const setLoggedInUsername = (name) => {
    setUsername(name);
  };

  const logout=()=>{
    setUsername('');
  }

  return (
    <UserContext.Provider value={{ username: username, setLoggedInUsername,logout }}>
      {children}
    </UserContext.Provider>
  );
};

