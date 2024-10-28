import React from "react";
// USING JSX COMPONENT
/*const Hello = () => {
    return (
        <div> <h1>Hello JSX is Cool</h1></div>
    )
}*/
//USING JSX Element with NULL
/*return React.createElement('div',
                            null,
                            React.createElement('h1',null,'Hello JSX is Cool'));*/
//USING JSX Element with out NULL
const Hello = () => {
return React.createElement('div',
                            {id : 'hello1',className : 'HelloClass'},
                            React.createElement('h1',null,'Hello JSX is Cool'));
}
export default Hello;