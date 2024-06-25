import React from "react";

const HighlightText = ({ text, textsize ,textWeight}) => {
  return (
    <span className={`${textsize} text-[#FFDF2A] ${textWeight}`}> {text}</span>
  );
};

export default HighlightText;
