import React from "react";
import SignIn from "./SignIn";

function InputForm() {
  return (
    
    <div className="w-[338px] tab:w-[500px] h-[331px]">
      <h2 className="text-[26px] leading-[29px] font-[600] font-sans mb-[6px]">
        Sign in to your account
      </h2>
      <h2 className="text-[#6C6C6C] font-[400] text-[15px] leading-[15px]">
        Explore our tool.
      </h2>
      <form>
        <div className="mb-4">
          <div className="flex items-center font-sans mt-[32px]">
            <div className="relative">
              <input
                placeholder=" "
                type="text"
                className="w-[336px] tab:w-[466px] h-[40px] peer placeholder-transparent text-black border-[1px] border-[#CCD4DE] py-4 px-3 text-[15px] font-sans font-[400] focus:border-[#CCD4DE] focus:outline-none transition-colors duration-150"
              />
              <label className="absolute left-[12px] text-[13px] font-[400] leading-[20px] w-[90px] h-[20px] text-[#687B92] top-0 transform -translate-y-1/2 scale-90 bg-white px-1 transition-transform duration-100 ease-out origin-left peer-placeholder-shown:top-1/2 peer-placeholder-shown:scale-100 peer-focus:top-0 peer-focus:scale-90">
                User Name*
              </label>
            </div>
          </div>

          <div className="flex items-center font-sans mt-[32px]">
            <div className="relative">
              <input
                placeholder=" "
                type="text"
                className="w-[336px] tab:w-[466px] h-[40px] peer placeholder-transparent text-black border-[1px] border-[#CCD4DE] py-4 px-3 text-[15px] font-sans font-[400] focus:border-[#CCD4DE] focus:outline-none transition-colors duration-150"
              />
              <label className="absolute left-[12px] text-[13px] font-[400] leading-[20px] w-[90px] h-[20px] text-[#687B92] top-0 transform -translate-y-1/2 scale-90 bg-white px-1 transition-transform duration-100 ease-out origin-left peer-placeholder-shown:top-1/2 peer-placeholder-shown:scale-100 peer-focus:top-0 peer-focus:scale-90">
                Password*
              </label>
            </div>
          </div>

          <div className="flex items-center gap-[71px] tab:gap-[200px] mt-[10px]">
          <div className="flex items-center gap-[4px]">
            <input
              type="checkbox"
              id="remember"
              className="h-[19px] w-[19px] ring-[#1E37F8] border-[#1E37F8] accent-[#1E37F8] rounded"
            />
            <label htmlFor="remember" className="block text-[15px] font-sans font-[400] leading-[20.43px] text-[#000000]">
              Keep me signed in
            </label>
          </div>
          <a href="#" className="text-[15px] font-[400] font-sans text-[#1E37F8] leading-[20.43px] hover:underline">
            Forgot password?
          </a>
          
        </div>
        </div>
      </form>
      <div className="mt-[43px]">
      <SignIn/></div>
    </div>
  );
}

export default InputForm;
