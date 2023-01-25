import React from "react";
import { IoMdCall } from "react-icons/io";
import { BiMessageAltDetail } from "react-icons/bi";
import { HiVideoCamera } from "react-icons/hi";
import { BsFillChatDotsFill } from "react-icons/bs";
const ContactCards = () => {
  const INFO = [
    {
      title: "Call",
      info: "00.00.00.00.00",
      icon: <IoMdCall size={24} color="#3352cf" />,
    },
    {
      title: "Chat",
      info: "00.00.00.00.00",
      icon: <BsFillChatDotsFill size={24} color="#3352cf" />,
    },
    {
      title: "Video ",
      info: "00.00.00.00.00",
      icon: <HiVideoCamera size={24} color="#3352cf" />,
    },
    {
      title: "Message",
      info: "00.00.00.00.00",
      icon: <BiMessageAltDetail size={24} color="#3352cf" />,
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2   py-4 gap-2 ">
      {INFO.map((info, i) => {
        return (
          <section
            key={i}
            className="col-span-1 min-w-full space-y-3 border bg-white rounded shadow-lg p-4 transition-transform delay-150 hover:scale-105"
          >
            <div className="flex items-center space-x-4">
              <div className="p-3 border rounded-lg bg-[#f1f5ff]">
                {info.icon}
              </div>
              <article className=" flex flex-col items-start ">
                <h1 className="text-xl text-[#475d83]">{info.title}</h1>
                <p className="text-sm text-[#777d86]"> {info.info}</p>
              </article>
            </div>
            <button className=" transition-colors delay-150 hover:bg-[#3756ce] hover:text-white px-6 py-3 lg:px-2 lg:py-3 rounded-md w-full text-[#3352cf] border bg-[#f1f5ff]">
              {info.title + " Now"}
            </button>
          </section>
        );
      })}
    </div>
  );
};

export default ContactCards;
