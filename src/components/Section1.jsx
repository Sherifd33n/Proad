import React from "react";
import { assets } from "../assets/assets";

const Section1 = () => {
  return (
    <div className="px-4 pt-[150px] sm:px-[30px] md:px-[80px] text-center bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#ecc9db] via-white to-slate-100">
      <div className="flex flex-col gap-[12px]">
        <div className="text-[40px] md:text-[48px] font-bold text-[#1A2B5F] leading-[130%]">
          <p className="z-20 relative font-montserrat">
            Organize, Track, <br /> and Succeed with
          </p>
          <p className="text-white bg-[#FF70A6] pt-[8px] pb-[12px]  w-[200px] md:w-[237px] mx-auto rounded-full -rotate-6 z-10 -mt-4">
            PROAD
          </p>
        </div>
        <p className="text-[18px] my-2 md:text-[20px] font-normal text-[#333333] lg:mx-[30%]">
          The ultimate project management tool for teams to collaborate and
          deliver on time.
        </p>
        <div className="flex flex-col md:flex-row mt-[15px] mx-auto items-center gap-[5px] md:mr-[100px] lg:mr-[250px]">
          <button className="text-[16px] text-white bg-[#2EC4B6] font-normal py-[12px] md:py-[15px] px-[23px] rounded-full">
            Start Free Trial
          </button>
          <img src={assets.vector} alt="" />
          <p className="text-[16px] font-medium text-[#333333 font-fuzzy">
            no credit required !
          </p>
        </div>

        <div className="mt-[40px]">
          <img src={assets.section1} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Section1;
