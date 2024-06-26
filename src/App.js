import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import { ToastContainer } from "react-toastify";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App font-light bg-[#0e1630] text-[#808dad]">
      <Header></Header>
      <Home></Home>
      <ToastContainer />
      <Footer></Footer>
    </div>
  );
}

export default App;
