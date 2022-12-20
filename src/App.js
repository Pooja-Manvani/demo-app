import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from "./Components/Home";
import Header from "./core/Header";
import Footer from "./core/Footer";
import { useState } from "react";
import Login from "./Components/Login";
import { AuthContextProvider } from "./context/AuthContext";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Cart from "./Components/Cart";


function App() {
  let scrollRef 
  // scrollClass 
  const [openModal,setOpenModel] = useState(false);
  const [scrollClass, setscrollClass] = useState('');

  const showHeader = (e) => {
    if (e.target.scrollTop > 60) {
      setscrollClass("showHeader");
    } else if (e.target.scrollTop < 60) {
      setscrollClass('')
    }
  };

  const getRef=(ref)=>{
    scrollRef = ref
  }
  const scrollDown = () => {
    scrollRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' }) 
  }
  const getOpenModal = () => {
   setOpenModel(true)
  }
  const closeModal = () => {
    setOpenModel(false)
  }

  return (
    
    <div className="h-100 overflow-auto" onScroll={showHeader}>
      <BrowserRouter>
       <AuthContextProvider>
        <Header scrollClass={scrollClass} scrollDown={scrollDown} getOpenModal={getOpenModal}/>
        <Home  getRef={getRef} />
        {openModal && <Login closeModal={closeModal} openModal={openModal} />}
        <Routes>
          <Route path="cart" element={<Cart />}></Route>
          <Route path="home" element={<Home getRef={getRef} />}></Route>

          {/* 👇️ redirect to /dashboard when user goes to / */}
          <Route path="/" element={<Navigate to="/home" />} />

          {/* 👇️ only match this when no other routes match */}
          <Route
            path="*"
            element={
              <div>
                <h2>404 Page not found</h2>
              </div>
            }
            />
        </Routes>
        <Footer />
       </AuthContextProvider>
       </BrowserRouter>
    </div>
    
  );
}

export default App;
