import { FiAlignCenter } from "react-icons/fi";
import DarkMode from "./DarkMode";
import MobileNavbar from "./MobileNavbar";

export default function Navbar({ textColor, isOpen, setIsOpen }) {
  let colorClass = textColor === "whitish" ? "white" : "black";

  return (
    <div>
      <nav className="flex justify-between items-center fixed w-full z-10 bg-transparent px-10 py-6">
        <div>
          <a
            href="/"
            className={`text-2xl font-bold cursor-pointer text-${colorClass}`}
          >
            {"<"} M_K_Abir {"/>"}
          </a>
        </div>
        <div className="hidden md:block">
          <ul className="flex space-x-4">
            <li>
              <a
                href="#"
                className={`text-${colorClass} transition font-bold text-lg hover:text-cyan-600`}
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
                className={`text-${colorClass} transition font-bold text-lg hover:text-cyan-600`}
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
                className={`text-${colorClass} transition font-bold text-lg hover:text-cyan-600`}
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
                className={`text-${colorClass} transition font-bold text-lg hover:text-cyan-600`}
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
                className={`text-${colorClass} transition font-bold text-lg hover:text-cyan-600`}
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
            <FiAlignCenter className={`text-3xl text-${colorClass}`} />
          </button>
        )}
      </nav>
    </div>
  );
}
