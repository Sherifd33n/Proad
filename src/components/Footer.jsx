import React from "react";
import { assets } from "../assets/assets";
import { NavLink } from "react-router-dom";
import {
  BiLogoFacebookCircle,
  BiLogoInstagram,
  BiLogoLinkedinSquare,
} from "react-icons/bi";
import { BsTwitterX } from "react-icons/bs";

const Footer = () => {
  return (
    <div>
      <div className="px-4 pt-[30px] sm:px-[30px] md:px-[80px] lg:px-[150px] flex flex-col gap-[30px] md:flex-row justify-between">
        <div>
          <div className="flex gap-[5px] items-center text-[16px] font-bold text-[#1A2B5F] font-montserrat">
            <img src={assets.logo} alt="" /> PROAD
          </div>
        </div>

        <div>
          <p className="text-[16px] font-semibold text-[#333333]">Menu</p>
          <ul className="text-[16px] font-normal text-[#929292] flex flex-col gap-[15px] lg:gap-[20px] mt-[20px]">
            <NavLink to="/">
              <li className="hover:text-[#1A2B5F]">Home</li>
            </NavLink>
            <NavLink to="/">
              <li className="hover:text-[#1A2B5F]">Features</li>
            </NavLink>
            <NavLink to="/">
              <li className="hover:text-[#1A2B5F]">Pricing</li>
            </NavLink>
            <NavLink to="/">
              <li className="hover:text-[#1A2B5F]">Blog</li>
            </NavLink>
            <NavLink to="/">
              <li className="hover:text-[#1A2B5F]">Contact</li>
            </NavLink>
          </ul>
        </div>
        <div>
          <p className="text-[16px] font-semibold text-[#333333]">Legal</p>
          <ul className="text-[16px] font-normal text-[#929292] flex flex-col gap-[15px] lg:gap-[20px] mt-[20px]">
            <NavLink to="/">
              <li className="hover:text-[#1A2B5F]">Privacy Policy</li>
            </NavLink>
            <NavLink to="/">
              <li className="hover:text-[#1A2B5F]">Terms of Service</li>
            </NavLink>
          </ul>
        </div>
        <div>
          <p className="text-[16px] font-semibold text-[#333333]">
            Social Media
          </p>
          <ul className="flex gap-[6px] mt-[20px] items-center">
            <NavLink to="">
              <li>
                <BsTwitterX className="text-[20px] text-[#1A2B5F] hover:scale-105 duration-200" />
              </li>{" "}
            </NavLink>

            <NavLink to="">
              {" "}
              <li>
                <BiLogoInstagram className="text-[24px] text-[#1A2B5F] hover:scale-105 duration-200" />
              </li>
            </NavLink>

            <NavLink to="">
              <li>
                <BiLogoFacebookCircle className="text-[24px] text-[#1A2B5F] hover:scale-105 duration-200" />
              </li>
            </NavLink>

            <NavLink to="">
              <li>
                <BiLogoLinkedinSquare className="text-[24px] text-[#1A2B5F] hover:scale-105 duration-200" />
              </li>
            </NavLink>
          </ul>
        </div>
      </div>{" "}
      <p className="text-[16px] font-medium text-[#333333] text-center mt-[50px] mb-5">
        Copyright @2025 PROAD. All rights reserved{" "}
      </p>
    </div>
  );
};

export default Footer;
