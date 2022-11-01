// Event Handler:
// Note: its a function and not a function call.
import React from 'react'
import { Button } from 'react-bootstrap'

function FunctionClick(props) {

    function clickHandler() {
        console.log('Button clicked');
    }

  return (
    <div>
        <Button onClick={clickHandler}>Click</Button>
    </div>
  )
}

export default FunctionClick
