import React, { useState } from 'react'
import {assets} from '../../assets/assets'

const AddBlog = () => {


  const [image, setImage] = useState(false);
  const [title, setTitle] = useState('');
  const [subTitle, setSubTitle] = useState('');
  const [category, setCategory] = useState('Startup');
  const [isPublished, setIsPublished] = useState(false);

  const generateContent = async()=>{

  }

  const onSubmitHandler = async (e)=>{
    e.preventDefault();
  }

  return (
    <form onSubmit={onSubmitHandler} className='flex-1 bg-blue-50/50 text-gray-600 h-full overflow-scroll'> 
      <div className='bg-white w-full max-w-3xl p-4 md:p-10 sm:m-10 shadow rounded'>
        <p>Upload thumbnail</p>
        <label htmlFor="image">
          <img src={ !image ? assets.upload_area : URL.createObjectURL(image)} alt="" className='mt-2 h-16 rounded cursor-pointer' />
          <input onChange={(e)=> setImage(e.target.files[0])} type="file" id='image' hidden required />
    
        </label>

        <p className='mt-4'>Blog Title</p>
        <input type="text"placeholder='Type here' required className='w-full max-w-lg mt-2 p-2 border border-gray-300 outline-none rounded' onChange={e => setTitle(e.target.value)} value={title} />

        <p className='mt-4'>Sub Title</p>
        <input type="text"placeholder='Type here' required className='w-full max-w-lg mt-2 p-2 border border-gray-300 outline-none rounded' onChange={e => setSubTitle(e.target.value)} value={subTitle} />

        <p className='mt-4'>Blog Description</p>
        <div className="relative max-w-lg min-h-[200px] pb-16 sm:pb-10 pt-2">
  <button type="button" onClick={generateContent} className="absolute bottom-4 right-4 text-xs text-white bg-black/70 px-4 py-1.5 rounded hover:underline cursor-pointer"
  >
    Generate with AI
  </button>
</div>

      </div>
        
     
    </form>
  )
}

export default AddBlog