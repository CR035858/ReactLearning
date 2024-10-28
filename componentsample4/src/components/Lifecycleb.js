import React, { Component } from 'react'

class Lifecycleb extends Component {
  
    constructor(props) {
        super(props)
      
        this.state = {
           name : "Vishwas"
          }
        console.log("LifeCycle B Constructor")
      }
      
      static getDerivedStateFromProps(props,state) {
          console.log('Life Cycle B getDerivedStateFromProps called')
          return null
      }
  
      componentDidMount() {
          console.log('LifeCycle B  component Did Mount')
      }
  
      shouldComponentUpdate(){
        console.log('Life CycleB  should ComponentUpdate')
        return true;
    }

    getSnapshotBeforeUpdate(prevProps,prevState) {
        console.log('LifeCycleB getSnapshotBeforeUpdate')
        return  null
    }

    componentDidUpdate(){
        console.log("LifeCycleB ComponentDidUpdate Method invoked...")
    }

    render() {
      console.log('Life Cycle B Render')
      return (
        <div>
          LifeCycle B 
        </div>
      )
    }
}

export default Lifecycleb
