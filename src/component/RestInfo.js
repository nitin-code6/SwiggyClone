import { use, useState } from "react";
import { CDN_URL } from "../data/constant";
import { VegIcon,NonVegIcon } from "../data/icon";
export default function RestInfo({items}){
    let icon;
    if(items?.card?.info?.isVeg) 
    {
        icon=<VegIcon/>;

    }
    else icon=<NonVegIcon/>;


   
    return (
        <div className="flex justify-between items-start py-6 border-b ">
            <div className="w-[65%]">
         <p className="text-sm text-gray-500 font-semibold">{items?.card?.info?.category}</p>
            {icon}
        <div>
        <p className="text-lg font-bold">{items?.card?.info?.name}</p>
        <p className="font-semibold mt-1">₹{(items?.card?.info?.finalPrice ?? items?.card?.info?.defaultPrice ?? items?.card?.info?.price)/100}</p>
        {/* <p>{items?.card?.info?.}</p> */}
        <p className="text-sm text-gray-600 mt-2 line-clamp-3">{items?.card?.info?.description}</p>
        </div>
        </div>
        <div className="relative  w-[150px]">
            <img src={`${CDN_URL}${items?.card?.info?.imageId}` } className="w-full h-[120px] object-cover rounded-lg"></img>
               <button className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-white text-green-600 border px-6 py-1 rounded shadow font-semibold">
          ADD
        </button>
        </div>
        </div>
    )
}