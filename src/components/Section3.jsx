import React from "react";
import { assets } from "../assets/assets";

const Section3 = () => {
  return (
    <div className="text-center mt-[100px] bg-[#F5F7FA] py-[80px]">
      <div>
        <p className="text-[16px] text-[#1A2B5F] bg-[#A3E635] font-bold w-[134px] mx-auto py-[7px] rounded-full -rotate-6 -mb-[10px]">
          How It Works
        </p>
        <p className="text-[28px] md:text-[32px] font-bold text-[#1A2B5F] font-montserrat leading-[109%] relative z-20">
          Get Started in 3 Simple <br /> Steps
        </p>
      </div>

      <div className="text-left flex justify-center items-center mt-[30px] md:mt-[60px]">
        <div className="md:hidden">
          <img
            src={assets.frame58}
            alt=""
            className="mx-[20px]"
          />
        </div>
        <div className="flex flex-col gap-[70px] md:gap-[25px] ">
          <div className="leading-[100%] gap-[4px] flex flex-col">
            <p className="text-[14px] font-semibold text-[#FF70A6]">STEP 1</p>
            <p className="text-[18px] font-bold text-[#1A2B5F]">
              Set Up Your Project
            </p>
            <p className="text-[16px] font-normal text-[#333333]">
              Get started in minutes with our intuitive <br /> setup process.
            </p>
          </div>
          <div className="block md:hidden leading-[100%] gap-[4px] flex-col my-5">
            <p className="text-[14px] font-semibold text-[#FF70A6]">STEP 2</p>
            <p className="text-[18px] font-bold text-[#1A2B5F]">
              Assign Tasks & Collaborate
            </p>
            <p className="text-[16px] font-normal text-[#333333]">
              Assign tasks to your team and <br /> collaborate in real time.
            </p>
          </div>
          <div className="leading-[100%] gap-[4px] flex flex-col mt-0 md:mt-[250px]">
            <p className="text-[14px] font-semibold text-[#FF70A6]">STEP 3</p>
            <p className="text-[18px] font-bold text-[#1A2B5F]">
              Track & Deliver
            </p>
            <p className="text-[16px] font-normal text-[#333333]">
              Monitor progress and deliver projects <br />
              on time, every time.
            </p>
          </div>
        </div>

        <div>
          <img
            src={assets.frame58}
            alt=""
            className="mx-[20px] hidden md:block"
          />
        </div>

        <div className="mt-[75px] hidden md:block">
          <p className="text-[14px] font-semibold text-[#FF70A6]">STEP 2</p>
          <p className="text-[18px] font-bold text-[#1A2B5F]">
            Assign Tasks & Collaborate
          </p>
          <p className="text-[16px] font-normal text-[#333333]">
            Assign tasks to your team and <br /> collaborate in real time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section3;
