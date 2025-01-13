import { useDarkMode } from "../contexts/DarkModeContext";

export default function Expertise() {
  const { isDarkMode } = useDarkMode();
  const bgPath = isDarkMode ? "/expertise-bg2.png" : "/expertise-bg-dark.png";
  return (
    <div
      className="bg-cover bg-center min-h-screen"
      style={{ backgroundImage: `url(${bgPath})` }}
    >
      <div className="px-0">
        <div className="container mx-auto py-8">
          <div className="text-black font-bold text-center text-5xl lg:text-7xl my-20 dark:text-white">
            My Expertise
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3">
            {/* card one starts */}
            <div className="bg-transparent p-6 border-2 border-black dark:border-white">
              <h2 className="text-xl font-bold mb-2 text-black flex items-center justify-start gap-4 dark:text-white">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="48"
                    height="48"
                    fill="currentColor"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v10c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zm0 2v10h16V6H4zm7 14h2v2h-2v-2z" />
                  </svg>
                </div>
                <div className="text-xl">
                  <span className="text-3xl relative">Software</span>
                  <div className="w-full bg-pink-400 h-2.5 relative"></div>
                  Development
                </div>
              </h2>
              <div className="flex justify-center items-center">
                <p className="text-gray-500">
                  {"<h3>"}{" "}
                  <svg width="50" height="150">
                    <line
                      x1="15"
                      y1="0"
                      x2="15"
                      y2="200"
                      stroke="#555555"
                      strokeWidth="2"
                    />
                  </svg>
                  {"</h3>"}{" "}
                </p>
                <p className="text-black dark:text-white">
                  Experienced in both functional and OOP: C++, JavaScript,
                  TypeScript. Familiar with Python, Java, and C#.
                </p>
              </div>
            </div>
            {/* card one ends */}
            {/* card two starts */}
            <div className="bg-transparent p-6 border-2 border-black dark:border-white">
              <h2 className="text-xl font-bold mb-2 text-black flex items-center justify-start gap-4 dark:text-white">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 64 64"
                    width="48"
                    height="48"
                  >
                    <path
                      fill="currentColor"
                      d="M58 46V16a4 4 0 0 0-4-4H10a4 4 0 0 0-4 4v30zm-04 6H10a4 4 0 0 1 0-8h44a4 4 0 0 1 0 8z"
                    />
                  </svg>
                </div>
                <div className="text-xl">
                  <span className="text-3xl relative">Frontend Dev</span>
                  <div className="w-full bg-blue-500 h-2.5 relative"></div>
                  React, Next JS
                </div>
              </h2>
              <div className="flex justify-center items-center">
                <p className="text-gray-500">
                  {"<h3>"}{" "}
                  <svg width="50" height="150">
                    <line
                      x1="15"
                      y1="0"
                      x2="15"
                      y2="200"
                      stroke="#555555"
                      strokeWidth="2"
                    />
                  </svg>
                  {"</h3>"}{" "}
                </p>
                <p className="text-black dark:text-white">
                  Passionate about UI/UX. Over 2 years of development experience
                  in HTML, CSS, JS, React and NextJS frameworks.
                </p>
              </div>
            </div>
            {/* card two ends */}
            {/* card three starts */}
            <div className="bg-transparent p-6 border-2 border-black dark:border-white">
              <h2 className="text-xl font-bold mb-2 text-black flex items-center justify-start gap-4 dark:text-white">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 64 64"
                    width="48"
                    height="48"
                  >
                    <rect
                      x="10"
                      y="4"
                      width="44"
                      height="56"
                      rx="4"
                      fill="currentColor"
                    />
                    <rect
                      x="14"
                      y="8"
                      width="36"
                      height="4"
                      fill={isDarkMode ? "#000" : "#fff"}
                    />
                    <rect
                      x="14"
                      y="16"
                      width="36"
                      height="4"
                      fill={isDarkMode ? "#000" : "#fff"}
                    />
                    <rect
                      x="14"
                      y="24"
                      width="36"
                      height="4"
                      fill={isDarkMode ? "#000" : "#fff"}
                    />
                    <circle cx="16" cy="8" r="2" fill="currentColor" />
                    <circle cx="48" cy="8" r="2" fill="currentColor" />
                    <circle cx="16" cy="24" r="2" fill="currentColor" />
                    <circle cx="48" cy="24" r="2" fill="currentColor" />
                  </svg>
                </div>
                <div className="text-xl">
                  <span className="text-3xl relative">Full Stack Dev</span>
                  <div className="w-full bg-cyan-400 h-2.5 relative"></div>
                  React, Node JS
                </div>
              </h2>
              <div className="flex justify-center items-center">
                <p className="text-gray-500">
                  {"<h3>"}{" "}
                  <svg width="50" height="150">
                    <line
                      x1="15"
                      y1="0"
                      x2="15"
                      y2="200"
                      stroke="#555555"
                      strokeWidth="2"
                    />
                  </svg>
                  {"</h3>"}{" "}
                </p>
                <p className="text-black dark:text-white">
                  Proficient in MERN stack. Over 1 year of experience in
                  developing full stack applications using React, NodeJS and
                  MongoDB.
                </p>
              </div>
            </div>
            {/* card three ends */}
          </div>
        </div>
      </div>
    </div>
  );
}
