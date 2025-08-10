import React from "react";
import { accordion } from "../assets/assets";
import AccordionItem from "./AccordionItem";

const Accordion = () => {
  return  <div className=" mx-auto mt-10  rounded-lg shadow-sm bg-white">
      {accordion.map((item, idx) => (
        <AccordionItem key={idx} title={item.title} content={item.content} />
      ))}
    </div>
};

export default Accordion;
