import React from 'react'

/**
 * 
 * @param {*} setInputValue 
 * @returns Input value
 */
export default function Input({setInputValue}) {
    console.log({setInputValue})
  return (
    <div>
        <input type='number' onChange={(e) => setInputValue(e.target.value)}></input>
        
    </div>
  )
}
