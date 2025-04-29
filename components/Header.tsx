"use client";

import { useEffect, useState } from "react";
import { ModeToggle } from "./ModeToggle";
import Image from "next/image";

const Header = () => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`grid grid-cols-5    items-center py-2 px-5 sticky top-0 bg-background ${
        scroll ? "bg-white/5 backdrop-blur-xs" : ""
      }`}
    >
      <div className="col-span-1 gap-1 px-2  ">
        <Image
          src={"/images/cherries.png"}
          alt={""}
          width={50}
          height={50}
          className="cursor-pointer"
        />
      </div>
      <div className="col-span-2 mt-1 items-center flex">
        <InputElement />{" "}
      </div>
      <div className="flex items-center gap-1 px-1  col-span-2   justify-end">
        <ButtonHeader /> <ModeToggle />{" "}
      </div>
    </div>
  );
};

const InputElement = () => {
  return (
    <input
      type="text"
      placeholder="What are you looking for?"
      className=" text-sm w-full px-4 py-2 rounded-2xl border border-gray-300 bg-gray-100 text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-purple-500 transition"
    />
  );
};

const ButtonHeader = () => {
  return (
    <div className="flex  gap-3    ">
      <button className="  cursor-pointer py-1  rounded-2xl px-5 bg-black text-white hover:bg-gray-800 transition">
        Sign In
      </button>
      <button className=" cursor-pointer hidden md:grid py-1  px-5 rounded-2xl border border-black text-black hover:bg-black hover:text-white transition">
        Sign Up
      </button>
    </div>
  );
};
export default Header;
