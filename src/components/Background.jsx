import React from "react";

function Background() {
  return (
    <div className="fixed z-[2] w-full h-screen">
      <div className="absolute w-full py-10 flex justify-center text-xl font-semibold text-zinc-400 top-[5%] ">
        Arrange your notes here!
      </div>
      <h1 className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] font-semibold text-zinc-700 text-9xl leading-none tracking-tight ">
        Notes.
      </h1>
    </div>
  );
}

export default Background;
