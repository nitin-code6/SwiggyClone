import { useEffect } from "react";
import { useState } from "react";
import MockRestaurants from "../data/mockrestaurant";
import Shimmer from "./Shimmer";
import RestCard from "./RestCard";
export default function Restaurant(){
      const [RestData,setRestData]=useState([]);
    useEffect(()=>{
      
        async function fetchdata() {
            // const proxyUrl = "https://cors-anywhere.herokuapp.com/";
            // const swiggyAPI=  "https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=28.7040592&lng=77.10249019999999&carousel=true&third_party_vendor=1"
        
            // const response = await fetch(proxyUrl + swiggyAPI, {
            //    headers: {
            //       "x-requested-with": "XMLHttpRequest"
            //             }
            //            });
         
          
            await new Promise((resolve) => setTimeout(resolve, 1000));
            setRestData(MockRestaurants);
        }
        fetchdata();
    },[])
    if(RestData.length==0) 
      return(<Shimmer/>)
    return (
        <div className="flex flex-wrap w-[80%] mx-auto mt-10 justify-center gap-6">
          {  
            RestData.map((restInfo)=> <RestCard key={restInfo.info.id} restInfo={restInfo}></RestCard>)
          }
        </div>
    )
}
