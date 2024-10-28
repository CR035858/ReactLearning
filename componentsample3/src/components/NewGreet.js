import React from "react";

// PROPS DESTRUCTURING IN FUNCTION COMPONENT
const NewGreet = ({name,heroName}) => {
    // also destructuring can happen in the following way
    //const NewGreet = ({props}) => {
    // const {name,heroName} = props
    return (
        <div>
            <h1>
                Hello {name} Your Super Hero is {heroName}
            </h1>
        </div>
    )
}
export default NewGreet