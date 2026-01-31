import { useEffect, useState } from "react";
import FoodItems from "../data/restfoods/16866";
import MenuCard from "./MenuCard";


export default function RestaurantMenu(){
   
    

    const [RestData, setRestData] = useState([]);

    useEffect(()=>{
    
        async function fetchData() {
          //  console.log(FoodItems[5].groupedCard);
          //  console.log(FoodItems?.[5]?.groupedCard?.cardGroupMap)
          const temp_data =FoodItems?.[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
          const filter_data=temp_data.filter((items)=>'title' in items?.card?.card);
           setRestData(filter_data);
        }
   
        fetchData();
       },[])

      //  console.log(RestData);
        // [0].card.info.id
          
   
    return(
        <div className="w-[80%] mx-auto mt-10 gap-6">
          {
            // <h1>{RestData?.[0]?.card.info.id}</h1> working well
            RestData.map((menuItems)=><MenuCard key={menuItems?.card?.card?.title} menuItems={menuItems?.card?.card}></MenuCard>)
          }
        </div>
        
    )

}