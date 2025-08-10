import React from "react";
import { assets } from "../assets/assets";

const Section2 = () => {
  return (
    <div className="text-center mt-[100px] mx-5" id="section2">
      <div>
        <p className="text-[16px] text-[#1A2B5F] bg-[#A3E635] font-bold w-[94px] mx-auto py-[7px] rounded-full -rotate-6 -mb-[10px]">
          Features
        </p>
        <p className="text-[28px] md:text-[32px] font-bold text-[#1A2B5F] font-montserrat leading-[109%] relative z-20">
          All the Tools Your Team <br />
          Needs
        </p>
        <p className="text-[16px] md:text-[18px] text-[#333333] font-normal ">
          Streamline your workflow with powerful features
        </p>
      </div>

      <div className="flex flex-col justify-center gap-[20px] mt-[45px]">
        <div className="flex flex-col lg:flex-row mx-auto gap-[20px]">
          <img src={assets.frame53} alt="" />
          <img src={assets.frame54} alt="" />
        </div>
        <div className="flex flex-col lg:flex-row mx-auto gap-[20px]">
          <img src={assets.frame56} alt="" />
          <img src={assets.frame55} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Section2;
