import React from 'react'

export default function Shimmer() {
  return (
    <>
    <div className="text-center m-3" >
    <input type="text" className="search-input" placeholder="Search"/>
    <button className="search-btn" >Search</button>
  </div>
    <div className='mx-[200px] flex flex-wrap'>
      {Array(12).fill('').map((e,index)=>( <div className="h-72 w-[340px] mx-4 my-4 " key={index}><div className='rounded-2xl bg-gray-200 h-52'></div> 
      <h1 className='h-7 w-28 bg-gray-200 my-1 mx-3 rounded-lg ' ></h1>
       <h1 className="h-4 w-32 bg-gray-200 my-1 mx-3 rounded-lg"></h1>
        <h1 className="h-4 w-54 bg-gray-200 my-1 mx-3 rounded-lg"></h1>
        <h1 className="h-4 w-24 bg-gray-200 my-2 mx-3 rounded-lg"></h1>
      </div>))}
    {/* <div className="shimmer"><div className='shimmer-img'></div></div>
    <div className="shimmer"><div className='shimmer-img'></div></div>
    <div className="shimmer"><div className='shimmer-img'></div></div>
    <div className="shimmer"><div className='shimmer-img'></div></div>
    <div className="shimmer"><div className='shimmer-img'></div></div>
    <div className="shimmer"><div className='shimmer-img'></div></div>
    <div className="shimmer"><div className='shimmer-img'></div></div> */}
</div>
    </>
  )
}
{/* <img className="rounded-2xl" src={'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/' + cloudinaryImageId } alt="KFC" />
            <h1 className="font-bold text-xl my-1 mx-3">{name}</h1>
            <h3 className="my-1 mx-3">{costForTwo}</h3>
            <h3 className="my-1 mx-3">{cuisines.join(', ')}</h3>
            <h3 className="my-2 mx-3">{areaName}</h3 */}