import React from "react";
import "./Progress.css";
import Image from "next/image";

const Progress = () => {
  return (
    <section className=" relative">
      <Image
        src="/Rectangle 6.png"
        alt="Progress Image"
        width={1000}
        height={1000}
        className="w-fit h-full absolute z-[-1] top-0 right-0 bottom-0"
      />
      <div className="relaive z-10 text-black progress px-5 xl:px-20 py-10">
        <div className="w-full lg:w-3/4 space-y-8">
          <h2 className="text-3xl lg:text-4xl font-[600]">
            United For Progress Our Vision
          </h2>
          <p>
            I pledge to serve all Americans with integrity and commitment. My
            duty is to work across party lines to ensure the well-being and
            progress of every citizen.
          </p>
          <div>
            <div className="flex justify-between">
              <h4 className="font-[600] text-lg">Health Care</h4>
              <h4 className="font-[600] text-lg">93%</h4>
            </div>
            <div className="h-2 w-full rounded-full bg-white overflow-hidden">
              <span className="w-[93%] block h-full bg-[#C6318B]"></span>
            </div>
          </div>
          <div>
            <div className="flex justify-between">
              <h4 className="font-[600] text-lg">Education</h4>
              <h4 className="font-[600] text-lg">85%</h4>
            </div>
            <div className="h-2 w-full rounded-full bg-white overflow-hidden">
              <span className="w-[85%] block h-full bg-[#C6318B]"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Progress;
