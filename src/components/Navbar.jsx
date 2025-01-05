import { FiAlignCenter } from "react-icons/fi";
import { useDarkMode } from "../contexts/DarkModeContext";
import DarkMode from "./DarkMode";
import MobileNavbar from "./MobileNavbar";

export default function Navbar({ isOpen, setIsOpen }) {
  const { isDarkMode } = useDarkMode();
  const textColor = isDarkMode ? "text-white" : "text-black";

  return (
    <div>
      <nav className="flex justify-between items-center fixed w-full z-10 bg-transparent px-10 py-6">
        <div>
          <a
            href="/"
            className={`text-2xl font-bold cursor-pointer ${textColor}`}
          >
            {"<"} M_K_Abir {"/>"}
          </a>
        </div>
        <div className="hidden md:block">
          <ul className="flex space-x-4">
            <li>
              <a
                href="#"
                className={`${textColor} transition font-bold text-lg hover:text-cyan-600`}
              >
                <span className="flex justify-end text-xs text-gray-400">
                  01
                </span>
                {"//"} Home.
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`${textColor} transition font-bold text-lg hover:text-cyan-600`}
              >
                <span className="flex justify-end text-xs text-gray-400">
                  02
                </span>
                {"//"} Expertise.
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`${textColor} transition font-bold text-lg hover:text-cyan-600`}
              >
                <span className="flex justify-end text-xs text-gray-400">
                  03
                </span>
                {"//"} Work.
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`${textColor} transition font-bold text-lg hover:text-cyan-600`}
              >
                <span className="flex justify-end text-xs text-gray-400">
                  04
                </span>
                {"//"} Experience.
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`${textColor} transition font-bold text-lg hover:text-cyan-600`}
              >
                <span className="flex justify-end text-xs text-gray-400">
                  05
                </span>
                {"//"} Contact.
              </a>
            </li>
          </ul>
        </div>

        <DarkMode />
        {isOpen ? (
          <MobileNavbar setIsOpen={setIsOpen} isOpen={isOpen} />
        ) : (
          <button onClick={() => setIsOpen(true)} className={`block md:hidden`}>
            <FiAlignCenter className={`text-3xl ${textColor}`} />
          </button>
        )}
      </nav>
    </div>
  );
}
