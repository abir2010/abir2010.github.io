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
    </div>
  );
}
