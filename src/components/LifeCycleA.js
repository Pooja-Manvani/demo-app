import React, { Component } from 'react'
import { Button } from 'react-bootstrap';
import LifeCycleB from './LifeCycleB';

class LifeCycleA extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Pooja'
      }
      console.log('LifeCycleA Constructor');
    }

    /**
     * 
     * @param {*} props 
     * @param {*} state 
     * @returns null
     */
    static getDerivedStateFromProps(props, state) {
        console.log('LifeCycleA getDerivedStateFromProps')
        return null
    }

    /**
     * @name componentDidMount
     */
    componentDidMount() {
        console.log('LifeCycleA componentDidMount');
    }

    /**
     * @name shouldComponentUpdate
     * @returns true
     */
    shouldComponentUpdate() {
        console.log('LifeCycleA shouldComponentUpdate');
        return true 
    }

    /**
     * @name getSnapshotBeforeUpdate
     * @param {*} prevProps 
     * @param {*} prevState 
     */
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('LifeCycleA getSnapshotBeforeUpdate')
    }

    /**
     * @name componentDidUpdate
     * @returns null
     */
    componentDidUpdate(){
        console.log('LifeCycleA componentDidUpdate')
        return null
    }

    /**
     * @description change state
     */
    changeState = () => {
        this.setState({
            name: 'Hello There!'
        })
    }


  render() {
    console.log('LifeCycleA render');
    return (
      <div>
        <div>LifeCycle A</div>
        <Button onClick={this.changeState} >Click me</Button>
        <LifeCycleB/>
      </div>
    )
  }
}

export default LifeCycleA