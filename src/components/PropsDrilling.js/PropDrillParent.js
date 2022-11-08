import React from 'react'
import ChildA from './ChildA'

/**
 * @name PropDrillParent
 * @returns DOM with cild component
 */
export default function PropDrillParent() {
  return (
    <div style={{border:'3px solid yellow'}}>
        <h1>
            Props Drilling Parent.
        </h1>
        <ChildA name={'Pooja'}/>
    </div>
  )
}
