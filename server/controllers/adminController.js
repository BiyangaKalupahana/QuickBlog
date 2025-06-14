import Blog from '../models/Blog';

// controllers/adminController.js
const Admin = require('../models/adminModel'); // adjust path as needed
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

export const adminLogin = async (requestAnimationFrame, res) =>{
  try{
    const {email, password} = requestAnimationFrame.body;

    if(email !==process.env.ADMIN_EMAIL || password !== process.env.ADMIN_PASSWORD){
      return res.json({success: false, message: "Invalid Credentials"})
    }

    const token = jwt.sign({email}, process.env.JWT_SECRET)
    res.json({success: true, token})

  } catch (error){
    res.json({success: false, message: error.message})
  }
}

export const getAllBlogsAdmin = async (req, res) =>{
  try{
    const blogs = await Blog.find({}).sort({createdAt: -1});
    res.json({success: true, blogs})
  } catch (error){
      res.json({success: false, message: error.message})
  }
} 

export const getAllComments = async (req, res) =>{
  try{
    const comments = await Comment.find({}).populate("blog").sort({createdAt: -1})
    res.json({success: true, comments})
  } catch (error){
    res.json({success: false, message: error.message})
  }
}
