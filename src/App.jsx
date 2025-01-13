import "./App.css";
import Cursor from "./components/Cursor";
import Expertise from "./components/Expertise";
import Featured from "./components/Featured";
import Header from "./components/Header";
import ScrollToTopButton from "./components/ScrollToTopButton";

function App() {
  return (
    <div className="w-full bg-[#f8f9f9] dark:bg-[#10121A] ">
      <Header />
      <Expertise />
      <Featured />
      <ScrollToTopButton />
      <Cursor />
    </div>
  );
}

export default App;
