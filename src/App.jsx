import "./App.css";
import Cursor from "./components/Cursor";
import Header from "./components/Header";

function App() {
  return (
    <div className="w-full h-screen bg-white dark:bg-black ">
      <Header />
      <Cursor />
    </div>
  );
}

export default App;
