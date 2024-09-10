import React from 'react'
import logo from '../assets/logo.png'
import dashboard from "../assets/sidebaricons/dashboard.svg";
import Estimating from "../assets/sidebaricons/estimate.svg";
import Projects from "../assets/sidebaricons/project.svg";
import Scheduling from "../assets/sidebaricons/schedule.svg";
import Customers from "../assets/sidebaricons/customer.svg";
import Models from "../assets/sidebaricons/models.svg";
import task from "../assets/sidebaricons/mytask.svg";
import todo from "../assets/sidebaricons/todo.svg";
import Selections from "../assets/sidebaricons/selection.svg";
import Finances from "../assets/sidebaricons/finance.svg";
import subcontract from "../assets/sidebaricons/subcontactors.svg";
import Feedback from "../assets/sidebaricons/feedback.svg";
import Documents from "../assets/sidebaricons/document.svg";
import users from "../assets/sidebaricons/users.svg";
import Settings from "../assets/sidebaricons/settings.svg";
import profile from '../assets/profile.png'
import dwnArrow from '../assets/arrowdwn.png'
import rightArrow from '../assets/arrowrgt.png'
import customercard from '../assets/customercard.svg'
import projectcard from '../assets/projectcard.svg'
import feedbackcard from '../assets/feedbackcard.svg'
import greenarrow from '../assets/greenarrow.svg'
import redarrow from '../assets/redarrow.svg'
import image from "../assets/image 15.png"
import zoom from "../assets/zoom.svg"
import arrowleft from "../assets/arow left.svg"
import arrowright from "../assets/arrow right.svg"



function Dashboard() {
  return (
    <div className='flex items-center justify-center min-h-screen font-roboto '>
      <div className=" flex w-[1440px] h-[900px] mx-auto py-[15px] pl-[30px] bg-[#F7F7FA]">
        {/* left */}
        <div className='relative w-[263px] h-[869px] '>
          <div className='absolute left-[215px] top-[72px]'>
            <div className='relative'>
              <div className='absolute w-12 h-12 rounded-full border bg-[#F7F7FA] '></div>
              <div className='absolute w-[24px] h-12  left-6 bg-[#F7F7FA]'></div>
              <div className='absolute w-[34px] h-[34px] rounded-full border-[#DEDEDE] border flex justify-center items-center bg-[#F7F7FA] top-[7px] left-[7px]'><img src={rightArrow} alt="" /></div>
            </div></div>
          <div className='w-[240px] h-[869px]  pt-[19px] border rounded-lg border-[#DEDEDE]'>
            <img src={logo} alt="" className='mx-auto ' />
            <hr className='bg-[#DEDEDE] border-[2px] mt-[19px]' />
            <div className='flex flex-col justify-between mt-[19px] h-[726px]'>
            

              <div className="group">
                <li className=' mx-auto w-[217px] px-[13px] py-2 list-none flex gap-2 rounded-md text-[#676E8B] hover:bg-[#107EC3]   group-hover:text-white'>
                  <img src={dashboard} alt="" className='group-hover:brightness-0 group-hover:invert' />
                  <p className='text-[15px] leading-6 font-bold font-roboto group-hover:text-white'>
                  Dashboard
                  </p>
                </li>
              </div>

              <div className="group">
                <li className='mx-auto w-[217px] px-[13px] py-2 list-none flex gap-2 rounded-md text-[#676E8B] hover:bg-[#107EC3] group-hover:text-white'>
                  <img src={Estimating} alt="" className='group-hover:brightness-0 group-hover:invert' />
                  <p className='text-[15px] leading-6 font-bold font-roboto group-hover:text-white'>
                    Estimating
                  </p>
                </li>
              </div>


              <div className="group">
                <li className='mx-auto w-[217px] px-[13px] py-2 list-none flex gap-2 rounded-md text-[#676E8B] group-hover:bg-[#107EC3] group-hover:text-white'>
                  <img src={Projects} alt="" className='group-hover:brightness-0 group-hover:invert' />
                  <p className='text-[15px] leading-6 font-bold font-roboto group-hover:text-white'>Projects</p>
                </li>
              </div>

              <div className="group">
                <li className='mx-auto w-[217px] px-[13px] py-2 list-none flex gap-2 rounded-md text-[#676E8B] group-hover:bg-[#107EC3] group-hover:text-white'>
                  <img src={Scheduling} alt="" className='group-hover:brightness-0 group-hover:invert' />
                  <p className='text-[15px] leading-6 font-bold font-roboto group-hover:text-white'>Scheduling</p>
                </li>
              </div>

              <div className="group">
                <li className='mx-auto w-[217px] px-[13px] py-2 list-none flex gap-2 rounded-md text-[#676E8B] group-hover:bg-[#107EC3] group-hover:text-white'>
                  <img src={Customers} alt="" className='group-hover:brightness-0 group-hover:invert' />
                  <p className='text-[15px] leading-6 font-bold font-roboto group-hover:text-white'>Customers</p>
                </li>
              </div>

              <div className="group">
                <li className='mx-auto w-[217px] px-[13px] py-2 list-none flex gap-2 rounded-md text-[#676E8B] group-hover:bg-[#107EC3] group-hover:text-white'>
                  <img src={Models} alt="" className='group-hover:brightness-0 group-hover:invert' />
                  <p className='text-[15px] leading-6 font-bold font-roboto group-hover:text-white'>Models</p>
                </li>
              </div>

              <div className="group">
                <li className='mx-auto w-[217px] px-[13px] py-2 list-none flex gap-2 rounded-md text-[#676E8B] group-hover:bg-[#107EC3] group-hover:text-white'>
                  <img src={task} alt="" className='group-hover:brightness-0 group-hover:invert' />
                  <p className='text-[15px] leading-6 font-bold font-roboto group-hover:text-white'>My Tasks</p>
                </li>
              </div>

              <div className="group">
                <li className='mx-auto w-[217px] px-[13px] py-2 list-none flex justify-between rounded-md text-[#676E8B] group-hover:bg-[#107EC3] group-hover:text-white'>
                  <div className='flex gap-2'>
                    <img src={todo} alt="" className='group-hover:brightness-0 group-hover:invert' />
                    <p className='text-[15px] leading-6 font-bold font-roboto group-hover:text-white'>To Do’s</p>
                  </div>
                  <div className="w-[18px] h-[18px] bg-[#107EC3] rounded-full flex justify-center items-center group-hover:bg-white">
                    <span className='text-[11px] text-white font-[600] leading-6 group-hover:text-[#107EC3]'>2</span>
                  </div>
                </li>
              </div>

              <div className="group">
                <li className='mx-auto w-[217px] px-[13px] py-2 list-none flex gap-2 rounded-md text-[#676E8B] group-hover:bg-[#107EC3] group-hover:text-white'>
                  <img src={Selections} alt="" className='group-hover:brightness-0 group-hover:invert' />
                  <p className='text-[15px] leading-6 font-bold font-roboto group-hover:text-white'>Selections</p>
                </li>
              </div>

              <div className="group">
                <li className='mx-auto w-[217px] px-[13px] py-2 list-none flex gap-2 rounded-md text-[#676E8B] group-hover:bg-[#107EC3] group-hover:text-white'>
                  <img src={Finances} alt="" className='group-hover:brightness-0 group-hover:invert' />
                  <p className='text-[15px] leading-6 font-bold font-roboto group-hover:text-white'>Finances</p>
                </li>
              </div>

              <div className="group">
                <li className='mx-auto w-[217px] px-[13px] py-2 list-none flex gap-2 rounded-md text-[#676E8B] group-hover:bg-[#107EC3] group-hover:text-white'>
                  <img src={subcontract} alt="" className='group-hover:brightness-0 group-hover:invert' />
                  <p className='text-[15px] leading-6 font-bold font-roboto group-hover:text-white'>Sub Contractors</p>
                </li>
              </div>


              <div className="group">
                <li className='mx-auto w-[217px] px-[13px] py-2 list-none flex gap-2 rounded-md text-[#676E8B] group-hover:bg-[#107EC3] group-hover:text-white'>
                  <img src={Feedback} alt="" className='group-hover:brightness-0 group-hover:invert' />
                  <p className='text-[15px] leading-6 font-bold font-roboto group-hover:text-white'>Feedback</p>
                </li>
              </div>


              <div className="group">
                <li className='mx-auto w-[217px] px-[13px] py-2 list-none flex gap-2 rounded-md text-[#676E8B] group-hover:bg-[#107EC3] group-hover:text-white'>
                  <img src={Documents} alt="" className='group-hover:brightness-0 group-hover:invert' />
                  <p className='text-[15px] leading-6 font-bold font-roboto group-hover:text-white'>Documents</p>
                </li>
              </div>


              <div className="group">
                <li className='mx-auto w-[217px] px-[13px] py-2 list-none flex gap-2 rounded-md text-[#676E8B] group-hover:bg-[#107EC3] group-hover:text-white'>
                  <img src={users} alt="" className='group-hover:brightness-0 group-hover:invert' />
                  <p className='text-[15px] leading-6 font-bold font-roboto group-hover:text-white'>Users</p>
                </li>
              </div>


              <div className="group">
                <li className='mx-auto w-[217px] px-[13px] py-2 list-none flex gap-2 rounded-md text-[#676E8B] group-hover:bg-[#107EC3] group-hover:text-white'>
                  <img src={Settings} alt="" className='group-hover:brightness-0 group-hover:invert' />
                  <p className='text-[15px] leading-6 font-bold font-roboto group-hover:text-white'>Settings</p>
                </li>
              </div>

            </div>
          </div>
        </div>
        {/* right */}


        {/* header */}
        <div>
          <div className='flex justify-between   '>
            <h1 className='text-xl font-bold leading-6 my-auto font-roboto'>Dashboard</h1>
            <div className='flex justify-between h-[50px] '>
              <img src={profile} className='w-[50px] h-[50px] ' alt="" />
              <img src={dwnArrow} className='w-5 h-5 my-auto' alt="" />
            </div>
          </div>
          <div className='flex'>
            <div>
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


              <div className='chart flex justify-between w-[749px] h-[256px] mt-3.5 bg-white rounded-lg border '> <h1 className=' text-blue-400 text-[60px] mx-auto my-auto'>chart</h1></div>


              <div className="p-4 bg-white rounded-lg border h-[290px] mt-3.5">
                <h2 className="text-base font-medium leading-[18px] mb-2">What's going on This Week</h2>
                <div className="overflow-x-auto">
                  <table className="min-w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-[#EFF0F6] h-[39px]">
                        <th className="px-6 py-3 text-[15px] leading-[17px] font-medium text-black">Project Name</th>
                        <th className="px-6 py-3 text-[15px] leading-[17px] font-medium text-black">Customer</th>
                        <th className="px-6 py-3 text-[15px] leading-[17px] font-medium text-black">Location</th>
                        <th className="px-6 py-3 text-[15px] leading-[17px] font-medium text-black">Task</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="px-6 py-4  text-sm font-normal text-black">Highland Meadows</td>
                        <td className="px-6 py-4  text-[15px] leading-[17px] text-black">John Stein</td>
                        <td className="px-6 py-4  text-[15px] leading-[17px] text-black">San Francisco</td>
                        <td className="px-6 py-4  text-[15px] leading-[17px] text-black">Clear Lot</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4  text-[15px] leading-[17px] font-normal text-black">Highland Meadows</td>
                        <td className="px-6 py-4  text-[15px] leading-[17px] text-black">Arlene Mccoy</td>
                        <td className="px-6 py-4  text-[15px] leading-[17px] text-black">Grand Canyon</td>
                        <td className="px-6 py-4  text-[15px] leading-[17px] text-black">Grading</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4  text-[15px] leading-[17px] font-normal text-black">Highland Meadows</td>
                        <td className="px-6 py-4  text-[15px] leading-[17px] text-black">John Smith</td>
                        <td className="px-6 py-4  text-[15px] leading-[17px] text-black">New York</td>
                        <td className="px-6 py-4  text-[15px] leading-[17px] text-black">Stake for Excavation</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4  text-[15px] leading-[17px] font-normal text-black">Highland Meadows</td>
                        <td className="px-6 py-4 text-[15px] leading-[17px] text-black">Kathryn Murphy</td>
                        <td className="px-6 py-4  text-[15px] leading-[17px] text-black">Washington</td>
                        <td className="px-6 py-4  text-[15px] leading-[17px] text-black">Excavate for Foundation</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            {/* thirdside */}
            <div className='flex flex-col '>
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
              {/* upcoming task */}
              <div className="w-[359px] h-[355px] mt-2.5 ml-3.5 bg-white rounded-lg border p-[18px]">
                <h3 className="text-base font-medium leading-[18px] mb-4">Upcoming Tasks</h3>

                <div>
                  {/* Task Item */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="flex flex-col items-center justify-center bg-gray-200 rounded-[15px] w-[60px] h-[58px]">
                        <span className="text-xl font-bold leading-[23px]">25</span>
                        <span className="text-sm font-black text-[#687B92] leading-4">March</span>
                      </div>
                      <div>
                        <p className="font-bold text-sm leading-[18px]">Design Meeting</p>
                        <p className="text-sm font-normal leading-4 text-[#52565B]">Time: 3:00 PM</p>
                      </div>
                    </div>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>

                  <div className="flex items-center justify-between my-[16px]">
                    <div className="flex items-center space-x-4">
                      <div className="flex flex-col items-center justify-center bg-gray-200 rounded-[15px] w-[60px] h-[58px]">
                        <span className="text-xl font-bold leading-[23px]">25</span>
                        <span className="text-sm font-black text-[#687B92] leading-4">March</span>
                      </div>
                      <div>
                        <p className="font-bold text-sm leading-[18px]">Design Meeting</p>
                        <p className="text-sm font-normal leading-4 text-[#52565B]">Time: 3:00 PM</p>
                      </div>
                    </div>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Task Item - High Priority */}
                  <div className="flex items-center justify-between my-[16px]">
                    <div className="flex items-center space-x-4">
                      <div className="flex flex-col items-center justify-center bg-red-500 text-white rounded-[15px] w-[60px] h-[58px]">
                        <span className="text-xl font-bold leading-[23px]">25</span>
                        <span className="text-sm font-black text-white leading-4">March</span>
                      </div>
                      <div>
                        <p className="font-bold text-sm leading-[18px]">Order kitchen cabinets</p>
                        <p className="text-sm font-normal leading-4 text-[#52565B]">Priority: High</p>
                      </div>
                    </div>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Another Task Item - High Priority */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="flex flex-col items-center justify-center bg-red-500 text-white rounded-[15px] w-[60px] h-[58px]">
                        <span className="text-xl font-bold leading-[23px]">25</span>
                        <span className="text-sm font-black text-white leading-4">March</span>
                      </div>
                      <div>
                        <p className="font-bold text-sm leading-[18px]">Order granite countertop</p>
                        <p className="text-sm font-normal leading-4 text-[#52565B]">Priority: High</p>
                      </div>
                    </div>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Dashboard