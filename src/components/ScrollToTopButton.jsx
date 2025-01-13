import { useEffect, useState } from "react";

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  // Show button when page is scrolled down
  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-10 right-10 px-5 py-3 border-2 border-cyan-400 bg-cyan-400 text-2xl text-black  shadow-lg hover:bg-transparent hover:text-cyan-400 transition-all duration-300"
        >
          ↑
        </button>
      )}
    </div>
  );
};

export default ScrollToTopButton;
