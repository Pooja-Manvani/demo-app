import React, { Component } from 'react'
import { Button } from 'react-bootstrap'

  class EventBind extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         message: 'Hello there!'
      }

    //   this.clickHandler = this.clickHandler.bind(this)
    }

    // clickHandler () {
    //     this.setState({
    //         message: 'Goodbye !'
    //     })
    //     console.log(this);
    // }

    // Class property as Arrow Function (Best practise)
    clickHandler = () => {
        this.setState({
            message: 'Goodbye !'
        })
    }

  render() {
    return (
      <div>
        <div>
            {this.state.message}
        </div>
        {/* <Button onClick={this.clickHandler.bind(this)}  >Click</Button> */}
        {/* <Button onClick={() => this.clickHandler()}  >Click</Button> */}
        {/*  bind in class constructor */}
        <Button onClick={this.clickHandler}  >Click</Button>
      </div>
    )
  }
}

export default EventBind