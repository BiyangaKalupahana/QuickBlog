import React, { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [token, setToken] = useState('');
  const [blogs, setBlogs] = useState([]); // ✅ Add blogs
  const [input, setInput] = useState('');
  
  const navigate = useNavigate();

  // Set default base URL here (update to match your backend port if needed)
  axios.defaults.baseURL = 'http://localhost:3000'; // 🛠️ Change this if needed

  return (
    <AppContext.Provider value={{ token, setToken, navigate, axios }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
