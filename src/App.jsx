import "./App.css";
import Cursor from "./components/Cursor";
import Expertise from "./components/Expertise";
import Header from "./components/Header";

function App() {
  return (
    <div className="w-full h-screen bg-white dark:bg-black ">
      <Header />
      <Expertise />
      <Cursor />
    </div>
  );
}

export default App;
