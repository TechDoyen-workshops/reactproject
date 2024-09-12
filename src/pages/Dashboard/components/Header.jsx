import React from 'react'
import profile from '../../../assets/profile.png'
import dwnArrow from '../../../assets/arrowdwn.png'
function header() {
  return (
    <div> <div className='flex justify-between  w-[1122px] '>
    <h1 className='text-xl font-bold leading-6 my-auto font-roboto'>Dashboard</h1>
    <div className='flex justify-between h-[50px] '>
      <img src={profile} className='w-[50px] h-[50px] ' alt="" />
      <img src={dwnArrow} className='w-5 h-5 my-auto' alt="" />
    </div>
  </div></div>
  )
}

export default header