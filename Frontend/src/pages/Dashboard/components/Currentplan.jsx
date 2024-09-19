import React from 'react'
import image from "../../../assets/image 15.png"
import zoom from "../../../assets/zoom.svg"
import arrowleft from "../../../assets/arow left.svg"
import arrowright from "../../../assets/arrow right.svg"


function Currentplan() {
  return (
    <div className='w-[359px] h-[355px] mt-2.5 ml-3.5 bg-white rounded-lg border'>
                <div className=' h-[233px] '>
                  <div className='flex justify-between items-center p-4'>
                    <h1 className='text-base font-medium leading-[18px]   '>Current Projects</h1>
                    <div className='flex justify-between w-[37.57px]'><img src={arrowleft} alt="" className='w-[6.26px] h-3' />
                      <img src={arrowright} alt="" className='w-[6.26px] h-3' /></div></div>
                  <div className='relative'>
                    <img src={image} className=' h-[181px] w-[356px] object-cover  ' alt="" />
                    <button className='absolute top-[138px] right-[50px] py-[9px] px-[11px] text-[15px] font-medium leading-[17px] bg-white hover:bg-[#0179C5] hover:text-white rounded-[8px] '>View all</button>
                    <div className='absolute top-[138px] right-2.5 bg-[#0179C5] rounded-[8px] p-2.5'><img src={zoom} alt="" /></div>
                  </div>
                </div>
                <div className="text-sm leading-4 p-3.5 space-y-2">
                  <div className="flex">
                    <span className="font-medium w-1/3">Project Name  :</span>
                    <span>Alpine Craftman</span>
                  </div>
                  <div className="flex">
                    <span className="font-medium w-1/3">Location:</span>
                    <span>West Tenants Harbor</span>
                  </div>
                  <div className="flex">
                    <span className="font-medium w-1/3">Project ID:</span>
                    <span>1234568</span>
                  </div>
                  <div className="flex">
                    <span className="font-medium w-1/3">Home model:</span>
                    <span>Craftman</span>
                  </div>
                </div>
              </div>
  )
}

export default Currentplan