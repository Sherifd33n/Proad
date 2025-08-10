import React from "react";
import { blogs } from "../assets/assets";
import { useNavigate } from "react-router";
import { GoArrowRight } from "react-icons/go";

const Blog = () => {
  const navigate = useNavigate();

  return (
    <div className="text-center px-4 pt-[150px] py-[50px] sm:px-[30px] md:px-[80px] bg-[#F5F7FA]">
      {" "}
      <div>
        <p className="text-[16px] text-[#1A2B5F] bg-[#A3E635] font-bold w-[60px] mx-auto py-[7px] rounded-full -rotate-6 -mb-[10px]">
          Blog
        </p>
        <p className="text-[28px] md:text-[32px] font-bold text-[#1A2B5F] font-montserrat leading-[109%] relative z-20">
          Explore Our Blog
        </p>

        <p className="text-[18px] font-normal text-[#333333] mt-[8px]">
          Tips, tricks, and insights to help your team succeed.
        </p>
      </div>
      <div className="text-left flex flex-wrap gap-[20px] justify-center mt-[50px]">
        {blogs.map((item, id) => (
          <div
            key={id}
            className="w-[360px] md:w-[380px] rounded-[12px] bg-white">
            <img src={item.image} alt="" className="w-full rounded-t-[12px]" />
            <div className="p-[20px] flex flex-col gap-[20px]">
              <p className="bg-[#FF70A61A] rounded-[30px] text-[12px] font-medium text-[#FF70A6] py-[7px] px-[10px] w-[160px] text-center">{item.label}</p>
              <div className="flex flex-col gap-[4px]">
                <p className="text-[18px] font-bold text-[#1A2B5F] font-montserrat">{item.title}</p>
                <p className="text-[14px] font-normal text-[#333333]">{item.text}</p>
              </div>

              <button onClick={() => navigate(`/my-blog/${item._id}`)} className="flex gap-[5px] text-[14px] font-medium text-[#2EC4B6] items-center">
                Read More <GoArrowRight className="w-[24px] h-[24px] mt-1"/>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
