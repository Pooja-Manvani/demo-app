import React, { Component } from 'react'

class LifeCycleB extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Pooja'
      }
      console.log('LifeCycleB Constructor');
    }

    /**
     * @name getDerivedStateFromProps
     * @param {*} props 
     * @param {*} state 
     * @returns null
     */
    static getDerivedStateFromProps(props, state) {
        console.log('LifeCycleB getDerivedStateFromProps')
        return null
    }

    /**
     * @name componentDidMount
     */
    componentDidMount() {
        console.log('LifeCycleB componentDidMount');
    }
    
    /**
     * @name shouldComponentUpdate
     * @returns true
     */
    shouldComponentUpdate() {
        console.log('LifeCycleB shouldComponentUpdate');
        return true 
    }

    /**
     * @name getSnapshotBeforeUpdate
     * @param {*} prevProps 
     * @param {*} prevState 
     * @returns null
     */
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('LifeCycleB getSnapshotBeforeUpdate')
        return null
    }

    /**
     * @name componentDidUpdate
     */
    componentDidUpdate(){
        console.log('LifeCycleB componentDidUpdate')
    }
  render() {
    console.log('LifeCycleB render');
    return (
      <div>
        LifeCycle B
      </div>
    )
  }
}

export default LifeCycleB