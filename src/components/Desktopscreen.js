import React from 'react'
import LeftSide from './LeftSide'
import RightSide from './RightSide'
import Signup from './Signup'

function Desktopscreen() {
  return (
    <div className='relative p-[15px]'>
      <div className="absolute top-0 right-[40px] hidden lap:block">
      <Signup />
    </div>
      <div className='flex'>
        <LeftSide/>
        <RightSide className='mt-[0px] lap:mt-[19px] w-full' />
        </div>
    </div>
  )
}

export default Desktopscreen