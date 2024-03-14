import "./App.css";
import Cardcontainer from "./component/Cardcontainer";
import Header from "./component/Header";
import Home from "./component/Home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <ToastContainer position="top-right"/>
    </div>
  );
}

export default App;