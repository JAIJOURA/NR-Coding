import { useRouteError } from "react-router-dom"
const Error = () => {
    const {status,statusText} = useRouteError() // some cool dudes do in this way
    // const {status,statusText}=err // this is old way old dude
    
    return(
        <div className="m-10">
        <h1>Errorrrrrrrr......!!!!!</h1>
        <h1>Whatttttt are you doing Mr. Developerr </h1>
        <h2>Something gone Wrong</h2>
        <h1>{status} : {statusText}</h1>
        </div>
    )
}
export default Error