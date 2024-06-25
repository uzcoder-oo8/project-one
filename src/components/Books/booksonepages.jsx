import React from "react";
import { BiTime } from "react-icons/bi";
import { AiOutlineFileSearch } from "react-icons/ai";
import { Link } from "react-router-dom";
// import { MdContentPasteSearch } from "react-icons/md";
export default function BookonePage() {
  return (
    <div>
      <ul className="flex gap-[12px] w-[1070px] m-auto mt-[68px] mb-[50px]">
        <button className="w-[214px] border rounded-[10px] bg-[#E9ECEF] font-[500] text-[20px] flex gap-[30px] text-center py-2 pl-[30px]">
          <AiOutlineFileSearch className="text-[25px] mt-[7px]" />
          Search
        </button>
        <button className="w-[214px] border rounded-[10px] bg-[#E9ECEF] font-[500] text-[20px] flex gap-[30px] text-center py-2 pl-[30px]">
          <AiOutlineFileSearch className="text-[25px] mt-[7px]" />
          Time Slot
        </button>
        <button className="w-[214px] border rounded-[10px] bg-[#E9ECEF] font-[500] text-[20px] flex gap-[30px] text-center py-2 pl-[30px]">
          <AiOutlineFileSearch className="text-[25px] mt-[7px]" />
          Player Info
        </button>
        <button className="w-[214px] border rounded-[10px] bg-[#E9ECEF] font-[500] text-[20px] flex gap-[30px] text-center py-2 pl-[30px]">
          <AiOutlineFileSearch className="text-[25px] mt-[7px]" />
          Payment
        </button>
        <button className="w-[214px] border rounded-[10px] bg-[#E9ECEF] font-[500] text-[20px] flex gap-[30px] text-center py-2 pl-[30px]">
          <AiOutlineFileSearch className="text-[25px] mt-[7px]" />
          Payment
        </button>
      </ul>
      <div className="">
        <div className="flex gap-[20px] w-[1070px] m-auto">
          <div className=" flex flex-col gap-5">
            <h5 className="font-[700]">Location (optional)</h5>
            <select className="w-[350px] border-[3px] h-[38px] text-[#212529] rounded-[5px]">
              <option>Please select</option>
            </select>
          </div>
          <div className=" flex flex-col gap-5">
            <h5 className="font-[700]">Location (optional)</h5>
            <select className="w-[350px] border-[3px] h-[38px] text-[#212529] rounded-[5px]">
              <option>Please select</option>
            </select>
          </div>
          <div className=" flex flex-col gap-5">
            <h5 className="font-[700]">Location (optional)</h5>
            <select className="w-[350px] border-[3px] h-[38px] text-[#212529] rounded-[5px]">
              <option>Please select</option>
            </select>
          </div>
        </div>
        <div className="flex gap-[20px] w-[1070px] m-auto mt-[50px]">
          <div className=" flex flex-col gap-5">
            <h5 className="font-[700]">Location (optional)</h5>
            <select className="w-[350px] border-[3px] h-[38px] text-[#212529] rounded-[5px]">
              <option>Please select</option>
            </select>
          </div>
          <div className=" flex flex-col gap-5 mb-[50px]">
            <h5 className="font-[700]">Location (optional)</h5>
            <div className="w-[350px] border-[3px] h-[38px] text-[#212529] rounded-[5px] flex gap-[75px] py-1 pl-[10px]">
              <p className="text-[#212529]">08:16:55</p>{" "}
              <p className="text-[#212529]">16:24:55</p>
              <BiTime className="mt-[3px] text-[20px] text-[#212529]" />
            </div>
          </div>
        </div>
        <div className="mb-[50px]">
          <p className="text-center">Select Your Day’s</p>
          <div className="w-[850px] h-[56px] m-auto border-[3px] rounded-[6px] flex gap-2 mt-[20px]">
            <div className="flex gap-1">
              <label className="switch">
                <input id="Mon" type="checkbox" />
                <span className="slider round"></span>
              </label>
              <label htmlFor="Mon" className="mt-3 font-[500] text-[18px]">
                Mon
              </label>
            </div>
            <div className="flex gap-1">
              <label className="switch">
                <input id="Tue" type="checkbox" />
                <span className="slider round"></span>
              </label>
              <label htmlFor="Tue" className="mt-3 font-[500] text-[18px]">
                Tue
              </label>
            </div>
            <div className="flex gap-1">
              <label className="switch">
                <input id="Wed" type="checkbox" />
                <span className="slider round"></span>
              </label>
              <label htmlFor="Wed" className="mt-3 font-[500] text-[18px]">
                Wed
              </label>
            </div>
            <div className="flex gap-1">
              <label className="switch">
                <input id="Thu" type="checkbox" />
                <span className="slider round"></span>
              </label>
              <label htmlFor="Thu" className="mt-3 font-[500] text-[18px]">
                Thu
              </label>
            </div>
            <div className="flex gap-1">
              <label className="switch">
                <input id="Fri" type="checkbox" />
                <span className="slider round"></span>
              </label>
              <label htmlFor="Fri" className="mt-3 font-[500] text-[18px]">
                Fri
              </label>
            </div>
            <div className="flex gap-1">
              <label className="switch">
                <input id="Sat" type="checkbox" />
                <span className="slider round"></span>
              </label>
              <label htmlFor="Sat" className="mt-3 font-[500] text-[18px]">
                Sat
              </label>
            </div>
            <div className="flex gap-1">
              <label className="switch">
                <input id="Sun" type="checkbox" />
                <span className="slider round"></span>
              </label>
              <label htmlFor="Sun" className="mt-3 font-[500] text-[18px]">
                Sun
              </label>
            </div>
          </div>
          <Link to={"/TimeSlot"}>
            <button className="w-[228px] h-[52px] bg-black text-white rounded-md font-[300] mt-[50px] ml-[1200px]">
              See available courts
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
