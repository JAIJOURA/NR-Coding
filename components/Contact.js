import { useState } from "react"

const Section = (props)=>{
    
   return(<div className="border-2 border-black p-2 m-1 ">
    <div className="flex justify-between">
<h1 className="font-bold cursor-pointer">{props.name} </h1>
{props.isVisible ? <button className="mr-2" onClick={()=>{props.setIsVisible(false)}}> <i class="fa-solid fa-chevron-up"></i></button> : <button className="mr-2" onClick={()=>{props.setIsVisible(true)}}> <i class="fa-solid fa-chevron-down"></i></button>}
</div>
{ props.isVisible && <p>{props.description}</p>}
    </div>) 
}  
    


const Contact = ()=>{
// const [visibleConfig,setVisibleConfig]=useState({
//     showAbout:false,
//     showTeam:false,
//     showSupport:false,
// })
const [visibleSection,setVisibleSection]= useState()
    
    
    return(
    <div className="mx-[200px]  mt-12">
    <Section 
    name={'About'}
    description={'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."'}
isVisible ={visibleSection==='about'}
setIsVisible={()=>{
    visibleSection==='about' ? setVisibleSection(''): setVisibleSection('about')
 }}
/>
    <Section 
    name={'Team'}
    description={'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."'
}
isVisible ={visibleSection==='team'}
setIsVisible={()=>{
    visibleSection==='team' ? setVisibleSection(''): setVisibleSection('team')
}}
/>
    <Section 
    name={'Support'}
    description={'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."'
}
isVisible ={visibleSection==='support'}
    setIsVisible={()=>{
visibleSection==='support' ? setVisibleSection(''): setVisibleSection('support')
        
    }}
    />
    </div>
)}
export default Contact
            
