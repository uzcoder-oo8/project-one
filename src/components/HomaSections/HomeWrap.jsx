import React from "react";

import HomeWrapImages from "../../assets/HomeWrapImages.png";
import HomeWrapImages1 from "../../assets/HomeWrapImages1.png";
import HighlightText from "../core/Home/HighlightText";
import CTAButton from "../core/Home/Button";

export default function HomeWrap() {
  return (
    <div>
      <ul className="flex gap-[30px] pt-[76px] mb-[76px]">
        <li>
          <img className="ml-[5px]" src={HomeWrapImages} alt={HomeWrapImages} />
          <h5 className="w-[400px] text-[35px] font-[700] text-center m-auto mt-[25px]">
            "Fantastic experience!" <HighlightText text={"- Alex"} />
          </h5>
        </li>
        <li>
          <img src={HomeWrapImages1} alt={HomeWrapImages1} />
        </li>
        <li className="-mt-[50px]">
          <h3 className="w-[500px] m-auto text-center text-[80px] font-[400] uppercase">
            Join our <HighlightText text={"community"} />
          </h3>
          <p className="w-[600px] m-auto text-[20px]">
            Become a part of the Milo’s Padel community and enhance your Padel
            journey surrounded by the beauty of Bali.
          </p>
          <p className="w-[600px] m-auto text-[20px] mt-[20px]">
            Connect with fellow enthusiasts, from beginners to seasoned players,
            sharing a common love for this thrilling sport. As a member, you’ll
            enjoy exclusive access to events, tournaments, and social gatherings
            to make new connections.
          </p>
          <p className="w-[600px] m-auto text-[20px] mt-[20px]">
            Select a community below and be part of something extraordinary!{" "}
            <br /> 1. Download our app <br /> 2.Create a match <br /> 3. Find a
            match partner
          </p>
        </li>
      </ul>
      <div className="flex w-[1100px] m-auto gap-[45px] mt-[50px] pb-[76px] ">
        <CTAButton children={"pererenan"} active={true} />
        <CTAButton children={"canggu"} active={true} />
        <CTAButton children={"ubud"} active={true} />
        <CTAButton children={"Kerobokan"} active={true} />
        <CTAButton children={"seseh"} active={true} />
        <CTAButton children={"Kedungu"} active={true} />
      </div>
    </div>
  );
}
