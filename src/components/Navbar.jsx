import React, { useState } from "react";
import { assets } from "../assets/assets";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { IoMdClose, IoMdMenu } from "react-icons/io";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  let Links = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Blog",
      link: "/blog",
    },
    {
      name: "Contact",
      link: "/contact",
    },
    {
      name: "Login",
      link: "/login",
    },
    {
      name: "Sign up",
      link: "/sign-up",
    },
  ];

  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleNavClick = (id) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        scrollToSection(id);
      }, 100);
    } else {
      scrollToSection(id);
    }
  };

  return (
    <div className="px-4 pt-[15px] md:pt-[20px] sm:px-[30px] md:px-[80px] bg-slate-50  w-full z-50 py-2 flex justify-between items-center">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-[50px]">
          <div className="flex gap-[5px] items-center text-[16px] font-bold text-[#1A2B5F] font-montserrat">
            <img src={assets.logo} alt="" /> PROAD
          </div>

          <ul className="hidden items-center gap-[20px] lg:flex">
            <NavLink to="/">
              <li className="text-[16px] font-semibold text-[#333333]">Home</li>
              <hr className="h-[8px] w-full bg-[#A3E635] mx-auto mt-[-10px] hidden" />
            </NavLink>

            <div>
              <li
                className="text-[16px] font-semibold text-[#333333] cursor-pointer"
                onClick={() => handleNavClick("section2")}>
                Features
              </li>
              <hr className="h-[8px] w-full bg-[#A3E635] mx-auto mt-[-10px] hidden" />
            </div>

            <div>
              {" "}
              <li
                className="text-[16px] font-semibold text-[#333333] cursor-pointer"
                onClick={() => handleNavClick("section4")}>
                Pricing
              </li>
              <hr className="h-[8px] w-full bg-[#A3E635] mx-auto mt-[-10px] hidden" />
            </div>

            <NavLink to="/blog">
              <li className="text-[16px] font-semibold text-[#333333]">Blog</li>
              <hr className="h-[8px] w-full bg-[#A3E635] mx-auto mt-[-10px] hidden" />
            </NavLink>

            <NavLink to="/contact">
              <li className="text-[16px] font-semibold text-[#333333]">
                Contact
              </li>
              <hr className="h-[8px] w-full bg-[#A3E635] mx-auto mt-[-10px] hidden" />
            </NavLink>
          </ul>

          {isMenuOpen && (
            <ul className="lg:hidden bg-gray-300 h-screen w-full text-center mx-auto z-50 top-[55px] left-0 right-0 fixed py-[30px] flex flex-col gap-[20px] uppercase ">
              {Links.map((link) => (
                <NavLink
                  to={link.link}
                    onClick={() => setIsMenuOpen(false)}
                  className=" w-[80px] mx-auto hover:scale-105 duration-200">
                  <li>{link.name}</li>
                </NavLink>
              ))}
            </ul>
          )}
        </div>
        <div className="hidden lg:flex items-center gap-[30px]">
          <NavLink
            to="/login"
            className="text-[16px] font-medium text-[#333333]">
            Login
          </NavLink>
          <NavLink
            to="/sign-up"
            className="text-[16px] font-medium text-white bg-[#2EC4B6] py-[10px] px-[20px] rounded-[30px] hover:bg-white hover:text-[#2EC4B6] duration-300 transition-all">
            Sign up
          </NavLink>
        </div>{" "}
        <div className="lg:hidden">
          {isMenuOpen ? (
            <IoMdClose
              className="h-[32px] w-[32px] cursor-pointer hover:scale-105 duration-200"
              onClick={() => setIsMenuOpen(false)}
            />
          ) : (
            <IoMdMenu
              className="h-[32px] w-[32px] cursor-pointer hover:scale-105 duration-200"
              onClick={() => setIsMenuOpen(true)}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
