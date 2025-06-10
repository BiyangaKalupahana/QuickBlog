import React from 'react'
import { blogCategories } from '../assets/assets'

const BlokList = () => {
  return (
    <div>
        <div className='flex justify-center gap-4 sm:gap-8 my-10 relative'>
            {blogCategories.map((item) =>(
                <div key={item} className='relative'>
                    
                </div>
            ))}
        </div>
        <div>
            {/*---blog cards---*/}
        </div>
    </div>
  )
}

export default BlokList