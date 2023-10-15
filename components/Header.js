import { useState } from "react"
import { Link } from "react-router-dom"
import useOnline from "../utils/useOnline"
import { useContext } from "react"
import UserContext from "../utils/UserContext"
import { useSelector } from "react-redux"
const Title = ()=>{
    return(
<img className='logo h-20' src="https://img.freepik.com/free-vector/happy-male-chef-holding-ramen-noodle-cartoon-icon-illustration_138676-2460.jpg?size=626&ext=jpg" alt="img" />
)
}
    const Header=()=>{
    const [loggedIn, setloggedIn] = useState(false)
    const isOnline = useOnline()
    // console.log(IsOnline)
// console.log(loggedIn)
// console.log(useState())
const {user} = useContext(UserContext)
const cartItem = useSelector(store=>store.cart.items)

    return (
        <div className='header sticky top-0 shadow-lg flex justify-between px-[350px] bg-white z-[1]'>
<Title/>
<div className="nav-items">
    <ul className="flex justify-between py-7 ">
        <li className="px-6 font-medium hover:text-[#F56A11] "><Link to='/'>Home</Link></li>
        <li className="px-6 font-medium hover:text-[#F56A11]"><Link to='/about'>About</Link></li>
        <li className="px-6 font-medium hover:text-[#F56A11]"> <Link to='/contact'>Contact</Link></li>
        <li className="px-6 font-medium hover:text-[#F56A11]"> <Link to='/cart'>{cartItem.length} Cart</Link></li>
        <li className="px-6 font-medium hover:text-[#F56A11]"><i className="fa-regular fa-user"></i> {user.name}</li>
        <li className="px-6 font-medium hover:text-[#F56A11]">{!isOnline?'✅':'🔴'}</li>
        <li className="px-6 font-medium hover:text-[#F56A11]">{loggedIn?<button onClick={()=>setloggedIn(false)}>Logout</button> : <button onClick={()=>setloggedIn(true)} >Login</button>}
        </li>
        
    
    </ul>
</div>
        </div>
    )
}
export default Header