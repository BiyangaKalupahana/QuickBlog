import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { blog_data } from '../assets/assets'

const Blog = () => {

  const {id} = useParams()

  const [data, setData] = useState(null)

  const fetchBlogData=  async () =>{
  const data = blog_data.find(item => item._id === id)
  setData(data)
  }

  useEffect(()=>{
    fetchBlogData()
  },[])

  return data ? (
    <div>
        <div></div>

        <div></div>
    </div>
  ): <div>Loading...</div>
}

export default Blog