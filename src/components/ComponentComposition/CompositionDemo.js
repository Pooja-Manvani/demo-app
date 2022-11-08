import React from 'react'
import ChildA from './ChildA'
import ChildB from './ChildB'

/**
 * @name CompositionDemo
 * @returns 
 */
function CompositionDemo() {
  return (
    <div style={{border:'3px solid yellow'}}>
        <h1>Composition Demo</h1>
        <ChildA>
            <ChildB name={'Siroan'} />
        </ChildA>
    </div>
  )
}

export default CompositionDemo
