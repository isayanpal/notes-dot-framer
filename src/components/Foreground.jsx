import React, { useRef } from "react";
import Card from "./Card";

function Foreground() {
  const ref = useRef(null);

  const data = [
    {
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      size: ".5mb",
      close: false,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
    {
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      size: ".3mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Upload Now", tagColor: "blue" },
    },
    {
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      size: ".6mb",
      close: true,
      tag: { isOpen: false, tagTitle: "Download Now", tagColor: "green" },
    },
  ];
  return (
    <>
      <div ref={ref} className="fixed w-full h-full z-[3] top-0 left-0 flex gap-5 flex-wrap p-5">
        {data.map((item, index) => (
          <Card data={item} reference={ref} />
        ))}
      </div>
    </>
  );
}

export default Foreground;
