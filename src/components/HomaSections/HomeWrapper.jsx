import React from "react";
import HighlightText from "../core/Home/HighlightText";
import HomeWrapperImage from "../../assets/HomeWrapperImages1.png";

export default function HomeWrapper() {
  return (
    <div className="pt-40">
      <h5 className="text-center text-[90px]">
        <HighlightText text={"HOW TO"} textsize={""} />
      </h5>
      <h6 className="text-[38px] text-center font-[700] ">book your court</h6>
      <ul className="flex gap-[200px] mt-[30px]">
        <li>
          <img className="w-[600px]" src={HomeWrapperImage} alt="" />
        </li>
        <li className="w-[600px] bg-[#FFE96F] rounded-[41px]">
          <h4 className="text-center font-[700] text-[42px] mt-[100px]">
            download our app
          </h4>
          <p className="font-[400] text-[26px] text-center">
            For faster booking & real-time schedule
          </p>
          <button className="google-play m-auto block mt-[100px] hover:scale-95"></button>
          <button className="app-store m-auto block mt-10 hover:scale-95"></button>
        </li>
      </ul>
    </div>
  );
}
