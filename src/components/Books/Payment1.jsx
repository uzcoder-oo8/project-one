import React from "react";
import { Link } from "react-router-dom";
import Footer from "../common/footer";
import Logo from "../../assets/HomePageLogo.png";
import { AiOutlineFileSearch } from "react-icons/ai";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { FaCircleDot } from "react-icons/fa6";
import { BsQuestionCircle } from "react-icons/bs";

const Payment1 = () => {
  return (
    <div>
      <section className="w-full bg-black pt-5 pb-5">
        <div className="max-w-[1500px] m-auto">
          <header className="flex justify-between">
            <Link to={"/"}>
              <img src={Logo} alt="" />
            </Link>
            <Link
              className="text-[#fff] font-[700] text-[35px] right-[50px] mt-[25px] ml-[30px]"
              to={"/"}
            >
              Home
            </Link>
          </header>
        </div>
      </section>
      <h4 className="text-center font-[500] text-[20px] mt-[100px]">
        let´s book your court
      </h4>
      <p className="text-center font-[600] text-[13px] mt-[10px] text-[#737373]">
        Powered by bookandgo.app
      </p>
      <div>
        <ul className="flex gap-[12px] w-[1070px] m-auto mt-[68px] mb-[50px]">
          <button className="w-[214px] border rounded-[10px] bg-[#000] text-white  font-[500] text-[20px] flex gap-[10px] text-center py-2 pl-[30px]">
            <AiOutlineFileSearch className="text-[25px] mt-[5px] ml-[-13px]" />
            Search
            <AiOutlineCheckCircle className="text-[25px] ml-[35px] mt-[4px]" />
          </button>
          <button className="w-[214px] border rounded-[10px] bg-[#000] text-white font-[500] text-[20px] flex gap-[10px] text-center py-2 pl-[30px]">
            <AiOutlineFileSearch className="text-[25px] mt-[5px] ml-[-13px]" />
            Time Slot
            <AiOutlineCheckCircle className="text-[25px] ml-[10px] mt-[4px]" />
          </button>
          <button className="w-[254px] border rounded-[10px] bg-[#000] text-white font-[500] text-[20px] flex gap-[10px] text-center py-2 pl-[30px]">
            <AiOutlineFileSearch className="text-[25px] mt-[5px] ml-[-13px]" />
            Player Info
            <AiOutlineCheckCircle className="text-[25px] ml-[32px] mt-[4px]" />
          </button>
          <button className="w-[254px] border rounded-[10px] bg-[#E9ECEF] font-[500] text-[20px] flex gap-[10px] text-center py-2 pl-[30px]">
            <AiOutlineFileSearch className="text-[25px] mt-[5px] ml-[-13px]" />
            Payment
          </button>
          <button className="w-[214px] border rounded-[10px] bg-[#E9ECEF] font-[500] text-[20px] flex gap-[10px] text-center py-2 pl-[30px]">
            <AiOutlineFileSearch className="text-[25px] mt-[5px] ml-[-13px]" />
            Payment
          </button>
        </ul>
        <div className="w-[1070px] m-auto">
          <p className="w-[825px] h-[25px] text-[#737373] text-[14px] gap-5">
            The booking is paid locally before the game, and we rely on our
            players to fulfill their payment obligations promptly.
          </p>
          <p className="w-[825px] h-[50px] text-[#737373] text-[14px] gap-5 mt-[15px]">
            We understand the importance of avoiding no-shows, so we kindly ask
            that if you need to cancel your booking, please do so at least 12
            hours before the scheduled time.
          </p>
          <p className="w-[825px] h-[50px] text-[#737373] text-[14px] gap-5 mt-[15px]">
            Any cancellations made after the 12-hour window will be subject to
            the full amount charged. Your cooperation is greatly appreciated and
            thank you for choosing our service.
          </p>
          <p className="w-[825px] h-[25px] text-[#737373] text-[14px] gap-5 mt-[15px]">
            Let's all enjoy this game together and keep a good culture.
          </p>
          <div className="flex w-[342px] h-[25px] mt-[41px]">
            <FaCircleDot className="mt-[2.5px]" />
            <p className="w-[318px] h-[25px] text-[14px] ml-[8px] font-semibold">
              I Agree to Local Payment and Cancellation Policy
            </p>
          </div>
          <div className="flex w-[352px] h-[47px] rounded-[6px] p-[16px] gap-12 bg-[#E9ECEF] m-auto mt-[56px]">
            <BsQuestionCircle />
            <p className="w-[292px] h-[15px] text-[12px] ml-[-37px]">
              You can filter your search for an available times
            </p>
          </div>
        </div>
        <div className="flex w-[1070px] m-auto justify-between">
          <Link to={"/player"}>
            <button className="w-[137px] h-[52px] bg-black text-white rounded-md font-[300] mt-[50px]">
              Go back
            </button>
          </Link>
          <Link to={"/click"}>
            <button className="w-[105px] h-[52px] bg-black text-white rounded-md font-[300] mt-[50px] ">
              Next
            </button>
          </Link>
        </div>
      </div>
      <section className="booksection mt-[91px]">
        <div className="max-w-[1620px] m-auto flex gap-[350px]">
          <li className="">
            <h4 className="font-[900] text-[50px]">Download our app</h4>
            <p className="font-[500]">Join our community.</p>
            <p className="w-[650px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. 
            </p>
            <div className="flex w-[280px] mt-[50px]">
              <button className="books google-play m-auto block  hover:scale-95"></button>
              <button className="books app-store m-auto block  hover:scale-95 "></button>
            </div>
          </li>
          <li className="booksmain"></li>
        </div>
      </section>
      <section className="w-full bg-[#000] -mt-[65px]">
        <div className="max-w-[1620px] m-auto">
          <Footer />
        </div>
      </section>
    </div>
  );
};

export default Payment1;
