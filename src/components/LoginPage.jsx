import React from 'react';
import bgImage from '../assets/image11.png';
import logo from '../assets/Group 6860.png';
import Icons from './whiteIcons';
import BIcons from './BlackIcons';

function LoginPage() {
  return (
    <div className="flex min-h-screen justify-center w-screen lap:max-w-[1440px] lap:mx-auto lap:items-center">
      <div className="relative flex flex-col lap:flex-row w-full ">

        {/* leftside */}
        <div
          className="relative lap:m-2.5 w-full lap:w-602px lap:h-[870px] h-[135px] tab:h-[296px] rounded-none lap:rounded-md bg-no-repeat bg-cover lap:p-46px tab:p-23px"
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundPosition: '0% 33%',
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50 rounded-none lap:rounded-md"></div>
          <img
            src={logo}
            alt="Example"
            className="absolute w-221.91px h-49.63px top-16 left-1/2 transform -translate-x-1/2 tab:top-20px tab:left-119px lap:top-43px lap:left-156px"
          />
          <div className="absolute hidden lap:block py-26px pl-26px pr-100px border-1px border-gray-100/45 w-510px h-[324px] rounded-10px top-295px">
            {/* <div className="tab:block flex flex-col justify-center text-white">
              <h1 className="text-20px lap:text-34px font-600 leading-42.05px mb-4 font-sans">
                Introducing the Smartest Construction Communication Platform
              </h1>
              <p className="text-15px font-400 leading-20px font-sans">
                NextPort is a platform that enables homebuilders to share real-time
                construction updates with their customers.
              </p>
            </div> */}
          </div>
          <div className="hidden tab:block absolute tab:top-102px lap:top-314px lap:left-71px tab:w-384px flex flex-col justify-center text-white">
            <h1 className="text-20px lap:text-34px font-600 leading-24.74px lap:leading-42.05px mb-4 font-sans">
              Introducing the Smartest Construction Communication Platform
            </h1>
            <p className="text-15px font-400 leading-20px font-sans w-307px">
              NextPort is a platform that enables homebuilders to share real-time
              construction updates with their customers.
            </p>
          </div>
          <div className="hidden tab:block lap:hidden absolute bottom-23px right-23px">
            <Icons />
          </div>

          <div className="hidden lap:block">
            <div className="lap:w-510px absolute flex justify-between mx-auto tab:top-262px lap:top-814px">
              <Icons />
              <p className="text-white font-sans text-15px font-400 leading-20px">
                © Copyright NEXTPORT - All Rights Reserved
              </p>
            </div>
          </div>
        </div>

        {/* rightside */}
        <div className="flex flex-col p-4 mt-4 w-full tab:w-500px mx-auto lap:mt-283px lap:p-0">
          <h2 className="text-2xl lap:text-3xl leading-7 font-semibold font-sans mb-2">
            Sign in to your account
          </h2>
          <h2 className="text-gray-600 font-normal text-sm mb-4">
            Explore our tool.
          </h2>
          <form>
            <div className="mb-4">
              <div className="relative mb-4">
                <input
                  placeholder=" "
                  type="text"
                  className="w-full tab:w-466px h-10 peer placeholder-transparent text-black border border-gray-300 py-2 px-3 text-sm font-normal focus:border-blue-500 focus:outline-none transition-colors duration-150"
                />
                <label className="absolute left-3 text-sm font-normal text-gray-500 top-1/2 transform -translate-y-1/2 bg-white px-1 transition-transform duration-100 ease-out origin-left peer-placeholder-shown:top-1/2 peer-placeholder-shown:scale-100 peer-focus:top-0 peer-focus:scale-90">
                  User Name*
                </label>
              </div>

              <div className="relative mb-4">
                <input
                  placeholder=" "
                  type="password"
                  className="w-full tab:w-466px h-10 peer placeholder-transparent text-black border border-gray-300 py-2 px-3 text-sm font-normal focus:border-blue-500 focus:outline-none transition-colors duration-150"
                />
                <label className="absolute left-3 text-sm font-normal text-gray-500 top-1/2 transform -translate-y-1/2 bg-white px-1 transition-transform duration-100 ease-out origin-left peer-placeholder-shown:top-1/2 peer-placeholder-shown:scale-100 peer-focus:top-0 peer-focus:scale-90">
                  Password*
                </label>
              </div>
              <div className="flex items-center justify-between mt-4 tab:w-466px">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="remember"
                    className="h-4 w-4 ring-blue-500 border-blue-500 accent-blue-500 rounded"
                  />
                  <label htmlFor="remember" className="block text-sm text-black ml-2">
                    Keep me signed in
                  </label>
                </div>
                <a href="#" className="text-sm text-[#1E37F8] hover:underline">
                  Forgot password?
                </a>
              </div>
            </div>
            <button
              type="submit"
              className="w-full tab:w-466px h-10 bg-[#1F87C9] text-white rounded mt-4"
            >
              Sign In
            </button>
          </form>
          <div className="mt-50px tab:mt-314px">
            <div className="lap:w-510px flex flex-col tab:top-262px lap:top-814px">
              <p className="block lap:hidden text-black text-center font-sans text-15px font-400 leading-20px">
                © Copyright NEXTPORT - All Rights Reserved
              </p>
              <div className="mx-auto tab:hidden mt-10px">
                <BIcons />
              </div>
            </div>
          </div>
        </div>
        <div className='absolute lap:w-259px h-[36px] flex justify-between  tab:gap-[12px] top-[15px] right-[12px] tab:top-[31px] tab:right-[26px]  lap:top-[19px] lap:right-[26px]  '>
          <h2 className='hidden tab:block w-147.31px font-sans font-[100] text-[15px] tab:text-white lap:text-black leading-[20.43px] mt-[7px] '>Don’t have an account?</h2>
          <button className='w-79px  h-[36px] border-[1px] border-[#1F87C9] hover:bg-[#1F87C9] text-[#1F87C9] bg-white hover:text-white rounded-[5px] font-sans font-[600] text-[14px] leading-[21px] text-center'>Sign up</button>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
