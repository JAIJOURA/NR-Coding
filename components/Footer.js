import { useContext } from "react"
import UserContext from "../utils/UserContext"

const Footer = ()=>{
    const {user} = useContext(UserContext)
    return(
        <div className="text-center font-bold ">Made with Love by - {user.name}  {user.mailId}</div>
    )
}
export default Footer