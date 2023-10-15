import { Outlet } from "react-router-dom"
import Profile from "./Profile"
import ProfileClass from "./ProfileClass"

const About = ()=>{
return(
    <>
    {/* <h1>Im the about of this application</h1>
    <h1>Im the about of this application</h1>
    <h1>Im the about of this application</h1>
    <h1>Im the about of this application</h1> */}
    {/* <Profile name ='jai_joura'/> */}

    <Outlet/>
    <ProfileClass  name='joura_jai'/>
    </>
    
)
}
export default About