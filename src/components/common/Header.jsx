import React, { useState } from "react";
import { Logo } from "./Logo";
import Nav from "./Nav";
import { RxCross1 } from "react-icons/rx";
import { RxHamburgerMenu } from "react-icons/rx";
const Header = () => {
  const [menu, setMenu] = useState(false);
  console.log(menu);
  return (
    <div className="md:mx-20">
      <div className="flex md:hidden justify-between items-center bg-gray-200 py-2 md:bg-none px-4 md:px-0">
        <img className="md:w-36 w-28" src="./images/logo.png" alt="logo" />
        <div className="flex justify-center items-center p-2 rounded-full bg-white">
          <RxHamburgerMenu
            onClick={() => setMenu(!menu)}
            size={25}
            color="gray"
          />
        </div>
      </div>
      <div className="md:flex hidden justify-between items-center py-4">
        <Logo />
        <Nav />
      </div>

      {/* -------------mobile responsive------------------- */}
      {menu && (
        <div className="md:hidden pb-4 z-50 bg-white w-screen h-screen fixed top-0">
          <div className="flex justify-between items-center bg-gray-200 py-2 md:bg-none px-4 md:px-0">
            <Logo />
            <div className="flex justify-center items-center p-2 rounded-full bg-white">
              <RxCross1 onClick={() => setMenu(!menu)} size={25} color="gray" />
            </div>
          </div>
          <Nav />
        </div>
      )}
    </div>
  );
};

export default Header;
