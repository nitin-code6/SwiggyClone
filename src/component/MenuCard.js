
import { useState } from "react";
import RestInfo from "./RestInfo"
export default function MenuCard({menuItems}){
     const [isOpen,setIsOpen]=useState(1);

    // console.log(menuItems.itemCards?.[0]?.card.info.id);
   
    // const filter_menuItems=menuItems.filter((items)=>'itemCards' in items);

    if(menuItems?.categories)
    
    {
        
        return( 

               <div className="w-full mx-auto">
               <p className="font-bold text-2xl">{menuItems?.title}</p>
               <div>
                {
                     menuItems?.categories?.map((items)=><MenuCard key={items?.title } menuItems={items}></MenuCard>)
                }
               </div>
                </div>
        )
        
    }

        if(!isOpen){
        return(
            <div className="w-full mx-auto">
                <div className="flex justify-between item-center w-full">
               <p className="font-bold text-2xl">{menuItems?.title}</p>
               <button className="text-3xl font-bold mr-20" onClick={()=>setIsOpen(!isOpen)}> {isOpen?'⌃':'⌄'}</button>
               </div>
               <div className="bg-gray-50 h-5 mt-2 mb-2"></div>
                </div>
        )
    }
    return (
        
        <div className="w-full mx-auto">
            <div className="flex justify-between items-center w-full">
               <p className="font-bold text-2xl">{menuItems?.title}</p>
               <button className="text-3xl font-bold mr-20" onClick={()=>setIsOpen(!isOpen)}> {isOpen?'⌃':'⌄'}</button>
               </div>
        
        <div className="">
            {
                     menuItems?.itemCards?.map((items)=><RestInfo key={items?.card?.info?.id } items={items}></RestInfo>)
            }
        </div>
         <div className="bg-gray-50 h-5 mt-2 mb-2"></div>
        </div>
    )
}