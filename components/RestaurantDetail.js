import Img from "../config"
const RestaurantDetail = ({restaurantDetails})=>{
    return(<>
    <div className="flex justify-between">
<div >
<h1 className="font-bold text-xl">{restaurantDetails.name}</h1>
<h2 className="text-sm mt-2">{restaurantDetails.cuisines.join(' ')}</h2>
<h2 className="text-sm my-1">{restaurantDetails.areaName}, {restaurantDetails.sla.lastMileTravelString}</h2>

</div>
<div >
<h2 className="p-8 font-semibold text-green-700 text-sm"><i className="fa-solid fa-star"></i>{restaurantDetails.avgRatingString}</h2>
</div>
 </div>
 <hr className="my-3.5" />
 <ul className="flex my-2 font-bold text-sm">
    <li className="mx-2" ><i className="fa-solid fa-clock"></i> {restaurantDetails.sla.slaString}</li> 
    <li className="mx-2">{restaurantDetails.costForTwoMessage}</li>   
 </ul>
 <hr className="my-3.5" />
    </>)
}
export default RestaurantDetail