import React from "react";
import { pricing } from "../assets/assets";
import { TiTick } from "react-icons/ti";

const Section4 = () => {
  return (
    <div className="text-center mt-[30px] md:mt-[80px] py-[80px]" id="section4">
      <div>
        <p className="text-[16px] text-[#1A2B5F] bg-[#A3E635] font-bold w-[80px] mx-auto py-[7px] rounded-full -rotate-6 -mb-[10px]">
          Pricing
        </p>
        <p className="text-[28px] md:text-[32px] font-bold text-[#1A2B5F] font-montserrat leading-[109%] relative z-20">
          Flexible Plans for Every <br /> Team
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-[40px] md:gap-[20px] text-left mt-[60px] md:mt-[100px] mx-5">
        {pricing.map((item, id) => (
          <div
            key={id}
            className={`bg-[#F5F7FA] rounded-[16px] p-[20px] ${
              id === 1 ? "border border-[#FF70A6] pt-[30px]" : ""
            }`}>
            {id === 1 && (
              <div className="">
                <p className="text-[16px] text-center text-[#1A2B5F] bg-[#FF70A6] font-bold w-[132px] mx-auto py-[7px] rounded-full -rotate-6 -mt-[50px]">
                  Most Popular
                </p>
              </div>
            )}

            <div className="flex flex-col gap-[50px]">
              <div className="flex flex-col gap-[30px]">
                <p className="text-[18px] font-bold text-[#1A2B5F] font-montserrat">
                  {item.type}
                </p>
                <div className="flex flex-col gap-[20px]">
                  <p className="text-[24px] font-bold text-[#1A2B5F] font-montserrat">
                    ${item.price}/month
                  </p>

                  <div className="flex flex-col gap-[10px]">
                    <p className="text-[16px] font-semibold text-[#333333]">
                      What's included:
                    </p>
                    <div className="flex flex-col gap-[10px]">
                      <p className="flex items-center gap-[5px]">
                        <TiTick className="text-[#2EC4B6] h-[18px] w-[18px]" />
                        {item.package1}
                      </p>
                      <p className="flex items-center gap-[5px]">
                        <TiTick className="text-[#2EC4B6] h-[18px] w-[18px]" />
                        {item.package2}
                      </p>
                      <p className="flex items-center gap-[5px]">
                        <TiTick className="text-[#2EC4B6] h-[18px] w-[18px]" />
                        {item.package3}
                      </p>
                    </div>
                  </div>
                </div>
              </div>{" "}
              <button className="bg-[#2EC4B6] w-[290px] rounded-full text-white text-[16px] font-normal py-[11px]">
                Get Started
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section4;
