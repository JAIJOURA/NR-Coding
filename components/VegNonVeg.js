const VegNonVeg = (props)=>{
    return(<div className={`h-4 w-4 border-2 border-${props.color}-700 flex items-center my-1`} >
<div className={`h-2 w-2 rounded-lg bg-${props.color}-700 m-auto`}></div>

    </div>)
}
export default VegNonVeg