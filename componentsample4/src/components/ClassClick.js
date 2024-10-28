import React, { Component } from 'react'

class ClassClick extends Component {
    clickHandler()
    {
        console.log('Clicked the Button...')
    }
  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>Click Me -Class Component</button>
      </div>
    )
  }
}

export default ClassClick
