import React from 'react'
import  ReactDOM  from 'react-dom'

function PortalDemo() {
  return ReactDOM.createPortal(
    <h1>PortalDemo</h1>,
    document.getElementById('portal-demo')
  )
}

export default PortalDemo