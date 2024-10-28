import React from 'react'

function ChildComponent(props) {
  return (
    <div>
      <button onClick={props.greetHandler}>Greet Parent Without Parameter</button>
    </div>
  )
}

export default ChildComponent
