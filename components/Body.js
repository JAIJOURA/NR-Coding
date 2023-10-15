import Restaurant from "./Restaurant"
import { useState,useEffect,useContext } from "react"
import Shimmer from "./Shimmer"
import { Link } from "react-router-dom"
import useOnline from "../utils/useOnline"
import UserContext from "../utils/UserContext"
import Carousel from "./Carousel"
import ResCarousel from "./ResCarousel"



const Body = ()=>{
const [searchInput, setSearchInput] = useState('')
const [topRes,setTopRes]=useState('')
const [restaurantList, setrestaurantList] = useState([])
const [filterRestaurantList, setFilterRestaurantList] = useState([])
const [offerCarousel , setOfferCarousel]=useState([])
const [foodCarousel,setFoodCarousel]=useState([])
const offline = useOnline() 
const {user,setUser} = useContext(UserContext)

useEffect(()=>{
getData()
},[] )

async function getData (){
  try {
    const data = await fetch('https://www.swiggy.com/dapi//restaurants/list/v5?lat=28.3806458&lng=77.3019278&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')
  const json = await data.json()
  setrestaurantList(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  setFilterRestaurantList(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  setOfferCarousel(json?.data?.cards[0]?.card?.card?.imageGridCards?.info)
  setFoodCarousel(json?.data?.cards[1]?.card?.card?.imageGridCards?.info)
  setTopRes(json?.data?.cards[3]?.card?.card?.title)
  console.log(topRes)
  } catch (error) {
    console.log(error.name)
  }
}
// if i put state variable in useEffect dependency it will call evertyime when the state updates
// if it is empty it means it while be called once after the first render executed
// console.log('its me Render Lmao🎅') // Render happened first and then useEffect call
 
// bottom code is conditional rendering which is executed by ternary operator...
if(offline){
  return <div className=" text-center  my-10"> <p className="my-5 font-semibold text-3xl">Connect to the Internet</p>
  <p className="my-5 font-semibold">You're Offline. Check your connection</p>
  <button className="border-2 text-sky-600 px-3 font-semibold my-5 rounded-xl "> Retry</button>
  </div>
}
return (filterRestaurantList.length===0)? (<Shimmer/>): (
  <>
  <div className="search m-3 text-center">
    <input type="text" className="search-input" placeholder="Search" value={searchInput} onChange={(e)=>{
      setSearchInput(e.target.value)
    }}/>
    <button className="search-btn mx-3" onClick={()=>{
const data = restaurantList.filter((i)=>i.info.name.toLowerCase().includes(searchInput.toLowerCase()))

setFilterRestaurantList(data)

    }}>Search</button>
    {/* <input value={user.name} onChange={(e)=>{setUser({user:{...user,name:e.target.value}})}}  />
    <input  value={user.mailId} onChange={(e)=>{setUser({user:{...user,mailId:e.target.value}})}} /> */}
  </div>
  <Carousel name='Best offers for you' imgData={offerCarousel} url={'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/'} height={64}/>
 <Carousel name={`Jai, what's on your mind?`} imgData={foodCarousel} url={'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/'} height={48}/>
 <hr className="mx-[220px] my-8" />
  <ResCarousel name={`Top restaurant chains in Faridabad`} data={filterRestaurantList} />
 {/* {console.log(filterRestaurantList[0].info)} */}
 <hr className="mx-[220px] my-8" />
 <h1 className="mx-[200px] my-4 font-bold text-2xl p-4">{topRes}</h1>
    <div className='restaurant-lists mx-[200px] flex flex-wrap' >
      {
        
        filterRestaurantList.map((restaurant)=>{
            return(
<Link to={'/restaurants/'+restaurant.info.id} key={restaurant.info.id}>
<Restaurant {...restaurant.info} width={340}/>   

</Link>
            )
        })
      }  
    </div>



     </>
)
}

export default Body