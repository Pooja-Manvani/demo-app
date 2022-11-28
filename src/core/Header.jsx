import React  from 'react'
// import sample from '../assets/media/Logo.mp4'


export default function Header() {  
  return (
    <div className='wrapper-header'>
      <div  className='d-flex flex-direction-column justify-content-between '>
        <div  >
          <h2 className='text-black ps-5 text-align-center m-0'><i>F</i>laskin</h2>
        </div>
        <div className='align-self-center justify-content-flex-end px-4 d-flex'>
          <div className='pe-5' >
            <a href='home' className='text-black text-decoration-underline-black' >Home</a>
          </div >
          <div className='pe-5' >
            <a href='about' className='text-black text-decoration-underline-black' >About Us</a>
          </div>
          <div className='pe-5' >
            <a href='login' className='text-black text-decoration-underline-black' >Login</a>
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
