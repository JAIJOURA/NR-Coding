import Restaurant from "./Restaurant"
const ResCarousel = ({name,data})=>{
    return (
        
        <div className="mx-[200px] my-4">
            <div className="flex justify-between p-4">
                <h1 className="font-bold text-2xl">{name}</h1>
                <div> 
                    <button className="cursor-pointer">
                    <i className="fa-solid fa-arrow-left text-xl mx-2 "></i>
                    </button>
                    <button className="cursor-pointer">
                      <i className="fa-solid fa-arrow-right text-xl mx-2 "></i>
                        
                    </button>
                      </div>
                      
                </div>
                
                <div className={`flex flex-nowrap h-72 overflow-hidden`}>
                  {data.map((data)=>{
                    
                    return(
                        <div>
                        <Restaurant {...data.info} key={data.info.id} width={280} />
                    </div>
                    )
                    
                  })}
                  
                </div>
        </div>
    )
}

export default ResCarousel