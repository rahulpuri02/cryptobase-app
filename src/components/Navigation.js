import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav
      className="w-[80%] md:w-[40%] mt-[84px] md:mt-16 flex justify-around align-middle
    border border-blue rounded-lg
    "
    >
         <NavLink
        to="/"
        end
        className={({ isActive }) => {
          return `w-full text-base text-center m-2.5
${
  isActive
    ? "bg-blue"
    : "bg-gray-200 text-white"
}
    border-0 cursor-pointer rounded capitalize font-semibold`;
        }}
      >
        Crypto
      </NavLink>
      <NavLink
        to="/trending"
        className={({ isActive }) => {
          return `w-full text-base text-center m-2.5
${
  isActive
    ? "bg-blue"
    : "bg-gray-200 text-white"
}
    border-0 cursor-pointer rounded capitalize font-semibold`;
        }}
      >
        Trending
      </NavLink>
      <NavLink
        to="/saved"
        className={({ isActive }) => {
          return `w-full text-base text-center m-2.5
${
  isActive
    ? "bg-blue"
    : "bg-gray-200 text-white"
}
    border-0 cursor-pointer rounded capitalize font-semibold`;
        }}
      >
        Saved
      </NavLink>


    </nav>
  );
};

export default Navigation;