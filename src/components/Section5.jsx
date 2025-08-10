import React from "react";
import { assets, testimonials } from "../assets/assets";

const Section5 = () => {
  return (
    <div className="text-center mt-[50px] md:mt-[100px] py-[80px] bg-[#F5F7FA] px-5">
      <div>
        <p className="text-[16px] text-[#1A2B5F] bg-[#A3E635] font-bold w-[126px] mx-auto py-[7px] rounded-full -rotate-6 -mb-[10px]">
          Testimonials
        </p>
        <p className="text-[28px] md:text-[32px] font-bold text-[#1A2B5F] font-montserrat leading-[109%] relative z-20">
          What Our Users Are Saying
        </p>
      </div>

      <div className="text-left mt-[50px]">
        <div className="flex flex-wrap justify-center gap-[20px]">
          {testimonials.map((item, id) => (
            <div className="w-full mx-2 md:mx-0 md:w-[342px] bg-white rounded-[16px] p-[20px]">
              <div className="flex items-center justify-between">
                <div className="flex gap-[10px] items-center">
                  <img src={item.image} alt="" className="w-[48px] h-[48px]" />
                  <div className="text-[#1A2B5F font-montserrat">
                    <p className="text-[14px] font-bold">{item.name}</p>
                    <p className="text-[12px] font-medium">{item.role}</p>
                  </div>
                </div>
                <img src={assets.frame91} alt="" className="w-[48px] h-[48px]"/>
              </div>

              <p className="text-[14px] font-normal text-[#333333] mt-[20px]">{item.quote}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section5;
