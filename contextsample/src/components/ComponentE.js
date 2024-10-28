import React, { Component } from 'react'
import ComponentF from './ComponentF'
import { UserConsumer } from './userContext'
import UserContext from './userContext'
class ComponentE extends Component {
  static contextType = UserContext
  render() {
    return (
        <div>
          Component E context {this.context}
    <UserConsumer>
        {
            username => {

                    return <div> Hello {username} </div>
            }
        }
     </UserConsumer>
             <ComponentF />
        </div>
    )
   
  }
}
/* ComponentE.contextType = UserContext -- TO USE THE CONTEXT USING {this.context} as in LINE 10
ANOTHER WAY TO USE CONTEXT IS 
*/
export default ComponentE
