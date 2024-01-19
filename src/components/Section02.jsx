import React from "react";
import { TbDeviceDesktopCog } from "react-icons/tb";
import { GiArchiveResearch } from "react-icons/gi";
import { BiBook } from "react-icons/bi";
const Section02 = () => {
  return (
    <div className="bg-[#F4F7FC] mx-20 px-10 py-20">
      <div className="text-center mt-10">
        <h2 className="text-2xl">HOW IT WORKS</h2>
        <h3 className="text-5xl font-medium w-5/12 mx-auto">
          Build your job-winning resume with AI assistance in three simple steps
        </h3>
      </div>
      <div className="grid grid-cols-3 gap-10 mt-20">
        <Item
          icone={<TbDeviceDesktopCog size={50} color="#f76da9" />}
          heading={"Step 1"}
          text={"Choose one of our professionally designed resumes."}
          color="bg-rose-100"
        />
        <Item
          icone={<GiArchiveResearch size={50} color="#75fad4" />}
          heading={"Step 1"}
          text={"Choose one of our professionally designed resumes."}
          color="bg-[#e8fff8]"
        />
        <Item
          icone={<BiBook size={50} color="#cd5dfc" />}
          heading={"Step 1"}
          text={"Choose one of our professionally designed resumes."}
          color="bg-[#f7e3ff]"
        />
      </div>

      <div className="md:flex items-center gap-10 mt-10">
        <div className="left md:w-1/2">
          <h2 className="text-2xl">WHY CHOOSE US</h2>
          <h3 className="text-5xl my-4 font-medium mx-auto">
            SAY GOODBYE TO WRITER'S BLOCK.
          </h3>
          <p>
            Finish your resume faster with
            <span className="text-rose-400">
              thousands of pre-written examples
            </span>
            for hundreds of jobs you can insert directly into your resume!
          </p>
        </div>
        <div className="right md:w-1/2">
          <img src="./images/preview2.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export const Item = ({ icone, heading, text, color }) => {
  return (
    <div className="flex relative flex-col bg-white px-8 py-10 group cursor-pointer duration-1000 hover:-translate-y-2">
      <div className="absolute top-0 -z-10 left-0 w-0 group-hover:w-full h-full duration-500 group-hover:bg-[#5D61BF]"></div>
      <div
        className={`icone w-20 h-20 rounded-full ${color} group-hover:bg-white duration-500 group-hover:rotate-[360deg] flex justify-center items-center`}
      >
        {icone}
      </div>
      <div className="">
        <h3 className="text-3xl group-hover:text-white mt-6 font-medium">
          {heading}
        </h3>
        <p className="mt-4 font-medium  group-hover:text-white">{text}</p>
      </div>
    </div>
  );
};

export default Section02;
