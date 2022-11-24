import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import MainLayout from './Components/MainLayout';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Header from "./core/Header";
import Home from "./Components/Home";
import Login from "../src/Components/Login";
import SignUp from "../src/Components/SignUp";
import MainLayout from "./Components/MainLayout";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        {/* <MainLayout /> */}
        <Routes>
          <Route path="mainLayout" element={<MainLayout />}></Route>
          {/* <Route path="login" element={<Login/>} ></Route>
      <Route path="signUp" element={<SignUp/>} ></Route> */}
          <Route path="home" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signUp" element={<SignUp />}></Route>
          {/* 👇️ redirect to /dashboard when user goes to / */}
          <Route path="/" element={<Navigate to="/home" />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
