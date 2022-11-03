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

    static getDerivedStateFromProps(props, state) {
        console.log('LifeCycleA getDerivedStateFromProps')
        return null
    }

    componentDidMount() {
        console.log('LifeCycleA componentDidMount');
    }

    shouldComponentUpdate() {
        console.log('LifeCycleA shouldComponentUpdate');
        return true 
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('LifeCycleA getSnapshotBeforeUpdate')
    }

    componentDidUpdate(){
        console.log('LifeCycleA componentDidUpdate')
        return null
    }

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