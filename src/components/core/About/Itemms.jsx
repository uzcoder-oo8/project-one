import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { AiOutlineArrowLeft } from "react-icons/ai";

import HighlightText from "../Home/HighlightText";
import Images1 from "../../../assets/8bc617ffa4 1.png";
import Images2 from "../../../assets/8feca7225e 1.png";
import Images3 from "../../../assets/c1463f346d 1.png";
import CTAButton from "../Home/Button";

export default function Itemms() {
  return (
    <>
      <h4 className="text-center text-[80px] font-[400] pt-20">
        <HighlightText text={"Sport"} />
      </h4>
      <h4 className="text-[#262626] text-center text-[35px] font-[500]">
        Article{" "}
      </h4>
      <ul className="flex gap-[50px] w-[1450px] m-auto mt-[50px]">
        <li className=" w-[450px] hover:scale-95">
          <img src={Images1} alt="" />
          <div className="flex justify-between mt-[30px] mb-[30px]">
            <p>Jake Will.</p>
            <p>04 June 2023</p>
          </div>
          <h4 className="text-[#262626] font-[500] text-[22px]">
            5 Exercises Basketball Players Should Be Using To Develop Strength
          </h4>
          <p className="mt-[20px] text-[#696868] font-[400]">
            This article was written by Jake Willhoite from Healthlisted.com
            Strength in basketball isn’t all about a massive body mass or ripped
            muscles.
          </p>
        </li>
        <li className=" w-[450px] hover:scale-95">
          <img src={Images2} alt="" />
          <div className="flex justify-between mt-[30px] mb-[30px]">
            <p>Foxi.zacon</p>
            <p>04 June 2023</p>
          </div>
          <h4 className="text-[#262626] font-[500] text-[22px]">
            Golden Knights out to fulfill owner's quest to win Stanley Cup in
            6th year
          </h4>
          <p className="mt-[20px] text-[#696868] font-[400]">
            The Vegas Golden Knights will play the Florida Panthers in the
            Stanley Cup Final beginning Saturday.
          </p>
        </li>
        <li className=" w-[450px] hover:scale-95">
          <img src={Images3} alt="" />
          <div className="flex justify-between mt-[30px] mb-[30px]">
            <p>Bong Lozada </p>
            <p>04 June 2023</p>
          </div>
          <h4 className="text-[#262626] font-[500] text-[22px]">
            ‘Outdoor’ Badminton Gets Support From Local Federation
          </h4>
          <p className="mt-[20px] text-[#696868] font-[400]">
            The Badminton World Federation is developing Air Badminton and the
            country’s governing body, Philippine Badminton Association.
          </p>
        </li>
      </ul>
      <div className="flex m-auto w-[100px] mt-[50px] gap-5 mb-[350px]">
        <CTAButton children={<AiOutlineArrowLeft />} active={false} />
        <CTAButton children={<AiOutlineArrowRight />} active={true} />
      </div>
    </>
  );
}
