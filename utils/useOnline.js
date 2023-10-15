import { useState,useEffect } from "react"


const useOnline = ()=>{
    const [status, setStatus] = useState(false)
const handleOnline = ()=>{setStatus(false)}
const handleOffline = ()=>{setStatus(true)}

    useEffect(()=>{
        window.addEventListener('online',handleOnline)
        window.addEventListener('offline', handleOffline)
        return(()=>{
window.removeEventListener('online',handleOnline)
window.removeEventListener('offline',handleOffline)
        })
    },[])
    return status
}
export default useOnline
