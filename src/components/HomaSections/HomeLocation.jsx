import React from "react";
import { RiArrowRightSLine } from "react-icons/ri";

import HighlightText from "../core/Home/HighlightText";
import CTAButton from "../core/Home/Button";

export default function HomeLocation() {
  return (
    <div>
      <h1 className="uppercase text-center">
        <HighlightText
          text={"location"}
          textWeight={"font-[500]"}
          textsize={"text-[80px]"}
        />
      </h1>
      <div className="location_box">
        <div className="flex gap-10 ml-20 mt-[570px]">
          <CTAButton children={"explore more"} active={false} />
          <CTAButton children={"get directions"} active={true} />
        </div>
      </div>
    </div>
  );
}
