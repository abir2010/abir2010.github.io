import { useState } from "react";
import { useDarkMode } from "../contexts/DarkModeContext";
import Banner from "./Banner";
import Navbar from "./Navbar";

export default function Header() {
  const { isDarkMode } = useDarkMode();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {isDarkMode ? (
        <div
          className="bg-cover bg-center h-screen"
          style={{ backgroundImage: "url('/cover-dark.png')", height: "100%" }}
        >
          {/* nav */}
          <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
          <Banner />
        </div>
      ) : (
        <div
          className="bg-cover bg-center h-screen"
          style={{ backgroundImage: "url('/cover-light.png')", height: "100%" }}
        >
          {/* nav */}
          <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
          <Banner />
        </div>
      )}
    </>
  );
}
