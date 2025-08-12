import React from "react";
import { assets } from "../assets/assets";

const Section2 = () => {
  return (
    <div className="text-center mt-[100px] mx-5 md:mx-[80px]" id="section2">
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

      <div className="mt-[45px] flex flex-col gap-[20px] w-full max-w-none">
        <div className="flex flex-col lg:flex-row gap-[20px] justify-center">
          <div className="bg-[#F5F7FA] rounded-[16px] p-[20px] gap-[20px] flex flex-col">
            <div className="flex flex-col gap-[4px] text-left">
              {" "}
              <p className="text-[18px] font-bold font-montserrat text-[#1A2B5F]">
                Task Management
              </p>
              <p className="text-[16px] font-normal text-[#333333]">
                Create, assign, and track tasks effortlessly with <br className="hidden md:block"/> our
                intuitive interface.
              </p>
            </div>

            <img src={assets.frame1} alt="" className="w-full"/>
          </div>

          <div className="bg-[#F5F7FA] rounded-[16px] p-[20px] gap-[20px] flex flex-col">
            <div className="flex flex-col gap-[4px] text-left">
              {" "}
              <p className="text-[18px] font-bold font-montserrat text-[#1A2B5F]">
                Timeline Views
              </p>
              <p className="text-[16px] font-normal text-[#333333]">
                Visualize project timelines with Gantt charts to <br  className="hidden md:block"/> stay on
                schedule.
              </p>
            </div>

            <img src={assets.frame2} alt=""  className="w-full"/>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-[20px] justify-center">
          <div className="bg-[#F5F7FA] rounded-[16px] p-[20px] gap-[20px] flex flex-col">
            <div className="flex flex-col gap-[4px] text-left">
              {" "}
              <p className="text-[18px] font-bold font-montserrat text-[#1A2B5F]">
                Team Collaboration
              </p>
              <p className="text-[16px] font-normal text-[#333333]">
                Real-time updates and comments for seamless <br  className="hidden md:block"/>
                teamwork.
              </p>
            </div>

            <img src={assets.frame3} alt=""  className="w-full"/>
          </div>

          <div className="bg-[#F5F7FA] rounded-[16px] p-[20px] gap-[20px] flex flex-col">
            <div className="flex flex-col gap-[4px] text-left">
              {" "}
              <p className="text-[18px] font-bold font-montserrat text-[#1A2B5F]">
                Integrations
              </p>
              <p className="text-[16px] font-normal text-[#333333]">
                Discover how to seamlessly integrate tools for <br  className="hidden md:block"/> enhanced
                collaboration and efficiency. schedule.
              </p>
            </div>

            <img src={assets.frame4} alt=""  className="w-full"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
