
import { Link } from "react-router-dom";

export default function Header()
{
return (
    <header className="bg-[#ff5200] font-serif" >
    <div className="flex justify-between container mx-auto py-8">
        <img className="h-12 w-40" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/static-assets/images/swiggy_logo_white.png"></img>
        <div className="text-white  text-base test-bold flex gap-10 items-center"  >
            <a target="_blank" href="https://partner.swiggy.com/login#/swiggy">Swiggy Corporate</a>
            <a target="_blank" href="https://partner.swiggy.com/login#/swiggy">Partner With Us</a>
            <a className="border border-white px-3 py-4 rounded-2xl">Get the App</a>
            <a className="border border-black bg-black px-3 py-4 rounded-2xl" >Sign In</a>
            
        </div>
    </div>
    <div className="pt-16 pb-8 relative "  >
        <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png"className="w-[250] h-[450] absolute left-0 top-0 "  ></img>
        <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png" className="w-[250] h-[450] absolute right-0 top-0"></img>
        <div className="text-4xl text-white font-bold w-[55%] pl-3 container mx-auto text-center">Order food & groceries. Discover best restaurants. Swiggy it!</div>
        <div className="w-[60%] container mx-auto flex gap-5 mt-10 text-1xl">
          <input placeholder="Delhi,India" className="bg-white px-4 w-[40%] h-15 rounded-2xl"></input>
           <input placeholder="Search for restaurant ,items or more" className="bg-white w-[50%] h-15 rounded-2xl px-4"></input>
        </div>
    </div>
    <div className="max-w-[70%] px-2 pb-5 container mx-auto flex justify-center ">
        <Link to="/restaurant">
       
        <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/ec86a309-9b06-48e2-9adc-35753f06bc0a_Food3BU.png"></img>
       </Link>
         <a href="https://www.swiggy.com/instamart?entryId=1234&entryName=mainTileEntry4&v=1">
        <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b5c57bbf-df54-4dad-95d1-62e3a7a8424d_IM3BU.png"></img>
     </a>
        <a href="https://www.swiggy.com/dineout">
        <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b6d9b7ab-91c7-4f72-9bf2-fcd4ceec3537_DO3BU.png"></img>
       </a>
    </div>
    </header>

)
}

