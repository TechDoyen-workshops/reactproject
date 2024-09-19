import React from 'react'
import customercard from '../../../assets/customercard.svg'
import projectcard from '../../../assets/projectcard.svg'
import feedbackcard from '../../../assets/feedbackcard.svg'
import greenarrow from '../../../assets/greenarrow.svg'
import redarrow from '../../../assets/redarrow.svg'

function Card() {
  return (
    <div className='card flex justify-between w-[749px] mt-2.5'>
                <div className="py-[26px] pl-[26px] pr-2 rounded-lg border w-[239px] flex justify-between bg-white">
                  <div className='relative w-[60px] h-[60px] rounded-full bg-purple-300 my-auto '>
                    <img src={customercard} className='absolute top-[17px] left-[15px]' alt="" />
                  </div>
                  <div className=''>
                    <h1 className='font-roboto text-[24px] font-medium leading-7 text-[#107EC3]'>1000</h1>
                    <p className='text-[#6E6B7B] text-sm font-normal leading-4 '>Customers</p>
                    <hr className='text-[#DDDDDD] mt-[5px] ' />
                    <div className='flex'>
                      <img src={greenarrow} alt="" />
                      <p className='text-[#6E6B7B] text-xs font-normal leading-[14px] mt-[5px]'>10% since last Month</p>
                    </div>
                  </div>
                </div>

                <div className="py-[26px] pl-[26px] pr-2 rounded-lg border w-[239px] flex justify-between bg-white">
                  <div className='relative w-[60px] h-[60px] rounded-full bg-cyan-200 my-auto'>
                    <img src={projectcard} className='absolute top-[17px] left-[15px]' alt="" />
                  </div>
                  <div className=''>
                    <h1 className='font-roboto text-[24px] font-medium leading-7 text-[#107EC3]'>1000</h1>
                    <p className='text-[#6E6B7B] text-sm font-normal leading-4 '>Projects</p>
                    <p className='text-[#6E6B7B] text-xs font-normal leading-[14px] mt-[5px]'>Live: 500 | Completed: 500</p>
                    <hr className='text-[#DDDDDD] mt-[5px] ' />
                    <div className='flex'>
                      <img src={greenarrow} alt="" />
                      <p className='text-[#6E6B7B] text-xs font-normal leading-[14px] mt-[5px]'>10% since last Month</p>
                    </div>
                  </div>
                </div>

                <div className="py-[26px] pl-[26px] pr-1.5 rounded-lg border w-[239px] flex justify-between bg-white">
                  <div className='relative w-[60px] h-[60px] rounded-full bg-[#CEE1D6] my-auto'>
                    <img src={feedbackcard} className='absolute top-[17px] left-[15px]' alt="" />
                  </div>
                  <div className=''>
                    <h1 className='font-roboto text-[24px] font-medium leading-7 text-[#107EC3]'>1000</h1>
                    <p className='text-[#6E6B7B] text-sm font-normal leading-4 '>Feedbacks</p>
                    <hr className='text-[#DDDDDD] mt-[5px] ' />
                    <div className='flex'>
                      <img src={redarrow} alt="" />
                      <p className='text-[#6E6B7B] text-xs font-normal leading-[14px] mt-[5px]'>10% since last Month</p>
                    </div>
                  </div>
                </div>
              </div>
  )
}

export default Card