import React from "react";
import { Link } from "react-router-dom";

export default function Button({ children, active, linkto }) {
  return (
    <Link to={linkto}>
      <div
        className={` text-center text-[18px] px-6 py-3 rounded-full font-bold
          ${active ? "bg-[#FFE96F] text-black" : " bg-[#f2f2f2]"}
          hover:scale-95 transition-all duration-200  uppercase
          `}
      >
        {children}
      </div>
    </Link>
  );
}
