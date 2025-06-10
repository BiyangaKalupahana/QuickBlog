import React from 'react'
import assets from '../assets/assets'

const Footer = () => {
  return (
    <div className='px-6 md:px-16 lg:px-24 xl:px-32 bg-primary/3'>

        <div className='flex flex-col md:flex-row items-starts justify-between gap-10 py-10 border-b border-gray-500/30 text-gray-500'>
            <div>
              <img src={assets.logo} alt="logo" className='w-32 sm:w-44' />
              <p className='max-w-[410px] mt-6'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum illum maiores praesentium? Natus quasi, odit error suscipit quis sequi culpa qui aut, quod, veniam deserunt eos nostrum. Ad, similique odit.</p>
            </div>
        </div>
        <p className='py-4 text-center text-sm md:text-base text-gray-500/80'>Copyright 2025 QuickBlog - All Right Reserved.</p>
    </div>
  )
}

export default Footer