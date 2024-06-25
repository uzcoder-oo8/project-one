import React from "react";
import { Link } from "react-router-dom";
import { MdArrowDropDown } from "react-icons/md";
// Images import

import Logo from "../../assets/HomePageLogo.png";
import CTAButton from "../core/Home/Button";

export default function Navbar() {
  return (
    <div className="pt-[10px] pb-[10px]">
      <nav className="flex items-center justify-between">
        <Link to={"/"}>
          <img className="w-[128px] h-[118px]" src={Logo} alt="" />
        </Link>
        <ul className="flex gap-[30px]">
          <li>
            <Link className="text-white font-[500] text-[23px]" to={"/about"}>
              about us
            </Link>
          </li>
          <li>
            <Link className="text-white font-[500] text-[23px]" to={"/blogone"}>
              activities & events
            </Link>
          </li>
          <li className="flex">
            <Link className="text-white font-[500] text-[23px]" to={"/"}>
              lessons & academy
            </Link>
            <MdArrowDropDown className="text-white text-[40px]" />
          </li>
          <li>
            <Link className="text-white font-[500] text-[23px]" to={"/"}>
              find players
            </Link>
          </li>
          <li>
            <Link className="text-white font-[500] text-[23px]" to={"/"}>
              pro shop
            </Link>
          </li>
          <li className=" flex">
            <Link className="text-white font-[500] text-[23px]" to={"/"}>
              locations
            </Link>
            <MdArrowDropDown className="text-white text-[40px]" />
          </li>
          <li>
            <Link className="text-white font-[500] text-[23px]" to={"/book"}>
              contact us
            </Link>
          </li>
        </ul>
        <CTAButton
          children={"book now"}
          className=""
          active={true}
          linkto={"/book"}
        ></CTAButton>
      </nav>
    </div>
  );
}
