import { useState,useEffect } from "react"
const useRestaurantList = ()=>{
const [restaurantList, setrestaurantList] = useState([])
const [filterRestaurantList, setFilterRestaurantList] = useState([])
useEffect(()=>{
getData()
},[] )

async function getData (){
  try {
    const data = await fetch('https://www.swiggy.com/dapi//restaurants/list/v5?lat=28.3806458&lng=77.3019278&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')
  const json = await data.json()
  setrestaurantList(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  setFilterRestaurantList(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

  } catch (error) {
    console.log(error.name)
  }
}
// if i put state variable in useEffect dependency it will call evertyime when the state updates
// if it is empty it means it while be called once after the first render executed
// console.log('its me Render Lmao🎅') // Render happened first and then useEffect call

return [restaurantList, filterRestaurantList]
}
export default useRestaurantList