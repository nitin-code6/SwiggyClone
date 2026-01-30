import { useEffect, useState } from "react";
import FoodItems from "../data/restfoods/16866";
import MenuCard from "./MenuCard";


export default function RestaurantMenu(){
   
    

    const [RestData, setRestData] = useState([]);

    useEffect(()=>{
    
        async function fetchData() {
          //  console.log(FoodItems[5].groupedCard);
          //  console.log(FoodItems?.[5]?.groupedCard?.cardGroupMap)
          const item =FoodItems?.[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card?.itemCards;
        // console.log(item);
           setRestData(item);
        }
   
        fetchData();
       },[])

      //  console.log(RestData);
        // [0].card.info.id
          
   
    return(
        <div className="flex flex-wrap w-[80%] mx-auto mt-10 justify-center gap-6">
          {
            // <h1>{RestData?.[0]?.card.info.id}</h1> working well
            RestData.map((menuItems)=><MenuCard key={menuItems?.card?.info?.id} menuItems={menuItems}></MenuCard>)
          }
        </div>
        
    )

}