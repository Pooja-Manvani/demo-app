import React from 'react'

/**
 * @name ChildA
 * @param {*} children 
 * @returns 
 */
export default function ChildA({children}) {
    console.log(children);
  return (
    <div style={{border:'5px solid blue'}}>
        <h1>Child A</h1>
        <div>{children}</div>
    </div>
    
  )
}
