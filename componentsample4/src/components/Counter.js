import React, { Component } from 'react'

 class Counter extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         count : 0
      }
    }
    increment() {
     /*   this.state.count = this.state.count + 1;
        console.log(this.state.count) */

     /*   this.setState(
            {
                count : this.state.count + 1
            },
            () => {
                console.log('CallBack Value ',this.state.count)
            }
        )*/

        this.setState(prevState => ({
            count : prevState.count + 1
        }))
    }
    incrementFive() {
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }
    /* { <button onClick={()=> this.increment()}>Click to Increment</button>  }*/
  render() {
    return (
      <div>
       <div> Count - {this.state.count} </div>
      
       <button onClick={()=> this.incrementFive()}>Click to Increment</button>
      </div>
    )
  }
}

export default Counter
