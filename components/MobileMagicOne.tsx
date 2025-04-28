"use client";

import { ReactNode, useState } from "react";
import { FaHome, FaUser } from "react-icons/fa";
import { IoMdPhotos } from "react-icons/io";
import { IoSettings } from "react-icons/io5";
import { LuMessageCircleMore } from "react-icons/lu";
import { usePathname } from "next/navigation";
import Link from "next/link";

type MenuDivProps = {
  icon: ReactNode;
  name: string;
  pathname: string;
  onClick: (name: string) => void;
  isActive?: boolean;
  link: string;
};
const menuList = [
  {
    name: "Home",
    icon: <FaHome />,
    link: "/",
  },
  {
    name: "Photo",
    icon: <IoMdPhotos />,
    link: "/photo",
  },
  {
    name: "Message",
    icon: <LuMessageCircleMore />,
    link: "/message",
  },
  {
    name: "Setting",
    icon: <IoSettings />,
    link: "/setting",
  },
];
const MobileMagicOne = () => {
  const [active, setActive] = useState("/");
  const pathname = usePathname();

  return (
    <div className="flex justify-center ">
      <div className="navigation">
        <ul className="">
          {menuList.map((nav) => (
            <MenuDiv
              key={nav.name}
              name={nav.name}
              icon={nav.icon}
              onClick={() => setActive(nav.name)}
              pathname={pathname}
              link={nav.link}
            />
          ))}
        </ul>
        <div className="indicator"></div>
      </div>
    </div>
  );
};

const MenuDiv = ({ icon, name, onClick, pathname, link }: MenuDivProps) => {
  const isActive = pathname === link;
  console.log("link :", link);
  console.log("pathname :", pathname);
  return (
    <li className="list ">
      <Link href={link} className="" onClick={() => onClick(name)}>
        {!isActive ? (
          <span className="icon">{icon}</span>
        ) : (
          <div className="bg-[#f68db4] py-5 px-5 rounded-full  ">
            <span className="icon">{icon}</span>
          </div>
        )}
        <span className="text">{name}</span>
      </Link>
    </li>
  );
};

export default MobileMagicOne;
