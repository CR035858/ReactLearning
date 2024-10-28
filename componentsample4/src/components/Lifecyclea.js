import React, { Component } from 'react'
import Lifecycleb from './Lifecycleb'

 class Lifecyclea extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name : "Vishwas"
        }
      console.log("LifeCycle A Constructor")
    }
    
    static getDerivedStateFromProps(props,state) {
        console.log('Life Cycle A getDerivedStateFromProps called')
        return null
    }

    componentDidMount() {
        console.log('LifeCycleA component Did Mount')
    }
    shouldComponentUpdate(){
        console.log('Life CycleA should ComponentUpdate')
        return true;
    }

    getSnapshotBeforeUpdate(prevProps,prevState) {
        console.log('LifeCycleA getSnapshotBeforeUpdate')
        return  null
    }

    componentDidUpdate(){
        console.log("LifeCycleA ComponentDidUpdate Method invoked...")
    }
    changeState = () => {
        this.setState({
            name : 'CodeVolution'
        })
    }

  render() {
    console.log('Life Cycle A Render')
    return (
      <div>
        <div>LifeCycle A </div>
        <button onClick={this.changeState}>Change State</button>
        <Lifecycleb />
        
      </div>
    )
  }
}

export default Lifecyclea
