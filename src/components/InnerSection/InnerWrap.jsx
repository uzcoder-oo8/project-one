import { AiOutlineArrowRight } from "react-icons/ai";
import { AiOutlineArrowLeft } from "react-icons/ai";
import React from "react";
import Images from "../../assets/Group 61.png";
import CTAButton from "../core/Home/Button";

export default function AboutWrap() {
  return (
    <div>
      <div className="w-full h-full aboutwrap">
        <li className="list-none mt-[50px] hover:scale-90">
          <img
            className="w-[1300px] m-auto relative -top-[300px]"
            src={Images}
            alt=""
          />
        </li>

        <h4 className="font-[500] text-[48px] text-center -mt-48 mb-12">
          WHAT PEOPLE SAY
        </h4>
        <ul className="flex gap-[55px] mb-48 w-[1470px] m-auto">
          <li className="w-[450px] bg-white rounded-lg hover:scale-90">
            <h5 className=" text-center  mt-[53px]">Jake Will.</h5>
            <p className=" mb-5 w-[400px] m-auto mt-[20px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
          </li>
          <li className="w-[450px] bg-white rounded-lg hover:scale-90">
            <h5 className=" text-center  mt-[53px]">Jake Will.</h5>
            <p className="  mb-5 w-[400px] m-auto mt-[20px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
          </li>{" "}
          <li className="w-[450px] bg-white rounded-lg hover:scale-90">
            <h5 className=" text-center  mt-[53px]">Jake Will.</h5>
            <p className="  mb-5 w-[400px] m-auto mt-[20px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
          </li>
        </ul>
        <div className="flex m-auto w-[100px] -mt-[80px] gap-5 pb-[20px]">
          <CTAButton children={<AiOutlineArrowLeft />} active={false} />
          <CTAButton children={<AiOutlineArrowRight />} active={true} />
        </div>
      </div>
    </div>
  );
}
