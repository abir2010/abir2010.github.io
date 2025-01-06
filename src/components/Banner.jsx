import { useDarkMode } from "../contexts/DarkModeContext";
import Carousel from "./Carousel";

export default function Banner() {
  const { isDarkMode } = useDarkMode();
  const textColor = isDarkMode ? "text-white" : "text-black";

  console.log(textColor);
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <p
        className={`font-bold ${textColor} text-center xl:text-title_xl lg:text-title_lg md:text-title_md sm:text-title_sm xs:text-title_xs`}
      >
        M_K_Abir
      </p>
      <p
        className={`${textColor} text-center xl:text-3xl lg:text-2xl md:text-xl sm:text-lg xs:text-md`}
      >
        Frontend , Backend & Full Stack Developer
      </p>
      <p className={`mt-16 text-2xl ${textColor} font-bold`}>
        Previously worked at{" "}
      </p>
      <Carousel />
      {/* <div className="w-full flex justify-center items-center">
        <img src={scrollDown} alt="" />
      </div> */}
      <div className="flex justify-center items-center">
        <div className="animate-bounce">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              d="M12 4v16m0 0l-4-4m4 4l4-4"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
