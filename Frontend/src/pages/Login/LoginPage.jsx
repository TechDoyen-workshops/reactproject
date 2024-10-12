import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/Group 6860.png';
import Icons from './components/SocialMediaIcons';
import axios from 'axios';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();


  const loginUser = async (e) => {
    e.preventDefault(); 

    try {
      const response = await axios.post('http://localhost:3001/auth', {
        action: 'login',
        email: email,
        password: password
      });

      console.log('Response:', response.data);
      alert('Login successful!');

 // Save email to localStorage
    localStorage.setItem('userEmail', email);

      // Navigate to Layout route and pass email as state
      navigate('/Layout');
    } catch (error) {
      console.error('Error logging in:', error);
      alert('Password Incorrect');
    }
  };




  return (
    <div className="flex min-h-screen justify-center w-screen xl:max-w-[1440px] xl:mx-auto xl:items-center">
      <div className="relative flex flex-col xl:flex-row w-full ">

        {/* leftside */}
        <div
          className="relative bg-custom bg-custom-pos xl:m-2.5 w-full xl:w-602px xl:h-[870px] h-[135px] sm:h-[296px] rounded-none xl:rounded-md bg-no-repeat bg-cover xl:p-46px sm:p-23px"
        >
          <div className="absolute inset-0 bg-black opacity-50 rounded-none xl:rounded-md"></div>
          <img
            src={logo}
            alt="Example"
            className="absolute w-221.91px h-49.63px top-16 left-1/2 transform -translate-x-1/2 sm:top-20px sm:left-119px xl:top-43px xl:left-156px"
          />
          <div className="hidden sm:block absolute sm:border-[0px] xl:border-1px sm:px-0 sm:py-0 xl:py-26px xl:pl-26px xl:pr-100px  border-gray-100/45 xl:w-510px h-[324px] rounded-10px top-[102px] xl:top-295px">
            <div className="sm:block flex flex-col justify-center text-white sm:w-384px ">
              <h1 className="text-20px xl:text-36px font-600 leading-24.74px xl:leading-42.05px mb-4 font-sans ">
                Introducing the Smartest Construction Communication Platform
              </h1>
              <p className="text-15px font-400 leading-20px font-sans w-307px">
                NextPort is a platform that enables homebuilders to share real-time
                construction updates with their customers.
              </p>
            </div>
          </div>
          {/* <div className="hidden sm:block absolute sm:top-102px xl:top-314px xl:left-71px sm:w-384px flex flex-col justify-center text-white">
            <h1 className="text-20px xl:text-34px font-600 leading-24.74px xl:leading-42.05px mb-4 font-sans">
              Introducing the Smartest Construction Communication Platform
            </h1>
            <p className="text-15px font-400 leading-20px font-sans w-307px">
              NextPort is a platform that enables homebuilders to share real-time
              construction updates with their customers.
            </p>
          </div> */}
          <div className="hidden sm:block xl:hidden absolute bottom-23px right-23px">
            <Icons />
          </div>

          <div className="hidden xl:block">
            <div className="xl:w-510px absolute flex justify-between mx-auto sm:top-262px xl:top-814px">
              <Icons />
              <p className="text-white font-sans text-15px font-400 leading-20px">
                © Copyright NEXTPORT - All Rights Reserved
              </p>
            </div>
          </div>
        </div>

        {/* rightside */}
        <div className="flex flex-col p-4 mt-4 w-full sm:w-500px mx-auto xl:mt-283px xl:p-0">
          <h2 className="text-2xl xl:text-3xl leading-7 font-semibold font-sans mb-2">
            Sign in to your account
          </h2>
          <h2 className="text-gray-600 font-normal text-sm mb-4">
            Explore our tool.
          </h2>


          <form onSubmit={loginUser}>
            <div className="mb-4">
              <div className="relative mb-4">
                <input
                  placeholder=" "
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  
                  className="w-full sm:w-466px h-10 peer placeholder-transparent text-black border border-gray-300 py-2 px-3 text-sm font-normal focus:border-blue-500 focus:outline-none transition-colors duration-150"
                />
                <label className="absolute left-3 text-sm font-normal text-gray-500 top-1/2 transform -translate-y-1/2 bg-white px-1 transition-transform duration-100 ease-out origin-left peer-placeholder-shown:top-1/2 peer-placeholder-shown:scale-100 peer-focus:top-0 peer-focus:scale-90">
                  User Name*
                </label>
              </div>

              <div className="relative mb-4">
                <input
                 placeholder=" "
                 type="password"
                 value={password}
                 onChange={(e) => setPassword(e.target.value)}
                 
                  className="w-full sm:w-466px h-10 peer placeholder-transparent text-black border border-gray-300 py-2 px-3 text-sm font-normal focus:border-blue-500 focus:outline-none transition-colors duration-150"
                />
                <label className="absolute left-3 text-sm font-normal text-gray-500 top-1/2 transform -translate-y-1/2 bg-white px-1 transition-transform duration-100 ease-out origin-left peer-placeholder-shown:top-1/2 peer-placeholder-shown:scale-100 peer-focus:top-0 peer-focus:scale-90">
                  Password*
                </label>
              </div>
              <div className="flex items-center justify-between mt-4 sm:w-466px">
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
              className="w-full sm:w-466px h-10 bg-[#1F87C9] text-white rounded mt-4"
            >
              Sign In
            </button>
          </form>
          <div className="mt-50px sm:mt-314px">
            <div className="xl:w-510px flex flex-col sm:top-262px xl:top-814px">
              <p className="block xl:hidden text-black text-center font-sans text-15px font-400 leading-20px">
                © Copyright NEXTPORT - All Rights Reserved
              </p>
              <div className="mx-auto sm:hidden mt-10px ">
                <Icons />
              </div>
            </div>
          </div>
        </div>
        <div className='absolute xl:w-259px h-[36px] flex justify-between  sm:gap-[12px] top-[15px] right-[12px] sm:top-[31px] sm:right-[26px]  xl:top-[19px] xl:right-[26px]  '>
          <h2 className='hidden sm:block w-147.31px font-sans font-[100] text-[15px] sm:text-white xl:text-black leading-[20.43px] mt-[7px] '>Don’t have an account?</h2>
          <button className='w-79px  h-[36px] border-[1px] border-[#1F87C9] hover:bg-[#1F87C9] text-[#1F87C9] bg-white hover:text-white rounded-[5px] font-sans font-[600] text-[14px] leading-[21px] text-center'>Sign up</button>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
