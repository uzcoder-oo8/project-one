import { FaFacebookF } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";

import Images1 from "../../assets/inner1.png";
import Images2 from "../../assets/Inner2.png";
import Images3 from "../../assets/Inner3.png";
import Images4 from "../../assets/Inner4.png";
import Images5 from "../../assets/Inner5.png";
import Images6 from "../../assets/Inner6.png";

import React from "react";

export default function HomeInner() {
  return (
    <div className="pt-[80px]">
      <h1 className="text-center text-[75px] font-[400]">Let's Get Social</h1>
      <div className="flex gap-[50px] text-[30px] text-center w-[180px] m-auto mt-[20px] pb-[20px]">
        <FaFacebookF />
        <FaTiktok />
        <BsInstagram />
      </div>
      <ul className="flex gap-[10px] ">
        <li className="w-[540px] hover:scale-95">
          <img src={Images1} className="w-[540px]" alt="" />
        </li>
        <li className="w-[540px] hover:scale-95">
          <img src={Images2} className="w-[540px]" alt="" />
        </li>
        <li className="w-[540px] hover:scale-95">
          <img src={Images3} className="w-[540px]" alt="" />
        </li>
      </ul>
      <ul className="flex mt-[10px] gap-[10px]">
        <li className="w-[540px] hover:scale-95">
          <img src={Images4} className="w-[540px]" alt="" />
        </li>
        <li className="w-[540px] hover:scale-95">
          <img src={Images5} className="w-[540px]" alt="" />
        </li>
        <li className="w-[540px] hover:scale-95">
          <img src={Images6} className="w-[540px]" alt="" />
        </li>
      </ul>
    </div>
  );
}
