import { ReactNode } from "react";
import { FaHome } from "react-icons/fa";

type MenuDivProps = {
  icon: ReactNode;
  name: string;
};
const MobileMagicOne = () => {
  return (
    <div className="hidden max-sm:grid">
      <ul className="outline-1 max-sm:flex  justify-between mx-10gap-3  bg-amber-200 px-10 py-2">
        <MenuDiv name={"Home"} icon={<FaHome />} />
        <MenuDiv name={"Home"} icon={<FaHome />} />
        <MenuDiv name={"Home"} icon={<FaHome />} />
        <MenuDiv name={"Home"} icon={<FaHome />} />
        <MenuDiv name={"Home"} icon={<FaHome />} />
      </ul>
    </div>
  );
};

const MenuDiv = ({ icon, name }: MenuDivProps) => {
  return (
    <li>
      <a href="">
        <span className="flex justify-center">{icon}</span>
        <span>{name}</span>
      </a>
    </li>
  );
};
export default MobileMagicOne;
