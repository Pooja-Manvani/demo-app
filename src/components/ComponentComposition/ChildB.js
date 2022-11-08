import React from 'react'

/**
 * @name ChildB
 * @param {*} props 
 * @returns 
 */
function ChildB(props) {
  return (
    <div style={{border:'3px solid orange'}}>
      <div>Child B</div>
        <h1>Hello {props.name}</h1>
    </div>
  )
}

export default ChildB
