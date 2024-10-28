import React, { Component } from "react";
class MyWelcome extends Component
{
   /* render()
    {
        const {name, heroName} = this.props
        return <h3>Class Component {this.props.name} .....{this.props.heroName}</h3>
    }*/
    //DESTRUCTURING props in CLASS COMPONENTS
    render()
    {
        const {name, heroName} = this.props
        return <h3>Class Component {name} .....{heroName}</h3>
    }
}
export default MyWelcome