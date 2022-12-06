import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from "./Components/Home";
import Header from "./core/Header";
import Footer from "./core/Footer";
import { useState } from "react";
import { BrowserRouter } from 'react-router-dom';

function App() {
  let scrollRef 
  // scrollClass 

  const [scrollClass, setscrollClass] = useState('')
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

  return (
    <BrowserRouter>
    <div className="h-100 overflow-auto" onScroll={showHeader}>
      <Header scrollClass={scrollClass} scrollDown={scrollDown} />
      <Home  getRef={getRef}/>
      <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
