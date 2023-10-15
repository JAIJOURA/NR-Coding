import { createContext } from "react";
const UserContext = createContext({
    user:{
        name:'dummySingh',
        mailId:'dummySingh@gmail.com'
    }
})

export default UserContext
