import React, {Component} from "react";

class Welcome extends Component {
    //PROPS IN CLASS COMPONENT W/O DESTRUCTURING
   /* render(){
        return <h1>Welcome {this.props.name} Your Hero is {this.props.heroName}</h1>
    } */

    // PROPS DESTRUCTURING
    render(){
        const {name,heroName} = this.props
        // const {state1,state2} = this.state DESTRUCTURING STATE
        return <h1>Welcome {name} Your Hero is {heroName}</h1>
    }

}

export default Welcome