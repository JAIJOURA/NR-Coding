const CartItem = ({name, price})=>{
  return(
<div className="p-3 flex justify-between">
<h1>{name}</h1>
<h1>₹{price/100}</h1>
</div>


  )  
}

export default CartItem