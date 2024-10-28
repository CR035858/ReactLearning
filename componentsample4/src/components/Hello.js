import React from "react";

const Hello = () => {
  /*   return (
        <div>
            <h1>Hello Chandra This is JSX</h1>
        </div>
    ) */

    return React.createElement('div',{ id : 'Hello', className :'dummyclass'}, React.createElement('h1',null,'Hello Chandra This is Non JSX'))
}

export default Hello