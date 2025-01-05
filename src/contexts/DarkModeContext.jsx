import { createContext, useContext } from "react";

// Create the Dark Mode context
const DarkModeContext = createContext();

// Custom hook for consuming the context
export const useDarkMode = () => {
  const context = useContext(DarkModeContext);
  if (!context) {
    throw new Error("useDarkMode must be used within a DarkModeProvider");
  }
  return context;
};

export default DarkModeContext;
