import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';

function App() {
  return (
    <div className="font-sans bg-[#0e1630] text-[#808dad]">
      <Header></Header>
      <Home></Home>
    </div>
  );
}

export default App;
