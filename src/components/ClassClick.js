  import React, { Component } from 'react'
  import { Button } from 'react-bootstrap'
  
  class  ClassClick extends Component {

    /**
     * @name clickHandler
     * @return
     */
    clickHandler (){
        console.log('Button Clicked');
    }

    render() {

      return (
        <div>
            <Button onClick={this.clickHandler}>Click me </Button>    
         </div>
      )
    }
  }
  
  export default  ClassClick