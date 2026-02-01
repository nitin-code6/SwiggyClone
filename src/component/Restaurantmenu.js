import { useEffect, useState } from "react";
import FoodItems from "../data/restfoods/16866";
import MenuCard from "./MenuCard";
import { Link } from "react-router-dom";

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
        <Link to={"/city/delhi/16866/search"}>
        <div className="w-[50%] mx-auto mt-20 mb-20 h-10 bg-gray-100 rounded-2xl flex items-center justify-center">
          <p className="text-center ">Search For Dishes</p>
        </div>
        </Link>
        <div className="w-[50%] mx-auto mt-15 mb-15 ">
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