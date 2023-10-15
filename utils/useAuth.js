import { useState } from "react"
const useAuth = ()=>{
const [loggedIn , setLoggedIn ] = useState(false)
return loggedIn
}
export default useAuth