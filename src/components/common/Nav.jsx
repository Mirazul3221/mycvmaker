import React from "react";

const Nav = () => {
  return (
    <div className="md:w-9/12 ml-4 md:ml-0">
      <ul className="md:flex justify-end space-y-5 md:space-y-0 gap-6">
        <li className="text-md font-normal hidden md:block text-[#5D61BF]">
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
