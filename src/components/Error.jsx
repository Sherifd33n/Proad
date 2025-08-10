import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="text-center px-4 pt-[150px] py-[50px] sm:px-[30px] md:px-[80px] bg-[#F5F7FA]">
      {" "}
      <div>
        <p className="text-[38px] md:text-[48px] text-white bg-[#FF70A6] font-bold w-[160px]  md:w-[229px] mx-auto py-[7px] rounded-full -rotate-6 -mb-[30px] z-20 relative">
          ERROR
        </p>
        <p className="text-[100px] md:text-[200px] font-bold text-[#1A2B5F] font-montserrat leading-[100%]">
          404
        </p>
      </div>
      <p className="text-[20px] font-normal text-[#333333]">
        We are sorry we can’t find the page you are{" "}
        <br className="hidden md:block" /> looking for.
      </p>
      <div className="mt-[30px]">
          <Link
        to="/"
        className="mt-6 px-6 py-3 bg-[#2EC4B6] text-white shadow hover:bg-[#28b1a4] transition rounded-[30px]">
        Go Back Home
      </Link> 
      </div>
   
    </div>
  );
};

export default Error;
