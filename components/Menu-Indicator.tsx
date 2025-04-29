"use client";

import Link from "next/link";
import { useState } from "react";
import { FaHome } from "react-icons/fa";

const NavigationTwo = () => {
  const Menus = [
    {
      name: "Home",
      icon: <FaHome className="text-white" />,
      dis: "translate-x-0",
    },
    {
      name: "Profile",
      icon: <FaHome className="text-white" />,
      dis: "translate-x-16",
    },
    {
      name: "Message",
      icon: <FaHome className="text-white" />,
      dis: "translate-x-32",
    },
    {
      name: "Photos",
      icon: <FaHome className="text-white" />,
      dis: "translate-x-48",
    },
    {
      name: "setting",
      icon: <FaHome className="text-white" />,
      dis: "translate-x-64",
    },
  ];
  const [active, setActive] = useState(0);
  return (
    <div className="flex bg-white p-50">
      <div className="bg-blue-400 max-h-[4.4rem] px-6 rounded-t-xl ">
        <ul className="flex relative">
          <span
            className={`bg-rose-500 duration-500 ${Menus[active].dis} ${
              active && "border-white"
            } border-4   h-16 w-16 absolute -top-6 rounded-full   border-white`}
          >
            <span className="w-3.5 h-3.5 bg-transparent absolute top-5 -left-[18px] rounded-tr-[11px] shadow-[var(--my-shadow-left)]"></span>
            <span className="w-3.5 h-3.5 bg-transparent absolute top-5 -right-[18px] rounded-tl-[11px] shadow-[var(--my-shadow-right)]"></span>
          </span>
          {Menus.map((menu, i) => (
            <li key={i} className="w-16">
              <Link
                href="#"
                className="cursor-pointer flex items-center pt-6 flex-col"
                onClick={() => setActive(i)}
              >
                <span
                  className={`flex duration-500 z-10  ${
                    active === i && "-mt-6"
                  }`}
                >
                  {menu.icon}
                </span>

                <span
                  className={`text-black   ${
                    active === i
                      ? "translate-y-5 duration-600 opacity-100 "
                      : "opacity-0 translate-y-10"
                  } `}
                >
                  {menu.name}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default NavigationTwo;
