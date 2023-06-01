import "./App.css";
import NavBar from "./components/NavBar";
import Login from "./components/Login";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Register from "./components/Register";
import Home from "./components/Home";


function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home/>}></Route>
      <Route path="/signin" element={<Login/>}></Route>
      <Route path="/signup" element={<Register/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
