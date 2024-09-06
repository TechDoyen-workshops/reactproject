import React from "react";
import bgImage from "../assets/image11.png";
import logo from "../assets/Group 6860.png";
import Signup from "./Signup";
import Icons from "./whiteIcons";
import InputForm from "./InputForm";
import BlackIcons from "./BlackIcons";

function TabScreenbg() {
  return (
    <div className="flex flex-col h-[640px] tab:h-[1024px]">
      <div
        className="w-full h-[134px] tab:h-[297px] bg-no-repeat bg-cover relative"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundPosition: '0% 33%',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <img
          src={logo}
          alt="Example"
          className="absolute w-[222.91px] h-[49.63px] mt-[66px] tab:mt-[20px] tab:ml-[12px] left-1/2 transform -translate-x-1/2 tab:left-0 tab:transform-none"
        />

        <div className="hidden tab:block absolute flex flex-col justify-center mt-[102px] ml-[26px] text-white">
          <h1 className="text-[20px] font-[600] leading-[24.74px] mb-4 font-sans w-[384px]">
            Introducing the Smartest Construction Communication Platform
          </h1>
          <p className="text-[15px] font-[400] leading-[20px] font-sans w-[307px]">
            NextPort is a platform that enables homebuilders to share real-time
            construction updates with their customers.
          </p>
        </div>
        <div className="right-[13px] tab:right-[25px] mt-[10px] absolute tab:ml-[484px]">
          <Signup />
        </div>
        <div className="absolute right-[22px] bottom-[23px] hidden tab:block">
          <Icons />
        </div>
      </div>
      <div className="flex justify-center mt-[40px]">
        <InputForm />
      </div>
      <div className="mt-auto mb-[30px]">
        <p className="text-black text-center font-sans text-[15px] font-[400] leading-[20px]">
          © Copyright NEXTPORT - All Rights Reserved
        </p>
        <div className="block tab:hidden flex justify-center mt-[8px]">
          <BlackIcons />
        </div>
      </div>
    </div>
  );
}

export default TabScreenbg;
