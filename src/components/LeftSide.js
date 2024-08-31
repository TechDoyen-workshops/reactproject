import React from "react";
import bgImage from "../assets/image11.png";
import logo from "../assets/Group 6860.png";
import Icons from "./whiteIcons";


function LeftSide() {
  return (
    <div
      className=" w-[602px]  h-[870px]   rounded-[10px]  bg-no-repeat bg-cover relative"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute w-[602px] inset-0 bg-black opacity-50 rounded-[10px]"></div>
      <img
        src={logo}
        alt="Example"
        className=" absolute w-[222.91] h-[49.63] top-[43px] left-[46px] "
      />
      <div className="absolute  border-[1px] w-[510px] opacity-[.55] h-[324px] rounded-[10px] top-[295px] left-[46px]"></div>
      <div className=" absolute flex flex-col justify-center  mt-[314px] ml-[71px] text-white ">
        <h1 className="text-[20px] lap:text-[34px] font-[600] leading-[42.05px] mb-4 font-sans w-[384px]">
          Introducing the Smartest Construction Communication Platform
        </h1>
        <p className="text-[15px]  font-[400] leading-[20px] font-sans w-[307px] ">
          NextPort is a platform that enables homebuilders to share real-time
          construction updates with their customers.
        </p>
      </div>
      <div className=" absolute flex  gap-[128.56px]  ml-[46px] mt-[822px]">
        <Icons/>
        <p className="text-white font-sans text-[15px] font-[400] leading-[20px]">
          © Copyright NEXTPORT - All Rights Reserved
        </p>
      </div>
    </div>
  );
}

export default LeftSide;
