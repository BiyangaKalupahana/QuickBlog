import React, { useState } from 'react';
import { blogCategories } from '../assets/assets'; // Keep this import
import { motion } from "framer-motion";

import BlogCard from './BlogCard';
import { useAppContext } from '../context/AppContext';
import Loader from './Loader'; // Import your Loader component

const BlogList = () => {
  const [menu, setMenu] = useState('All');
  const { blogs, input, loading } = useAppContext();

  const filteredBlogs = () => {
    // Safeguard to avoid crash if blogs is undefined or null initially
    if (!blogs) return [];
    
    // If input is empty, return all blogs for search purposes
    if (input === '') {
      return blogs;
    }
    
    // Filter blogs based on search input (title or category)
    return blogs.filter((blog) =>
      blog.title.toLowerCase().includes(input.toLowerCase()) ||
      blog.category.toLowerCase().includes(input.toLowerCase())
    );
  };

  // Show loader while blogs are being fetched from the API
  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      <div className='flex justify-center gap-4 sm:gap-8 my-10 relative'>
        {/* Render category tabs based on blogCategories array */}
        {blogCategories.map((item) => (
          <div key={item} className='relative'>
            <button
              onClick={() => setMenu(item)}
              className={`cursor-pointer text-gray-500 ${menu === item ? 'text-white px-4 pt-0.5' : ''}`}
            >
              {item}
              {/* Animation for the active tab underline */}
              {menu === item && (
                <motion.div 
                  layout 
                  id='underline'
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  className='absolute left-0 right-0 top-0 h-7 -z-1 bg-primary rounded-full'
                ></motion.div>
              )}
            </button>
          </div>
        ))}
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 mb-24 mx-8 sm:mx-16 xl:mx-40'>
        {/* Filter blogs:
          1. Apply search input filter first (from filteredBlogs function).
          2. Then, filter by selected category:
             - If "All" is selected, show all blogs.
             - Otherwise, compare blog category and menu item (both converted to lowercase)
               to ensure case-insensitive matching.
        */}
        {filteredBlogs()
          .filter((blog) => menu === "All" ? true : blog.category.toLowerCase() === menu.toLowerCase())
          .map((blog) => <BlogCard key={blog._id} blog={blog} />)}
      </div>
    </div>
  );
};

export default BlogList;