import React from "react";

const Nav = () => {
  return (
    <div className="w-9/12">
      <ul className="flex justify-end gap-6">
        <li className="text-md font-normal text-[#5D61BF]">
          <a href="#home">Home</a>
        </li>
        <li className="text-md font-normal text-[#5D61BF]">
          <a href="#templates">Template</a>
        </li>
        <li className="text-md font-normal text-[#5D61BF]">
          <a href="#temple">Word Template</a>
        </li>
        <li className="text-md font-normal text-[#5D61BF]">
          <a href="#oket">Order Resume</a>
        </li>
        <li className="text-md font-normal text-[#5D61BF]">
          <a href="#herf">Blog</a>
        </li>
        <li className="text-md font-normal text-[#5D61BF]">
          <a href="#mode">Job Alert</a>
        </li>
        <li className="text-md font-normal text-[#5D61BF]">
          <a href="#da">Log In</a>
        </li>
        <li className="text-md font-normal text-[#5D61BF]">
          <a
            className="py-2 px-6 bg-[#5D61BF] text-white rounded-md"
            href="#logo"
          >
            Sign Up
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
