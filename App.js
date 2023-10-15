import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header'
import Footer from './components/Footer' 
import Body from './components/Body'
import { createBrowserRouter,RouterProvider,Outlet } from 'react-router-dom'
import About from './components/About'
import Contact from './components/Contact'
import Error from './components/Error'
import RestaurantMenu from './components/RestaurantMenu'
import Profile from './components/Profile'
import UserContext from './utils/UserContext'
import Cart from './components/Cart'
import { Provider } from 'react-redux'
import store from './utils/Store'



const MyApp=()=>{

    const [user,setUser]=useState({
        user:{
           name:'Jai Joura',
           mailId:'jj@gmail.com' 
        }
    })

    return(
        <Provider store={store}>
        <UserContext.Provider value={{user:user.user, setUser:setUser}} >
<Header/>
<Outlet/>
<Footer/>
        </UserContext.Provider>
        </Provider>
    )
}
const appRouter = createBrowserRouter([
{
    path:'/',
    element:<MyApp/>, 
    errorElement:<Error/>,
    children:[
        {
            path:'/',
            element:<Body user={{name:'jaiJoura',mailId:'gg@gmail.com'}}/>,
        }
        ,{   
    path:'/about',
    element:<About/>,
    children:[{
        path:'profile',
        element:<Profile/>
    }]
},      {
    path:'/contact',
    element:<Contact/>
},{
    path:'/cart',
    element:<Cart/>
},
{
    path:'/restaurants/:id',
    element:<RestaurantMenu/>,
}
    ]
}
])


const root = ReactDOM.createRoot(document.getElementById('root')) // Create Root element for the React DOM
root.render(<RouterProvider router={appRouter}/>)