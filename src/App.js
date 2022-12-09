import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from "./Components/Home";
import Header from "./core/Header";
import Footer from "./core/Footer";
import { useState } from "react";
import Login from "./Components/Login";
import { AuthContextProvider } from "./context/AuthContext";

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
    scrollRef =ref
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
      <Header scrollClass={scrollClass} scrollDown={scrollDown} getOpenModal={getOpenModal}  />
       <AuthContextProvider>
         {openModal && <Login closeModal={closeModal} openModal={openModal} />}
       </AuthContextProvider>
      <Home  getRef={getRef}/>
      <Footer />
    </div>
    
  );
}

export default App;
