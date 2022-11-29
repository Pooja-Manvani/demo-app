import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from "./Components/Home";
import Header from "./core/Header";
import Footer from "./core/Footer";
import { useState } from "react";

function App() {
  // scrollClass 
  const [scrollClass, setscrollClass] = useState('')
  const showHeader = (e) => {
    if (e.target.scrollTop > 60) {
      setscrollClass("showHeader");
    } else if (e.target.scrollTop < 60) {
      setscrollClass('')
    }
  };
  return (
    <div className="h-100 overflow-auto" onScroll={showHeader}>
      <Header scrollClass={scrollClass} />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
