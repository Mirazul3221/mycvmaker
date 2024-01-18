import React from "react";
import { GrDocumentTxt } from "react-icons/gr";
import { GrDocumentPdf } from "react-icons/gr";
import { LiaClipboardListSolid } from "react-icons/lia";
import { RiFileList3Fill } from "react-icons/ri";
import { MdWebhook } from "react-icons/md";
import { FaFileSignature } from "react-icons/fa6";
import { SiFiles } from "react-icons/si";
const Section01 = () => {
  return (
    <div className="p-10">
      <div className="text-center mt-10">
        <h2 className="text-2xl">CREATE A CV IN MINUTES</h2>
        <h3 className="text-5xl font-medium">Our Features.</h3>
      </div>
      <div className=" grid grid-cols-3 mt-20 gap-10">
        <div className="item group hover:bg-white duration-200 hover:shadow-lg rounded-md cursor-pointer hover:-translate-y-2 px-6 py-10 bg-[#fff5ff]">
          <div className="icone w-full flex relative justify-center my-4 mx-auto">
            <GrDocumentPdf
              size={80}
              color="#FF6C37"
              className="absolute left-[50%] group-hover:opacity-0 translate-x-[-50%] duration-300 -rotate-45"
            />
            <div className="w-20 h-20 flex justify-center items-center border bg-[#fff5ff] rounded-full">
              <GrDocumentTxt
                className="scale-75 -translate-y-5 opacity-0 -rotate-45 group-hover:rotate-0 group-hover:translate-y-0 bg-[#fff5ff]  group-hover:opacity-100 duration-300 "
                size={70}
                color="#FF6C37"
              />
            </div>
          </div>
          <div className="mt-2 text-center">
            <h3 className="text-2xl font-medium mb-4">Create Resume / CV</h3>
            <p>
              Create a professional-quality resume / CV with AI assistance in
              minutes.
            </p>

            <div className="btn py-2 group-hover:bg-[#5D61BF] group-hover:text-white duration-300 mx-auto px-6 border w-fit mt-4 border-[#5D61BF] text-[#5D61BF] rounded-md">
              <a href="./hello">Create New Resume</a>
            </div>
          </div>
        </div>
        <div className="item group hover:bg-white duration-200 hover:shadow-lg rounded-md cursor-pointer hover:-translate-y-2 px-6 py-10 bg-[#fff5ff]">
          <div className="icone w-full flex relative justify-center my-4 mx-auto">
            <LiaClipboardListSolid
              size={80}
              color="#5cd6d0"
              className="absolute left-[50%] group-hover:opacity-0 translate-x-[-50%] duration-300 -rotate-45"
            />
            <div className="w-20 h-20 flex justify-center items-center border bg-[#fff5ff] rounded-full">
              <RiFileList3Fill
                className="scale-75 -translate-y-5 opacity-0 -rotate-45 group-hover:rotate-0 group-hover:translate-y-0 bg-[#fff5ff]  group-hover:opacity-100 duration-300 "
                size={70}
                color="#5cd6d0"
              />
            </div>
          </div>
          <div className="mt-2 text-center">
            <h3 className="text-2xl font-medium mb-4">Create Cover Letter</h3>
            <p>
              Create an eye-catching cover letter to send with your resume with
              AI assistance.
            </p>

            <div className="btn py-2 group-hover:bg-[#5D61BF] group-hover:text-white duration-300 mx-auto px-6 border w-fit mt-4 border-[#5D61BF] text-[#5D61BF] rounded-md">
              <a href="./ok">Create New Letter</a>
            </div>
          </div>
        </div>
        <div className="item group hover:bg-white duration-200 hover:shadow-lg rounded-md cursor-pointer hover:-translate-y-2 px-6 py-10 bg-[#fff5ff]">
          <div className="icone w-full flex relative justify-center my-4 mx-auto">
            <MdWebhook
              size={80}
              color="#5c64d6"
              className="absolute left-[50%] group-hover:opacity-0 translate-x-[-50%] duration-300 -rotate-45"
            />
            <div className="w-20 h-20 flex justify-center items-center border bg-[#fff5ff] rounded-full">
              <FaFileSignature
                className="scale-75 -translate-y-5 opacity-0 -rotate-45 group-hover:rotate-0 group-hover:translate-y-0 bg-[#fff5ff]  group-hover:opacity-100 duration-300 "
                size={70}
                color="#5c64d6"
              />
            </div>
          </div>
          <div className="mt-2 text-center">
            <h3 className="text-2xl font-medium mb-4">Create Resume Website</h3>
            <p>
              Transform your resume into a mobile-friendly website that you can
              share with recruiters!
            </p>

            <div className="btn py-2 group-hover:bg-[#5D61BF] group-hover:text-white duration-300 mx-auto px-6 border w-fit mt-4 border-[#5D61BF] text-[#5D61BF] rounded-md">
              <a href="./oket">Create New Website</a>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20 flex items-center gap-10">
        <div className="left md:w-1/2">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/peiPQzRIxpI?si=karWX8Rd0xFw_Cql"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <div className="right md:w-1/2">
          <h3 className="text-3xl">
            What are the benefits of My Cv Creator online resume / CV Builder
            with AI assistance?
          </h3>
          <div className="grid grid-cols-2 mt-4 w-full gap-10">
            <div className="item">
              <div className="flex gap-2">
                <FaFileSignature size={30} color="#5e5e5e" />
                <h2 className="text-lg">Cover Letter Builder</h2>
              </div>
              <p className="text-justify mt-2">
                Write a cover letter using the same templates as your resume.
              </p>
            </div>
            <div className="item mb">
              <div className="flex gap-2">
                <SiFiles size={30} color="#5e5e5e" />
                <h2 className="text-lg">Cover Letter Builder</h2>
              </div>
              <p className="text-justify mt-2">
                Our experts' tips and AI assistance will show you how to write a
                resume.
              </p>
            </div>
            <div className="item">
              <div className="flex gap-2">
                <FaFileSignature size={30} color="#5e5e5e" />
                <h2 className="text-lg">Cover Letter Builder</h2>
              </div>
              <p className="text-justify mt-2">
                Write a cover letter using the same templates as your resume.
              </p>
            </div>
            <div className="item mb">
              <div className="flex gap-2">
                <SiFiles size={30} color="#5e5e5e" />
                <h2 className="text-lg">Cover Letter Builder</h2>
              </div>
              <p className="text-justify mt-2">
                Our experts' tips and AI assistance will show you how to write a
                resume.
              </p>
            </div>
            <div className="item">
              <div className="flex gap-2">
                <FaFileSignature size={30} color="#5e5e5e" />
                <h2 className="text-lg">Cover Letter Builder</h2>
              </div>
              <p className="text-justify mt-2">
                Write a cover letter using the same templates as your resume.
              </p>
            </div>
            <div className="item mb">
              <div className="flex gap-2">
                <SiFiles size={30} color="#5e5e5e" />
                <h2 className="text-lg">Cover Letter Builder</h2>
              </div>
              <p className="text-justify mt-2">
                Our experts' tips and AI assistance will show you how to write a
                resume.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section01;
