import React  from 'react'
import { useNavigate } from 'react-router-dom';

export default function Header(props) {  
  const wapperHeader=`wrapper-header ${props.scrollClass}`;
  const navigate = useNavigate();
  return (
    <div className={wapperHeader}>
      <div  className='d-flex flex-direction-column justify-content-between font-yantramanav'>
        <div  >
          <h2 className='text-black ps-5 text-align-center m-0'><i>F</i>laskin</h2>
        </div>
        <div className='menu-display  px-4 '>
          <div className='pe-5' >
            <a href='home' className='text-black text-decoration-underline-black ' >HOME</a>
          </div >
          <div className='pe-5' >
            <a onClick={props.scrollDown} className='text-black text-decoration-underline-black' >ABOUT US</a>
          </div>
          <div className='pe-5' >
            <a onClick={() => navigate('/login')} className='text-black text-decoration-underline-black' >LOG-IN</a>
          </div>
          <div className='pe-5' >
            <span href='search' className='text-black  icon-search' ></span>
            <span href='bag' className='text-black ps-5 icon-bag' ></span>
          </div>
        </div>
      </div>
    </div>
  )
}
