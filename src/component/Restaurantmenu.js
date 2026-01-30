import { useEffect, useState } from "react";
import FoodItems from "../data/restfoods/16866";
// import MenuCard from "./MenuCard"


export default function RestaurantMenu(){
   
    

    const [RestData, setRestData] = useState([]);

    useEffect(()=>{
    
        async function fetchData() {
           
        
           setRestData(FoodItems);
        }
   
        fetchData();
       },[])

       

    return(
        // <div className="w-[80%] mx-auto mt-20">
        //   {
        //     RestData.map((menuItems)=><MenuCard key={menuItems?.card?.card?.title} menuItems={menuItems?.card?.card}></MenuCard>)
        //   }
        // </div>
        <h1>hhh vghcvghcvgyvghvghvhvh</h1>
    )

}