import React, { Component } from 'react'

class MyCounter extends Component {

    constructor(props){
        super(props)
        this.state = {
            count : 0
        }
    }
    increment() {
        //this.state.count = this.state.count + 1
    /*    this.setState(
            {
                count : this.state.count + 1
            },
            ()=>{ console.log('CallBack Value :',this.state.count)}
        ) */
        this.setState(prevState =>({
            count : prevState.count + 1
        }))
        console.log(this.state.count)
    }
    incrementFive()
    {
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }
  render() {
    return (
      <div>
        Hello Counter!!!{this.state.count}
        <button onClick={()=> this.incrementFive()}>
            Increment Count
         </button>
      </div>
    )
  }
}

export default MyCounter
