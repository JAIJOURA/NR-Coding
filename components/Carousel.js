const Carousel = ({name,url,imgData,height})=>{
    return (
        
        <div className="mx-[200px] my-4 hover:cursor-pointer">
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
                
                <div className={`flex flex-nowrap h-${height} overflow-hidden`}>
                  {imgData.map((data)=>{
                    return(
                        
                        <img className="ml-4" src={` ${url}${data.imageId} `} key={data.id}  alt="" />
                    
                    )
                    
                  })}
                  
                </div>
        </div>
    )
}

export default Carousel