import React from 'react'

export default function Footer() {
  return (
    <div className='bg-black text-white font-yantramanav'  >
      <div className='d-flex justify-content-center align-items-center p-1 text-center'><h4 className='m-0 align-self-center'>Flaskin</h4></div>
        <div className='d-flex justify-content-between'>
         <div className='px-md-5 px-3'>
          <div>SERVICES</div>
              <ul>
                <li>
                  FAQ
                </li>
                <li>
                  SHIPPING
                </li>
                <li>
                  TRACKING
                </li>
                <li>
                  RETURN
                </li>
              </ul>
         </div>
          
          <div className='px-md-5 px-3'>
            <div>FOLLOW US</div>
              <ul>
                <li>
                  FACEBOOK
                </li>
                <li>
                  TWITTER
                </li>
                <li>
                  INSTAGRAM
                </li>
              </ul>
            </div>
        </div>
    </div>
  )
}
