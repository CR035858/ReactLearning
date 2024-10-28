import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message : 'Hello!!! Good Day'
      }
    }
    clickHandler(){
        this.setState({
            message : 'Good Bye!'
        })
    }
  render() {
    return (
      <div>
        {this.state.message}
        <button onClick={this.clickHandler.bind(this)}>Click </button>
      </div>
    )
  }
}

export default EventBind
