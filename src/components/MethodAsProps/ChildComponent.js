import React from 'react'
import { Button } from 'react-bootstrap'

/**
 * @name ChildComponent
 * @param props
 * @return eventhandler to child
 */
function ChildComponent(props) {
  return (
    <div>
        <Button onClick={() => props.greetHandler('child')} >Greet parent </Button>
    </div>
  )
}

export default ChildComponent