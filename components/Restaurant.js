import { useContext } from "react"
import UserContext from "../utils/UserContext"

const Restaurant = ({name,costForTwo,cuisines,areaName,cloudinaryImageId,width})=>{
const {user} = useContext(UserContext)
    return(
        <div className={`card w-[${width}px] mx-4 my-4 leading-5  hover:scale-95  duration-150 hover:cursor-pointer `}>
            <img className="rounded-2xl drop-shadow-lg" src={'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/' + cloudinaryImageId } alt="KFC" />
            <h1 className="font-bold text-xl my-1 mx-3">{name}</h1>
            <h3 className="my-1 mx-3">{costForTwo}</h3>
            <h3 className="my-1 mx-3">{cuisines.join(', ')}</h3>
            <h3 className="my-2 mx-3">{areaName}</h3> 
           
        </div>
    )
}  

export default Restaurant