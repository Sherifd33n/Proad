import React from "react";
import Accordion from "./Accordion";

const Section6 = () => {
  return (
    <div className="text-center py-[80px] px-5 md:px-[50px] lg:px-[150px]">
      <div>
        <p className="text-[16px] text-[#1A2B5F] bg-[#A3E635] font-bold w-[64px] mx-auto py-[7px] rounded-full -rotate-6 -mb-[10px]">
          FAQs
        </p>
        <p className="text-[28px] md:text-[32px] font-bold text-[#1A2B5F] font-montserrat leading-[109%] relative z-20">
        Got Questions? We’ve Got <br/> Answers!
        </p>
      </div>

      <Accordion/>
    </div>
  );
};

export default Section6;
