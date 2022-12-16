import React from "react";
import { useState } from "react";
import { useUserAuth } from "../context/AuthContext";

export default function Header(props) {
console.log('====================================');
console.log(props,'header props');
  const [showSearchBox, setSearchBox] = useState(false);
  const { user, logOut } = useUserAuth();
  const handleSignOut = async () => {
    try{
     await logOut();
    }catch(err){
      return err.message;
    }
  }
  const wapperHeader = `wrapper-header ${props.scrollClass}`;
  return (
    <div className={wapperHeader}>
      {showSearchBox && <div className="searchBoxCustom">
            <input id="globalSearch" type="text" className="ps-2 border-0 cursor-pointer form-control "></input>
            <div>
              <span onClick={()=>setSearchBox(false)} className="icon-close fs-5 p-2"></span>
            </div>
          </div>}
      <div className="d-flex flex-direction-column justify-content-between font-yantramanav">
        <div>
          <h2 className="text-black ps-5 text-align-center m-0">
            <i>F</i>laskin
          </h2>
        </div>
        <div className="menu-display  px-4 ">
          <div className="pe-5">
            <a
              onClick={()=>window.location.reload()}
              className="text-black text-decoration-underline-black cursor-pointer"
            >
              HOME
            </a>
          </div>
          <div className="pe-5">
            <a
              onClick={props.scrollDown}
              className="text-black text-decoration-underline-black cursor-pointer"
            >
              ABOUT US
            </a>
          </div>
          <div className="pe-5">
            {!user && <a
              onClick={props.getOpenModal}
              className="text-black text-decoration-underline-black cursor-pointer"
            >
              LOG-IN
            </a>}
            {user && <a onClick={() => handleSignOut()} className="text-black text-decoration-underline-black cursor-pointer">
              LOG-OUT
            </a>}
          </div>
          <div className="pe-5">
            <label htmlFor="globalSearch">
              <span onClick={()=>setSearchBox(true)} className="text-black  icon-search cursor-pointer"></span>
            </label>
            {user && <span href="bag" className="text-black ps-5 icon-bag cursor-pointer"></span>}
          </div>
         

          {user && <div id="menuToggle" className="align-items-center pt-1 cursor-pointer">
            <input type="checkbox" />
            <span></span>
            <span></span>
            <span></span>
            <ul id="menu">
              <a onClick={()=>window.location.reload()}>
                <li>Home</li>
              </a>
              <a onClick={props.scrollDown}>
                <li>About</li>
              </a>
              <a >
                <li>Product</li>
              </a>
              <a href="#">
                <li>wishlist</li>
              </a>
              <a onClick={() => handleSignOut()} >
                <li>Log-out</li>
              </a>
            </ul>
          </div>}

              
        </div>
      </div>
    </div>
  );
}
