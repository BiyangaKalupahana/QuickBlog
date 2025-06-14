import React, { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [token, setToken] = useState('');
  const navigate = useNavigate();

  return (
    <AppContext.Provider value={{ token, setToken, navigate }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
