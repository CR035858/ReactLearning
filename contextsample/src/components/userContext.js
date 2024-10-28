import React from 'react'
/* Default Context value will be used if value is not provided by UserProvider*/
const UserContext = React.createContext('Technology Frame')

const UserProvider = UserContext.Provider
const UserConsumer = UserContext.Consumer

export {UserProvider, UserConsumer}
/*The following line is necessary if we wish to use the
Context directly as shown in ComponentE */
export default UserContext
