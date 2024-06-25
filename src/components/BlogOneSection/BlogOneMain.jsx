import React from "react";

import BlogOneData from "./info/info";

export default function BlogOneMain() {
  return (
    <div>
      <h3 className="text-center font-[500] pt-[100px] text-[40px]">
        Popular topics
      </h3>
      <div className="flex gap-[25px] w-[1100px] m-auto mt-[50px] pb-[50px]">
        <button className="w-[200px] h-[60px] bg-[#EFEFEF] rounded-[10px] font-[700] text-[25px]">
          All
        </button>
        <button className="w-[200px] h-[60px] bg-[#EFEFEF] rounded-[10px] font-[700] text-[25px]">
          Event
        </button>
        <button className="w-[200px] h-[60px] bg-[#EFEFEF] rounded-[10px] font-[700] text-[25px]">
          Tournament
        </button>
        <button className="w-[200px] h-[60px] bg-[#EFEFEF] rounded-[10px] font-[700] text-[25px]">
          Product
        </button>
        <button className="w-[200px] h-[60px] bg-[#EFEFEF] rounded-[10px] font-[700] text-[25px]">
          Padel News
        </button>
      </div>
      <ul className="w-[1100px] grid grid-cols-4 m-auto gap-6 pb-20">
        {BlogOneData.map((element, index) => {
          return (
            <li key={index} className="mt-[20px]  border rounded-[5px]">
              <div className="">{element.images}</div>
              <i className="text-[#6C757D] ml-[10px] mt-[5px] block">
                {element.date}
              </i>
              <br />
              <h4 className="w-[200px] font-[700] text-[18px] ml-[10px]">
                {element.name}
              </h4>
              <p className="ml-[10px] text-[#6C757D] mb-[10px]">
                {element.text}
              </p>
              {/* <hr className="mb-[10px] w-[200px] m-auto text-[5px]" /> */}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
