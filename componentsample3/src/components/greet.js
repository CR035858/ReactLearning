import React from "react";
//Stage 01
/*function Greet()
{
    return <h2>Welcome to REACT JS </h2>
}*/
//Stage 02
 // const Greet = () => <h1> Hello Welcome to Components</h1>

 //Stage 03
/* */ const Greet = (props) => <h1> Hello {props.name} Welcome to Components, Your Hero is {props.heroName}
 
 {props.children}
 </h1> 


export default  Greet
