
import dineout_restaurant from "../data/Dinerestaurant";

import DineCard from "./Dinecard";
export default function Dineout(){
    return(
        <div className="px-20">
          <h2 className="flex justify-start text-3xl font-bold py-8 px-2">Discover best restaurant on Dineout</h2>
          <div className="flex flex-nowrap overflow-x-auto gap-10">
          {
            dineout_restaurant.map((dine_data)=>
            <DineCard key={dine_data?.info?.id} info={dine_data?.info} cta={dine_data?.cta}></DineCard>)
          }

          </div>

        </div>
    )
}