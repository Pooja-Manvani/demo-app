import React from "react";
import { useUserAuth } from "../context/AuthContext";

export default function Header(props) {

  // const { user } = useUserAuth();
  const wapperHeader = `wrapper-header ${props.scrollClass}`;
  return (
    <div className={wapperHeader}>
      <div className="d-flex flex-direction-column justify-content-between font-yantramanav">
        <div>
          <h2 className="text-black ps-5 text-align-center m-0">
            <i>F</i>laskin
          </h2>
        </div>
        <div className="menu-display  px-4 ">
          <div className="pe-5">
            <a
              href="home"
              className="text-black text-decoration-underline-black "
            >
              HOME
            </a>
          </div>
          <div className="pe-5">
            <a
              onClick={props.scrollDown}
              className="text-black text-decoration-underline-black"
            >
              ABOUT US
            </a>
          </div>
          <div className="pe-5">
            <a
              onClick={props.getOpenModal}
              className="text-black text-decoration-underline-black"
            >
              LOG-IN
            </a>
            <a className="text-black text-decoration-underline-black d-none">
              LOG-OUT
            </a>
          </div>
          <div className="pe-5">
            <span href="search" className="text-black  icon-search"></span>
            <span href="bag" className="text-black ps-5 icon-bag"></span>
          </div>

          <div id="menuToggle" className="align-items-center pt-1">
            <input type="checkbox" />
            <span></span>
            <span></span>
            <span></span>
            <ul id="menu">
              <a href="#">
                <li>Home</li>
              </a>
              <a href="#">
                <li>About</li>
              </a>
              <a href="#">
                <li>Info</li>
              </a>
              <a href="#">
                <li>Contact</li>
              </a>
              <a href="https://erikterwan.com/" target="_blank">
                <li>Show me more</li>
              </a>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
