import React from "react";
import HighlightText from "../core/Home/HighlightText";
import CTAButton from "../core/Home/Button";

export default function HomeHero() {
  return (
    <div>
      <h1 className="text-[73px] text-white font-[500]">
        First{" "}
        <HighlightText
          text={"Padel Club"}
          textsize={"text-[73px]"}
          textWeight={"font-[500]"}
        />{" "}
        in Indonesia
      </h1>
      <div className=" w-[300px] m-auto">
        <CTAButton
          children={"Book your court"}
          active={true}
          linkto={"/book"}
        />
      </div>
    </div>
  );
}
