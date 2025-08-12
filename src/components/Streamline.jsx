import React from "react";
import { assets } from "../assets/assets";

const Streamline = () => {
  return (
    <div className="bg-[#1A2B5F] py-[30px] px-3 md:px-[50px] lg:px-[150px] flex justify-between items-center">
      <div className="flex flex-col gap-[20px]">
        <p className="text-[28px] md:text-[30px] font-bold font-montserrat text-white pr-0 lg:pr-[50px] xl:pr-[350px]">
          Ready to streamline your projects? Start your free trial today!
        </p>
        <div>
          <button className="text-[16px] font-normal text-white bg-[#2EC4B6] py-[10px] px-[20px] rounded-[30px] hover:opacity-60 duration-200">
            Start Free Trial
          </button>
        </div>
      </div>
      <div className="hidden lg:block">
        <img src={assets.frame} alt="" />
      </div>
    </div>
  );
};

export default Streamline;
