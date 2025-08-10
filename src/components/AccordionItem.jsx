import { useState } from "react";
import { BiPlus, BiX } from "react-icons/bi";

const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-gray-200  bg-[#DEEBFF] border my-[20px] p-[20px] rounded-[16px] flex flex-col gap-[20px] text-left">
      <button 
        className="w-full flex justify-between items-center font-bold text-[15px] text-[#1A2B5F] font-montserrat"
        onClick={() => setIsOpen(!isOpen)}>
        {title}
        {isOpen ? (
          <BiX className="h-[28px] w-[28px] bg-[#A3E635] rounded-[30px] p-[5px]" />
        ) : (
          <BiPlus className="h-[28px] w-[28px] bg-[#A3E635] rounded-[30px] p-[5px]" />
        )}
      </button>
      {isOpen && (
        <div className="text-[#333333] text-[14px] font-medium">{content}</div>
      )}
    </div>
  );
};

export default AccordionItem;
