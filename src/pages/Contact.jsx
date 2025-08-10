import React from "react";
import { assets } from "../assets/assets";

const Contact = () => {
  return (
    <div className="text-center px-4 pt-[150px] py-[50px] sm:px-[30px] md:px-[80px] bg-[#F5F7FA]">
      {" "}
      <div>
        <p className="text-[16px] text-[#1A2B5F] bg-[#A3E635] font-bold w-[111px] mx-auto py-[7px] rounded-full -rotate-6 -mb-[10px]">
          Contact us
        </p>
        <p className="text-[28px] md:text-[32px] font-bold text-[#1A2B5F] font-montserrat leading-[109%] relative z-20">
          Get in Touch
        </p>

        <p className="text-[18px] font-normal text-[#333333] mt-[8px]">
          We’re here to help! Reach out with any questions or{" "}
          <br className="hidden md:block" /> feedback.
        </p>
      </div>
      <div>
        <form className="w-auto md:w-[600px] rounded-[12px] bg-white mx-auto text-left py-[24px] px-[20px] mt-[50px] gap-[35px] flex flex-col">
          <div className="flex flex-col gap-[5px]">
            <p className="text-[18px] font-semibold font-montserrat text-[#1A2B5F]">
              Name
            </p>
            <input
              type="name"
              required
              placeholder="Enter your name"
              className="text-[16px] font-normal text-[#333333] bg-[#F5F7FA] rounded-[8px] py-[10px] px-[10px] outline-none"
            />
          </div>
          <div className="flex flex-col gap-[5px]">
            <p className="text-[18px] font-semibold font-montserrat text-[#1A2B5F]">
              Email
            </p>
            <input
              type="email"
              required
              placeholder="Enter your email"
              className="text-[16px] font-normal text-[#333333] bg-[#F5F7FA] rounded-[10px] py-[8px] px-[10px] outline-none"
            />
          </div>

          <div className="flex flex-col gap-[5px]">
            <p className="text-[18px] font-semibold font-montserrat text-[#1A2B5F]">
              Message
            </p>
            <textarea
              type="name"
              required
              placeholder="How can we help you?"
              className="text-[16px] font-normal text-[#333333] bg-[#F5F7FA] rounded-[8px] py-[8px] px-[10px] outline-none h-[250px]"
            />
          </div>

          <button className="py-[10px] px-[20px] bg-[#2EC4B6] text-white rounded-[30px] text-[16px] font-normal hover:opacity-75 duration-300">
            Send Message
          </button>
        </form>
      </div>
      <div className="flex flex-col md:flex-row gap-[20px] mt-[30px] mx-auto justify-center items-center">
        <div className="flex flex-col w-[260px] gap-[10px] items-center bg-white rounded-[16px] p-[20px]">
          <img
            src={assets.contact2}
            alt=""
            className="h-[48px] w-[48px] object-cover"
          />
          <p className="text-[16px] font-montserrat text-[#1A2B5F] font-semibold">
            Email Us
          </p>
          <p className="text-[14px] font-normal text-[#333333]">
            support@proad.com
          </p>
        </div>

        <div className="flex flex-col w-[260px] gap-[10px] items-center bg-white rounded-[16px] p-[20px] ">
          <img
            src={assets.contact1}
            alt=""
            className="h-[48px] w-[48px] object-cover"
          />
          <p className="text-[16px] font-montserrat text-[#1A2B5F] font-semibold">
            Phone
          </p>
          <p className="text-[14px] font-normal text-[#333333]">
            +1 (800) 555-1234
          </p>
        </div>

        <div className="flex flex-col w-[260px] gap-[10px] items-center bg-white rounded-[16px] p-[20px] ">
          <img
            src={assets.contact3}
            alt=""
            className="h-[48px] w-[48px] object-cover"
          />
          <p className="text-[16px] font-montserrat text-[#1A2B5F] font-semibold">
            Follow us for updates
          </p>
          <p className="text-[14px] font-normal text-[#333333]">@proad</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
