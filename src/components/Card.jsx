import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";
// fuchsia-500

function Card({ data, reference }) {
  return (
    <>
      <motion.div
        drag
        dragConstraints={reference}
        whileDrag={{ scale: 1.2 }}
        dragElastic={0.1}
        dragTransition={{ bounceStiffness: 400, bounceDamping: 20 }}
        className=" flex-shrink-0 relative bg-zinc-800/90 w-60 h-72 rounded-[45px] py-10 px-6 text-white overflow-hidden"
      >
        {/* //TODO: icon, text, footer, data, tag */}
        <FaRegFileAlt />
        <p className="leading-tight text-sm mt-3 font-semibold">{data.desc}</p>
        <div className="footer left-0 bottom-0 absolute w-full">
          <div className="flex items-center justify-between mb-3 px-8 py-3">
            <h4>{data.size}</h4>
            <span className="w-6 h-6 rounded-full flex items-center justify-center bg-fuchsia-700">
              {data.close ? <IoClose /> : <MdOutlineFileDownload size=".9em" />}
            </span>
          </div>
          {data.tag.isOpen && (
            <div
              className={`tag w-60 py-4 ${
                data.tag.tagColor === "blue" ? "bg-blue-500" : "bg-green-500"
              } flex items-center justify-center`}
            >
              <h3 className="text-sm font-semibold">{data.tag.tagTitle}</h3>
            </div>
          )}
        </div>
      </motion.div>
    </>
  );
}

export default Card;
