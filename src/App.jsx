import React from "react";
import logo from "./assets/logo.svg";
import menu from "./assets/menu.svg";
import {
  ChevronLeft,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
} from "react-feather";

export default function App() {
  const toggleMenuBar = () => {
    if (innerWidth < 768) {
      let menuBar = document.getElementById("menu_bar");
      let navbar = document.getElementById("navbar");

      if (menuBar && navbar) {
        if (menuBar.style.display === "none") {
          menuBar.style.display = "flex";
          menuBar.style.backgroundColor = "#ef2828ab";
        } else {
          menuBar.style.display = "none";
          menuBar.style.backgroundColor = "transparent";
        }
      }
    }
  };
  return (
    <div className="h-screen w-full">
      {/* Navbar */}
      <div
        className="flex justify-between m-6 border-b items-center relative "
        id="navbar"
      >
        <a href="">
          <img src={logo} alt="Logo" className="w-8 h-8 pb-2" />
        </a>
        <div
          className="text-gray-200 md:space-x-8 md:text-xs text-base md:flex hidden flex-col md:flex-row md:relative absolute right-0 top-8 md:py-0 pt-5 pb-2 md:top-0 space-y-3 md:space-y-0 items-center w-full md:w-auto z-20 rounded-b"
          id="menu_bar"
        >
          <a href="" className="border-b-2 pb-3.5 text-white font-medium">
            Home
          </a>
          <a href="" className="pb-3.5">
            Menu
          </a>
          <a href="" className="pb-3.5">
            Services
          </a>
          <a href="" className="pb-3.5">
            Map
          </a>
          <a href="" className="pb-3.5">
            About
          </a>
        </div>
        <img
          src={menu}
          alt="Menu"
          className="w-6 cursor-pointer"
          onClick={toggleMenuBar}
        />
      </div>

      {/* Body */}
      <div className="pt-5 relative overflow-hidden h-full w-full">
        <div className="text-sm text-white font-light md:w-2/6 w-full px-6">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit
        </div>
        <img
          src="/plate2.png"
          alt="plate1"
          className="absolute md:-left-20 -left-28 w-[42vh] md:top-[24%] top-[18%] -z-10"
        />
        <img
          src="/number.png"
          alt="number"
          className="absolute md:right-20 right-14 md:w-[40vh] w-[36vh] md:top-[28%] top-[64%] -z-10"
        />
        <img
          src="/plate1.png"
          alt="plate2"
          className="absolute md:-right-24 -right-36 md:w-[42vh] w-[38vh] md:top-1/4 top-[60%] -z-10"
        />
        <div className="text-white px-6 md:mt-[18rem] mt-[22rem] z-20">
          <div className="uppercase text-xs text-gray-200 font-semibold">
            LOREM IPSUM DOLOR SIT AMET, CONSETETUR.
          </div>
          <div className="mt-2 font-extrabold text-5xl text-gray-200">
            Lorem Ipsum
          </div>
        </div>
      </div>
      {/* Footer */}
      <div className="flex md:flex-row flex-col justify-between px-6 pb-10 items-center w-full md:mt-0 mt-10">
        <div className="flex justify-between md:w-[70%] w-full items-center">
          <div className="md:w-[65%] w-[50%]">
            <div className="flex border-b text-gray-300 text-xs items-center relative">
              <p className="cursor-pointer pb-2.5 pr-5 text-sm text-white">
                01
              </p>
              <p className="cursor-pointer pb-2.5 pr-5">02</p>
              <p className="cursor-pointer pb-2.5 pr-5">03</p>
              <p className="cursor-pointer pb-2.5 pr-5">04</p>
              <p className="cursor-pointer pb-2.5">05</p>
              <span className="absolute bottom-0 border-b w-[21%] left-0"></span>
            </div>
          </div>
          <div className="flex items-center">
            <div className="arrow cursor-pointer">
              <span className="circle"></span>
              <ChevronLeft color="#000" size={18} />
              <span className="back"></span>
            </div>
            <div className="arrow cursor-pointer rotate-180 ml-6">
              <span className="circle"></span>
              <ChevronLeft color="#000" size={18} />
              <span className="back"></span>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-5 media md:mt-0 mt-8">
          <div className="border-[1.6px] border-black rounded-full p-1 flex justify-center items-center cursor-pointer">
            <Instagram size={20} color="#fff" />
          </div>
          <div className="border-[1.6px] border-black rounded-full p-1 flex justify-center items-center cursor-pointer">
            <Twitter size={20} color="#fff" />
          </div>
          <div className="border-[1.6px] border-black rounded-full p-1 flex justify-center items-center cursor-pointer">
            <Facebook size={20} color="#fff" />
          </div>
          <div className="border-[1.6px] border-black rounded-full p-1 flex justify-center items-center cursor-pointer">
            <Linkedin size={20} color="#fff" />
          </div>
        </div>
      </div>
    </div>
  );
}
