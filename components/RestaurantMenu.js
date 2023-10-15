import { useParams } from "react-router-dom"
import Shimmer from "./Shimmer"

import useRestaurantMenu from "../utils/useRestaurantMenu"
import RestaurantDetail from "./RestaurantDetail"
import MenuDetails from "./MenuDetails"

const RestaurantMenu = ()=>{
    const {id} = useParams()

const [restaurantDetails,menu]= useRestaurantMenu(id);
    return (!restaurantDetails)?<Shimmer/>:(
        <div className="mx-[550px] mt-4 p-4">
        <RestaurantDetail restaurantDetails={restaurantDetails}/>
        
        <MenuDetails menu={menu}/>
        </div>
    )
}
export default RestaurantMenu