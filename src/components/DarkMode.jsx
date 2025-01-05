import { useDarkMode } from "../contexts/DarkModeContext";

const DarkMode = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <>
      <input
        checked={isDarkMode}
        onChange={toggleDarkMode}
        type="checkbox"
        className="peer sr-only opacity-0"
        id="toggle"
      />
      <label
        htmlFor="toggle"
        className="relative flex h-6 w-11 cursor-pointer items-center rounded-full bg-gray-400 px-0.5 outline-gray-400 transition-colors before:h-5 before:w-5 before:rounded-full before:bg-white before:shadow before:transition-transform before:duration-300 peer-checked:bg-gray-600 peer-checked:before:translate-x-full peer-focus-visible:outline peer-focus-visible:outline-offset-2 peer-focus-visible:outline-gray-400 peer-checked:peer-focus-visible:outline-green-500"
      >
        <span className="sr-only">Enable</span>
      </label>
    </>
  );
};

export default DarkMode;
