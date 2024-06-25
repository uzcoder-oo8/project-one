import React from "react";
import AsidaImages from "../../assets/HomePageAsidaImages.png";
import HighlightText from "../core/Home/HighlightText";
import CTAButton from "../core/Home/Button";

export default function HomeAsida() {
  return (
    <div className="pt-[99px] pb-[100px] flex">
      <img className="w-[1000px] ml-[20px]" src={AsidaImages} alt="" />
      <div className="w-[500px]  bg-white rounded-[48px]">
        <h4 className="w-[488px] font-[400] text-[60px] text-center mt-[70px]">
          WELCOME TO <HighlightText text={"MILO’S"} /> PADEL
        </h4>
        <p className="w-[350px] m-auto text-left mt-16">
          We are thrilled to bring one of the world’s fastest-growing sports to
          Bali. Whether you are an experienced Padel player or playing for the
          first time, we look forward to welcoming you to Milo’s Padel – Bali’s
          No.1 Padel Club.
        </p>
        <div className="w-[186px] mt-[60px] ml-[100px]">
          <CTAButton children={"READ MORE"} active={true} linkto={"/book"} />
        </div>
      </div>
    </div>
  );
}
