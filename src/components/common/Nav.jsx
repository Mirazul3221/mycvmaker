import React from "react";

const Nav = () => {
  return (
    <div className="w-9/12">
      <ul className="flex justify-end gap-6">
        <li className="text-md font-normal text-[#5D61BF]">
          <a href="#">Home</a>
        </li>
        <li className="text-md font-normal text-[#5D61BF]">
          <a href="#">Template</a>
        </li>
        <li className="text-md font-normal text-[#5D61BF]">
          <a href="#">Word Template</a>
        </li>
        <li className="text-md font-normal text-[#5D61BF]">
          <a href="#">Order Resume</a>
        </li>
        <li className="text-md font-normal text-[#5D61BF]">
          <a href="#">Blog</a>
        </li>
        <li className="text-md font-normal text-[#5D61BF]">
          <a href="#">Job Alert</a>
        </li>
        <li className="text-md font-normal text-[#5D61BF]">
          <a href="#">Log In</a>
        </li>
        <li className="text-md font-normal text-[#5D61BF]">
          <a className="py-2 px-6 bg-[#5D61BF] text-white rounded-md" href="#">
            Sign Up
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
