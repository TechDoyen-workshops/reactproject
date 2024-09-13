import React from 'react'
import logo from '../../../assets/logo.png';
import rightArrow from '../../../assets/arrowrgt.png'
import dashboard from "../../../assets/sidebaricons/dashboard.svg";
import Estimating from "../../../assets/sidebaricons/estimate.svg";
import Projects from "../../../assets/sidebaricons/project.svg";
import Scheduling from "../../../assets/sidebaricons/schedule.svg";
import Customers from "../../../assets/sidebaricons/customer.svg";
import Models from "../../../assets/sidebaricons/models.svg";
import task from "../../../assets/sidebaricons/mytask.svg";
import todo from "../../../assets/sidebaricons/todo.svg";
import Selections from "../../../assets/sidebaricons/selection.svg";
import Finances from "../../../assets/sidebaricons/finance.svg";
import subcontract from "../../../assets/sidebaricons/subcontactors.svg";
import Feedback from "../../../assets/sidebaricons/feedback.svg";
import Documents from "../../../assets/sidebaricons/document.svg";
import users from "../../../assets/sidebaricons/users.svg";
import Settings from "../../../assets/sidebaricons/settings.svg";
import { Link } from 'react-router-dom';
function sidebar() {
  return (
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
            

              <Link to='/Maincontent' className="group">
                <li className=' mx-auto w-[217px] px-[13px] py-2 list-none flex gap-2 rounded-md text-[#676E8B] hover:bg-[#107EC3]   group-hover:text-white'>
                  <img src={dashboard} alt="" className='group-hover:brightness-0 group-hover:invert' />
                  <p className='text-[15px] leading-6 font-bold font-roboto group-hover:text-white'>
                  Dashboard
                  </p>
                </li>
              </Link>

              <Link to='/Estimating' className="group">
                <li className='mx-auto w-[217px] px-[13px] py-2 list-none flex gap-2 rounded-md text-[#676E8B] hover:bg-[#107EC3] group-hover:text-white'>
                  <img src={Estimating} alt="" className='group-hover:brightness-0 group-hover:invert' />
                  <p className='text-[15px] leading-6 font-bold font-roboto group-hover:text-white'>
                    Estimating
                  </p>
                </li>
              </Link>


              <Link to='/Projects' className="group">
                <li className='mx-auto w-[217px] px-[13px] py-2 list-none flex gap-2 rounded-md text-[#676E8B] group-hover:bg-[#107EC3] group-hover:text-white'>
                  <img src={Projects} alt="" className='group-hover:brightness-0 group-hover:invert' />
                  <p className='text-[15px] leading-6 font-bold font-roboto group-hover:text-white'>Projects</p>
                </li>
              </Link>

              <Link to='/Scheduling' className="group">
                <li className='mx-auto w-[217px] px-[13px] py-2 list-none flex gap-2 rounded-md text-[#676E8B] group-hover:bg-[#107EC3] group-hover:text-white'>
                  <img src={Scheduling} alt="" className='group-hover:brightness-0 group-hover:invert' />
                  <p className='text-[15px] leading-6 font-bold font-roboto group-hover:text-white'>Scheduling</p>
                </li>
              </Link>

              <Link to='/Customers' className="group">
                <li className='mx-auto w-[217px] px-[13px] py-2 list-none flex gap-2 rounded-md text-[#676E8B] group-hover:bg-[#107EC3] group-hover:text-white'>
                  <img src={Customers} alt="" className='group-hover:brightness-0 group-hover:invert' />
                  <p className='text-[15px] leading-6 font-bold font-roboto group-hover:text-white'>Customers</p>
                </li>
              </Link>

              <Link to='/Models' className="group">
                <li className='mx-auto w-[217px] px-[13px] py-2 list-none flex gap-2 rounded-md text-[#676E8B] group-hover:bg-[#107EC3] group-hover:text-white'>
                  <img src={Models} alt="" className='group-hover:brightness-0 group-hover:invert' />
                  <p className='text-[15px] leading-6 font-bold font-roboto group-hover:text-white'>Models</p>
                </li>
              </Link>

              <Link to='/Mytask' className="group">
                <li className='mx-auto w-[217px] px-[13px] py-2 list-none flex gap-2 rounded-md text-[#676E8B] group-hover:bg-[#107EC3] group-hover:text-white'>
                  <img src={task} alt="" className='group-hover:brightness-0 group-hover:invert' />
                  <p className='text-[15px] leading-6 font-bold font-roboto group-hover:text-white'>My Tasks</p>
                </li>
              </Link>

              <Link to='/Todo' className="group">
                <li className='mx-auto w-[217px] px-[13px] py-2 list-none flex justify-between rounded-md text-[#676E8B] group-hover:bg-[#107EC3] group-hover:text-white'>
                  <div className='flex gap-2'>
                    <img src={todo} alt="" className='group-hover:brightness-0 group-hover:invert' />
                    <p className='text-[15px] leading-6 font-bold font-roboto group-hover:text-white'>To Do’s</p>
                  </div>
                  <div className="w-[18px] h-[18px] bg-[#107EC3] rounded-full flex justify-center items-center group-hover:bg-white">
                    <span className='text-[11px] text-white font-[600] leading-6 group-hover:text-[#107EC3]'>2</span>
                  </div>
                </li>
              </Link>

              <Link to='/Selections' className="group">
                <li className='mx-auto w-[217px] px-[13px] py-2 list-none flex gap-2 rounded-md text-[#676E8B] group-hover:bg-[#107EC3] group-hover:text-white'>
                  <img src={Selections} alt="" className='group-hover:brightness-0 group-hover:invert' />
                  <p className='text-[15px] leading-6 font-bold font-roboto group-hover:text-white'>Selections</p>
                </li>
              </Link>

              <Link to='/Finances'  className="group">
                <li className='mx-auto w-[217px] px-[13px] py-2 list-none flex gap-2 rounded-md text-[#676E8B] group-hover:bg-[#107EC3] group-hover:text-white'>
                  <img src={Finances} alt="" className='group-hover:brightness-0 group-hover:invert' />
                  <p className='text-[15px] leading-6 font-bold font-roboto group-hover:text-white'>Finances</p>
                </li>
              </Link>

              <Link to='/Subcontractors' className="group">
                <li className='mx-auto w-[217px] px-[13px] py-2 list-none flex gap-2 rounded-md text-[#676E8B] group-hover:bg-[#107EC3] group-hover:text-white'>
                  <img src={subcontract} alt="" className='group-hover:brightness-0 group-hover:invert' />
                  <p className='text-[15px] leading-6 font-bold font-roboto group-hover:text-white'>Sub Contractors</p>
                </li>
              </Link>


              <Link to='/Feedback' className="group">
                <li className='mx-auto w-[217px] px-[13px] py-2 list-none flex gap-2 rounded-md text-[#676E8B] group-hover:bg-[#107EC3] group-hover:text-white'>
                  <img src={Feedback} alt="" className='group-hover:brightness-0 group-hover:invert' />
                  <p className='text-[15px] leading-6 font-bold font-roboto group-hover:text-white'>Feedback</p>
                </li>
              </Link>


              <Link to='/Documents' className="group">
                <li className='mx-auto w-[217px] px-[13px] py-2 list-none flex gap-2 rounded-md text-[#676E8B] group-hover:bg-[#107EC3] group-hover:text-white'>
                  <img src={Documents} alt="" className='group-hover:brightness-0 group-hover:invert' />
                  <p className='text-[15px] leading-6 font-bold font-roboto group-hover:text-white'>Documents</p>
                </li>
              </Link>


              <Link to='/Users' className="group">
                <li className='mx-auto w-[217px] px-[13px] py-2 list-none flex gap-2 rounded-md text-[#676E8B] group-hover:bg-[#107EC3] group-hover:text-white'>
                  <img src={users} alt="" className='group-hover:brightness-0 group-hover:invert' />
                  <p className='text-[15px] leading-6 font-bold font-roboto group-hover:text-white'>Users</p>
                </li>
              </Link>


              <Link to='/Settings' className="group">
                <li className='mx-auto w-[217px] px-[13px] py-2 list-none flex gap-2 rounded-md text-[#676E8B] group-hover:bg-[#107EC3] group-hover:text-white'>
                  <img src={Settings} alt="" className='group-hover:brightness-0 group-hover:invert' />
                  <p className='text-[15px] leading-6 font-bold font-roboto group-hover:text-white'>Settings</p>
                </li>
              </Link>

            </div>
          </div>
        </div>
  )
}

export default sidebar