import { ImCross } from "react-icons/im";
import { useDarkMode } from "../contexts/DarkModeContext";

export default function MobileNavbar({ setIsOpen }) {
  const { isDarkMode } = useDarkMode();
  const bgColor = isDarkMode ? "black" : "white";

  return (
    <div
      className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 transition-opacity duration-1000 ease-in-out"
      onClick={() => setIsOpen(false)}
    >
      <div
        className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-gray-50 text-gray-800 dark:bg-black dark:text-white 
          fixed left-0 top-0 w-64 h-full transform transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(0)` }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between h-14 border-b px-4">
          <div className="font-bold text-xl">
            {"<"} M_K_Abir {"/>"}
          </div>
          <div
            onClick={() => setIsOpen(false)}
            className={`cursor-pointer relative left-20 p-4 mt-2 bg-${bgColor}`}
          >
            <ImCross color={`${isDarkMode ? "white" : "black"}`} />
          </div>
        </div>
        <div className="overflow-y-auto overflow-x-hidden flex flex-grow justify-center items-center">
          <ul className="flex flex-col py-4 space-y-1">
            {["Home", "Expertise", "Work", "Experience", "Contact"].map(
              (item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="relative flex flex-row items-center h-20 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6 dark:text-white"
                  >
                    <span className="inline-flex justify-center items-center ml-4">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        {/* Icons can be customized per item */}
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                        ></path>
                      </svg>
                    </span>
                    <span className="ml-2 text-sm tracking-wide truncate">
                      {item}
                    </span>
                  </a>
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
