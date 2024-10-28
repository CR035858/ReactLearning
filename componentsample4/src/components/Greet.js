import React from 'react'
/* function Greet() {
    return <h1>Hello Welcome Chandra </h1>
} */

const Greet = (props) => {
    console.log(props.name)
    return (
    <div>
        <h1> Hello {props.name} Welcome Your Super Hero is {props.heroName}</h1>
        {props.children}
    </div>
    )
} /* */
// DESTRUCTURING PROPS
/*
const Greet = ({name,heroName}) => {
 
    return (
    <div>
        <h1> Hello {name} Welcome Your Super Hero is {heroName}</h1>
   </div>
    )
}*/
//SECOND WAY TO DESTRUCTURE
/*
const Greet = (props) => {
    const {name,heroName} = props
    console.log(props.name)
    return (
    <div>
        <h1> Hello {name} Welcome Your Super Hero is {heroName}</h1>
    </div>
    )
} */

export default Greet/*  */