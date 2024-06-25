import React from "react";
import logo from "../../assets/HomePageLogo.png";
import images from "../../assets/10518924 1.png";
import { Link } from "react-router-dom";

import { FaFacebookF } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";

import CTAButton from "../core/Home/Button";

export default function Footer() {
  return (
    <div className="">
      <div className="flex gap-[30px]">
        <li className="pt-[76px] pl-[200px]">
          <Link>
            <img src={logo} alt="" />
          </Link>
          <p className="text-white font-[400] text-center -ml-[50px]">
            Come & Play at Milo’s Padel <br /> Open every day from 7am – 12am
          </p>
        </li>
        <li className="pt-[76px] ml-[100px]">
          <h4 className="text-[#FFE96F] font-[500] text-[28px]">download</h4>
          <div className="flex flex-col">
            <Link className="text-[#ffff]">Android App</Link>
            <Link className="text-[#ffff]">IOS App</Link>
          </div>
          <h4 className="text-[#FFE96F] font-[500] text-[28px] mt-[30px]">
            company
          </h4>
          <div className="flex flex-col">
            <Link className="text-[#ffff]">About Us</Link>
            <Link className="text-[#ffff]">Contact us</Link>
          </div>
        </li>
        <li className="pt-[76px] ml-[100px]">
          <h4 className="text-[#FFE96F] font-[500] text-[28px]">locations</h4>
          <div className="flex flex-col">
            <Link className="text-[#ffff]">Pererenan</Link>
          </div>
          <h4 className="text-[#FFE96F] font-[500] text-[28px] mt-[30px]">
            others
          </h4>
          <div className="flex flex-col">
            <Link className="text-[#ffff]">Activities & Events</Link>
            <Link className="text-[#ffff]">Lessons & Academy</Link>
            <Link className="text-[#ffff]">Pro Shop</Link>
          </div>
        </li>
        <li className="pt-[76px] ml-[100px]">
          <h4 className="text-[#FFE96F] font-[500] text-[28px]">
            get in touch
          </h4>
          <div className="flex gap-[50px] text-[30px] text-center w-[180px] m-auto mt-[20px] pb-[20px] text-[#fff]">
            <FaFacebookF />
            <FaTiktok />
            <BsInstagram />
          </div>
        </li>
        <li className="pt-[76px] ml-[100px]">
          <CTAButton children={"book now"} active={true} linkto={"/book"} />
        </li>
      </div>
      <img src={images} className="z-10 ml-[1250px] " alt="" />
      <div className="w-full h-[2px] bg-[#FFE96F]"></div>
      <p className="text-center text-[#fff] mt-2 pb-2">
        2023 Milo’s Padel. All rights reserved.
        
      </p>
    </div>
  );
}
