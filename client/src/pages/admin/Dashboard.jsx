import React from 'react'

const Dashboard = () => {
  return (
    <div className='fle-1 p-4 md:p-10 bg-blue-50/50'>
       <div className='flex flex-wrap gap-4'>
        <div>
          <img src={assets.dashboard_icon_1} alt="" />
          <div>
            <p>{dashboard}</p>
          </div>
        </div>
        </div> 
    </div>
  )
}

export default Dashboard