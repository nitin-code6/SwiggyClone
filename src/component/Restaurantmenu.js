import { useEffect, useState } from "react";
import FoodItems from "../data/restfoods/16866";
import MenuCard from "./MenuCard";


export default function RestaurantMenu(){
   
     const [selected,setSelected]=useState(null);

    const [RestData, setRestData] = useState([]);
    
    useEffect(()=>{
    
        async function fetchData() {
          //  console.log(FoodItems[5].groupedCard);
          //  console.log(FoodItems?.[5]?.groupedCard?.cardGroupMap)
          const temp_data =FoodItems?.[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
          let filter_data=temp_data.filter((items)=>'title' in items?.card?.card);

        
           setRestData(filter_data);
        }
   
        fetchData();
       },[])

      //  console.log(RestData);
        // [0].card.info.id
        
       
          
   
    return(
       <div> 
        <div className="w-[50%] mx-50 mt-20 mb-20 ">
        <button className={`text-2xl py-2 px-4 mb-20 border-2 rounded-2xl mr-2 ${selected==="veg"?"bg-green-400":"bg-gray-300"}` }  onClick={()=>setSelected(selected==='veg'?null:'veg')}>Veg</button>
          <button className={`text-2xl py-2 px-4 mb-20 border-2 rounded-2xl ${selected==="nonveg"?"bg-red-400":"bg-gray-300"}`}onClick={()=>setSelected(selected==='nonveg'?null:'nonveg')}>Non Veg</button>
       </div>
        <div className="w-[80%] mx-auto mt-10 gap-6">
          {
            // <h1>{RestData?.[0]?.card.info.id}</h1> working well
            RestData.map((menuItems)=><MenuCard key={menuItems?.card?.card?.title} menuItems={menuItems?.card?.card} selected={selected}></MenuCard>)
          }
        </div>
        </div>
    )

}