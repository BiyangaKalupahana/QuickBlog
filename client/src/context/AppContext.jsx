import React, { createContext, useContext, useState, useEffect } from 'react'; // Import useEffect
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [token, setToken] = useState('');
  const [blogs, setBlogs] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(true); // Add loading state

  const navigate = useNavigate();

  axios.defaults.baseURL = 'http://localhost:3000/api';

  // Function to fetch all blogs
  const fetchBlogs = async () => {
    try {
      setLoading(true); // Set loading to true before fetching
      const response = await axios.get('/blog/all'); // Corrected endpoint
      if (response.data.success) {
        setBlogs(response.data.blogs);
      } else {
        console.error('Failed to fetch blogs:', response.data.message);
      }
    } catch (error) {
      console.error('Error fetching blogs:', error);
    } finally {
      setLoading(false); // Set loading to false after fetching (success or error)
    }
  };

  // Fetch blogs on component mount
  useEffect(() => {
    fetchBlogs();
  }, []); // Empty dependency array means this runs once on mount

  return (
    <AppContext.Provider value={{ token, setToken, navigate, axios, blogs, input, setInput, loading }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);