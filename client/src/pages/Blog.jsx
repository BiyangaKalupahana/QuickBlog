import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppContext } from '../context/AppContext'; // Corrected path
import Loader from '../components/Loader'; 
import moment from 'moment'; // For formatting date/time

const Blog = () => {
  const { id } = useParams(); // Get the blog ID from the URL (e.g., /blog/:id)
  const { axios } = useAppContext(); // Get the axios instance from your AppContext
  const [blog, setBlog] = useState(null); // State to store the fetched blog data
  const [loading, setLoading] = useState(true); // State to manage loading status
  const [error, setError] = useState(null); // State to store any errors during fetch

  useEffect(() => {
    // Function to fetch details of a single blog post by its ID
    const fetchBlogDetails = async () => {
      try {
        setLoading(true); // Start loading
        setError(null); // Clear any previous errors

        // Make an API call to your backend to get the blog details
        // The URL will be like http://localhost:3000/api/blog/:id
        const response = await axios.get(`/blog/${id}`);

        if (response.data.success) {
          setBlog(response.data.blog); // Set the fetched blog data
        } else {
          // If backend indicates failure, set an error message
          setError(response.data.message || 'Failed to fetch blog details.');
        }
      } catch (err) {
        console.error('Error fetching blog details:', err);
        // Set error message from the response or a generic one
        setError(err.response?.data?.message || err.message || 'An error occurred while fetching the blog.');
      } finally {
        setLoading(false); // Stop loading regardless of success or failure
      }
    };

    // Only attempt to fetch if an ID is present in the URL
    if (id) {
      fetchBlogDetails();
    } else {
      // If no ID is present, stop loading and set an error
      setLoading(false);
      setError("No blog ID provided in the URL.");
    }
  }, [id, axios]); // Re-run this effect if 'id' or 'axios' changes

  // Conditional rendering based on loading, error, or blog data
  if (loading) {
    return <Loader />; // Show a loading spinner
  }

  if (error) {
    return <div className="text-center text-red-500 text-lg py-20">Error: {error}</div>; // Display error message
  }

  if (!blog) {
    return <div className="text-center text-gray-500 text-lg py-20">Blog not found or deleted.</div>; // If no blog data
  }

  // Render the blog content once loaded
  return (
    <div className='max-w-4xl mx-auto px-6 py-10'>
      <h1 className='text-4xl sm:text-5xl font-bold text-gray-800 mb-4'>{blog.title}</h1>
      <p className='text-lg sm:text-xl text-gray-600 mb-3'>{blog.subTitle}</p>
      <p className='text-sm text-gray-500 mb-6'>
        Category: <span className="font-semibold text-primary">{blog.category}</span> | Published on: {moment(blog.createdAt).format('MMMM Do YYYY')}
      </p>
      
      {blog.image && (
        <img 
          src={blog.image} 
          alt={blog.title} 
          className='w-full max-h-96 object-cover rounded-lg mb-8 shadow-md'
        />
      )}

      {/* Render the rich text description. Use 'rich-text' class for styling from index.css */}
      <div 
        className='text-gray-700 leading-relaxed rich-text' 
        dangerouslySetInnerHTML={{ __html: blog.description }}
      ></div>

      {/* You might add a comments section here later if you have one */}
      {/* <div>
        <h3 className='text-2xl font-bold mt-10 mb-5'>Comments</h3>
        <CommentSection blogId={blog._id} /> // Example
      </div> */}
    </div>
  );
};

export default Blog;