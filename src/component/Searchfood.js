import { useState } from "react";
// // import { CDN_URL } from "../data/constant";
// import { VegIcon,NonVegIcon } from "../data/icon";
// import FoodItems from "../data/restfoods/16866";
export default function SearchFood(){
    // const [RestData, setRestData] = useState([]);
    const [text,setText]=useState("");
    // useEffect(()=>{
    
    //     async function fetchData() {
    //       //  console.log(FoodItems[5].groupedCard);
    //       //  console.log(FoodItems?.[5]?.groupedCard?.cardGroupMap)
    //       const temp_data =FoodItems?.[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    //       let filter_data=temp_data.filter((items)=>'title' in items?.card?.card);

        
    //        setRestData(filter_data);
    //     }
   
    //     fetchData();
    //    },[])

    return (
        <div className="mx-auto mt-20">
         <input className="rounded-2xl bg-gray-100 pl-10 text-2xl" placeholder="Search Here" value={text} onChange={(e)=>setText(e.target.value)}></input>
        </div>
    )
}