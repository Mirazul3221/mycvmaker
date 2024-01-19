import React from "react";
import { Logo } from "./Logo";
import Nav from "./Nav";

const Header = () => {
  return (
    <div className="mx-20">
      <div className="flex justify-between items-center py-4">
        <Logo />
        <Nav />
      </div>
    </div>
  );
};

export default Header;
