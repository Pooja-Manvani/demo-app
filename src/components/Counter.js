import React, { Component } from 'react'
import { Button } from 'react-bootstrap'

export class Counter extends Component {

constructor(props) {
  super(props)

  this.state = {
     count : 0
  }
}

/**
 * @name increment
 * @description increment on clicking of button using useState.
 */
increment() {
    // this.state.count = this.state.count + 1
    // to reflect the count use setState
    this.setState({
        count: this.state.count + 1
    },() => {
        console.log('callback Value ' + this.state.count);
    })
}

  render() {
    return (
      <div>
        <div>Counter - {this.state.count}</div>
        <Button onClick={ () => this.increment() } >Increment</Button>
      </div>
    )
  }
}

export default Counter