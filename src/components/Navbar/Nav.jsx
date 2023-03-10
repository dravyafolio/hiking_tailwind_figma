import React from "react";
import { useState } from "react";
import Logo from "../../assets/logo.png";
import NavLinks from "./NavLinks";
const Nav = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="flex justify-between">
      <img src={Logo} alt="logo" className="h-9 w-20 cursor-pointer" />
      <ul className="md:flex hidden items-center gap-10">
        <NavLinks />
      </ul>
      {/* <div className="md:hidden flex items-center"></div> */}
      {/* -------------------Mobile View---------------- */}
      <ul
        className={`fixed top-0 z-[999]  bg-[white] w-2/3 h-[40%] shadow-[#d36a6a] shadow-2xl  md:hidden flex flex-col gap-10 font-medium p-7 pt-20 duration-500 ${
          open ? "right-[-0]" : "right-[-100%]"
        }  cursor-pointer`}
      >
        <NavLinks />
      </ul>
      <div className="text-2xl md:hidden z-50" onClick={() => setOpen(true)}>
        <ion-icon
          name={`${open ? "close-circle-outline" : "grid-outline"}`}
        ></ion-icon>
      </div>
    </nav>
  );
};

export default Nav;
