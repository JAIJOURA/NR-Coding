import { useState,useEffect } from "react"

const useRestaurantMenu = (id) =>{
    const [restaurantDetails , setRestaurantDetails]=useState(null)
    const [menu , setMenu]=useState([])
    useEffect(()=>{
    getMenu()
    },[])
const getMenu = async()=>{
    const data = await fetch('https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.3806458&lng=77.3019278&restaurantId='+id)
    const json = await data.json()
    setRestaurantDetails(json?.data?.cards[0]?.card?.card?.info)
    setMenu(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards)

}
return [restaurantDetails,menu]
}
export default useRestaurantMenu