import React  from 'react'
import { useNavigate } from 'react-router-dom'
// import sample from '../assets/media/Logo.mp4'


export default function Header() {
  const navigate = useNavigate()
  
  return (
    <div className='wrapper-header'>
      <div  className='justify-content-between d-flex'>
        <div>
          <h4 className='text-white'>Beauty is Power</h4>
          {/* <video className='videoTag logo-custom' autoPlay loop muted>
              <source src={sample} type='video/mp4' />
          </video> */}
        </div>
        <div className='align-self-center px-4'>
          <button className='btn-custom border-radius-2' onClick={() => {navigate("/mainLayout")}} >Login </button>
        </div>
      </div>
    </div>
  )
}
