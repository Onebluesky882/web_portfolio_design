import { FaHome, FaUser } from "react-icons/fa";
import MobileMagicOne from "./MobileMagicOne";
const TestMagicMenu = () => {
  return (
    <div className="flex gap-y-50 flex-col ">
      <MobileMagicOne />
      <div>...</div>

      <div>
        <ul className="flex flex-col">
          <li className="py-5">
            <a href={""}>
              <span className="icon">icon</span>
              <span className="text">name</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default TestMagicMenu;
