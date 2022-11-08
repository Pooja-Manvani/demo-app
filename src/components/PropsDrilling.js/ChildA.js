import React from 'react'
import ChildB from './ChildB'

/**
 * @name ChildA
 * @param {*} 0
 */
export default function ChildA() {
  return (
    <div style={{border:'3px solid red'}}>
        <h1>Child A</h1>
        <ChildB name={'Pooja'} />
    </div>
  )
}
