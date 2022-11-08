import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {

    constructor(props) {
      super(props)
    /**
     * @state parentName
     */
      this.state = {
         parentName: 'parent'
      }

      this.greetParent = this.greetParent.bind(this)
    }

    /**
     * @name greetParent
     * @param {*} childName 
     */
    greetParent(childName) {
        alert(`Hello ${this.state.parentName}  from ${childName}` )
    }


  render() {
    return (
      <div>
        <ChildComponent greetHandler={this.greetParent}/>
      </div>
    )
  }
}

export default ParentComponent