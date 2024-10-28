import React, { Component } from 'react'

class UserGreeting extends Component {
constructor(props) {
  super(props)

  this.state = {
        isLoggedIn : true
  }
}


  render() {
    //METHOD 4 - Short Circuit approach
   return  this.state.isLoggedIn && <div> Welcome Great Indians</div>


    //METHOD 3 Conditional Ternary Operator

   // return this.state.isLoggedIn ? ( <div>Welcome Great Indians </div>) : (<div> Welcome Guests</div>)


    // METHOD 2 If else with variable

   /*  let message 
    if (this.state.isLoggedIn) {
        message = <div> Welcome Great Indians</div>
    }
    else {
        message = <div>Welcome Guests </div>
    }

    return <div> {message} </div> */


    //METHOD 1 if else without variable
   /*  if(this.state.isLoggedIn){
        return <div> Welcome Great Indians </div>
    }
    else
    {
        return <div> Welcome Guests</div>
    } */
      
     }
}

export default UserGreeting
