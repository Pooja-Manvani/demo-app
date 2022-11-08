import React from 'react'

/**
 * @name ChildB
 * @param {*} props 
 */
export default function ChildB(props) {
  return (
    <div style={{border:'3px solid green'}}>
        <h1>Child B</h1>
        <h3>Hello {props.name}</h3>
    </div>
  )
}
