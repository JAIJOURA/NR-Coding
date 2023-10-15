import { useDispatch } from "react-redux"
import Img from "../config"
import VegNonVeg from "./VegNonVeg"
import { addItem } from "../utils/cartSlice"
import { addAmt } from "../utils/cartTotal"
const MenuDetails = ({menu})=>{
const dispatch = useDispatch()
const handleAddItem = (item)=>{
dispatch(addItem(item));
}
const handleAddAmt = (amt)=>{
    dispatch(addAmt(amt));
    console.log(amt)
}

    return(
<>
<h2 className="font-bold text-lg my-4">Recommended</h2>
<ul>
{menu.map((menu)=>
<li key={menu?.card?.info?.id}>
    <div className="flex justify-between h-auto">
        <div className="w-[80%]">
{menu?.card?.info?.itemAttribute?.vegClassifier === 'VEG'? <VegNonVeg color='green'/> : <VegNonVeg color='red'/> }
 
       <p className="font-semibold">{menu?.card?.info?.name}</p> 
       <p className="text-sm my-1">₹{menu?.card?.info?.price/100}</p> 
       <p className="font-normal text-sm my-3 text-gray-400" >{menu?.card?.info?.description}</p> 

        </div>
        <div className="relative">
            <img className="h-24 w-[125px] rounded-lg " src={Img+menu?.card?.info?.imageId} alt="image" />
            <button onClick={()=>{handleAddItem(menu?.card?.info), handleAddAmt(menu?.card?.info?.price/100)}} className="text-green-600 text-sm font-bold w-24 h-8 border-gray-300 rounded border-[1px] bg-white absolute left-3.5 top-20 shadow hover:shadow-lg" >ADD</button>
        </div>
    </div>
    <hr className="my-5"/>
    </li> )}
</ul>
</>
    )
}
export default MenuDetails