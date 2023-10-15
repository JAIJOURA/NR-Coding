import { useSelector } from "react-redux"
import CartItem from "./CartItem"


const Cart = ()=>{
    const cartItems = useSelector((store)=>store.cart.items)
    console.log(cartItems)
    const cartTotal = useSelector((store)=>store.amount.amount)
    const deliveryCharges = 50;
    const charges = cartTotal*10/100
    const platformCharges = 5
    return(
            <div className="h-screen bg-[#E9ECEE]" >
        <div className="mx-[350px] py-8 ">
<div className="h-96 w-[65%] float-left mx-7 bg-white">
    <div className="h-36 p-10">
        <h1 className="font-bold text-base text-[#282C3F] ">Add a delivery Address</h1>
        <h1 className="font-normal text-base text-gray-400">You seem to be in the new location</h1>
        <button className="flex justify-between text-left p-7 mt-8 border-gray-200 border-[1px] tracking-wide"> 
            <h1><i className="fa-solid fa-location-dot text-green-600"></i></h1> 
            <div className="ml-4">
                <h1 className="font-semibold text-base" >Add New Address</h1>
                <p className="text-xs text-gray-400">Badapur, Maharashtra 431202, India</p>

                <div className="mt-8"> <button  className=" font-bold py-1 px-8 text-green-600 border-[1px] border-green-600">Add New</button></div>
            </div>
        </button>
    </div>
</div>
        <div className="w-[30%] float-right"> 
            <div className="min-h-[600px] bg-white ">
                {cartItems.map((item)=>{
                    return(
                        <CartItem {...item} key={item.id}/>
                    )
                })}

                <h1 className="bg-[#F9F9F9]  mx-8 my-4 p-4">
                    <p className="text-xs font-semibold text-gray-400 tracking-wide">
                    Any Suggestion? We will Pass it on....
                    </p></h1>
                <div className="flex mx-8 my-4 px-4 py-1 border-gray-400 border-[1px]">
                    <input type="checkbox" className="h-5"/>
                    <div className="ml-3 ">
                       <h1 className="text-sm font-semibold tracking-wide">Opt in for No Contact Delivery</h1> 
                       <p className="text-xs font-semibold text-gray-400 tracking-wide">Unwell, or avoiding contact? Please select no-contact delivery. Partner will safely place the order outside your door (not for COD)</p>
                        </div>
                </div>
                <div className="border-dashed mx-8 my-4 p-4 border-[1px] border-black font-normal text-sm"><i className="fa-solid fa-percent mr-3 text-gray-500"></i> Apply Coupon</div>
                <div className="mx-8 my-4 text-xs text-gray-600 tracking-wide">
                    <h1 className="font-medium text-black">Bill Details</h1>
                    <p className="flex justify-between my-3 "><span>Item Total</span> <span>₹{cartTotal}</span></p>
                    <p className="flex justify-between my-3"><span>Delivery Fee</span> <span>₹{deliveryCharges}</span></p>
                    <hr />
                    <p className="flex justify-between my-3"><span>Platform fee</span> <span>₹{platformCharges}</span></p>
                    <p className="flex justify-between my-3"><span>GST and Restaurant Charges</span> <span>₹{charges}</span></p>

                    <hr className="h-1 bg-black mt-4"/>
                    <p className="flex justify-between py-4 font-bold text-base"><span>TO PAY</span> <span>₹{cartTotal + deliveryCharges + platformCharges + charges} </span></p>

                </div>

            </div>
            <div className="bg-white px-8 py-4"> 
                <div className="border-gray-200 border-[1px] rounded-md ">
                    <div className="m-4">
                        <h1 className="font-semibold text-base">Review your order and address details to avoid cancellations</h1>
                        <p className="text-xs my-4 "><span className="text-[#FF0000]">Note: </span>
                         If you cancel within 60 seconds of placing your order, a 100% refund will be issued. No refund for cancellations made after 60 seconds.
                        <p className="text-gray-500 mt-4">Avoid cancellation as it leads to food wastage.</p>
                        </p>
                        <p className="text-[#FF0000] underline underline-offset-4 text-sm">Read cancellation policy</p>
                    </div>
                </div>
            </div>
            </div>
            
        </div>



            </div> 
    )
}
export default Cart  