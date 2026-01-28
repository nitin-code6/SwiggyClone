
import { CDN_URL } from "../data/constant"
export default function DineCard({info,cta}){
         const img_url=info?.mediaFiles[0]?.url;
         const Link=cta?.link;
        
        
    return (
        <a href={Link} className="block flex-none" >
        <div className="w-[384px]  h-[408px] flex-none ">
            <div className="relative h-[189px] ">
            <img src={`${CDN_URL}${img_url}`} alt={info?.name|| "dine image" }className="w-full h-full object-cover rounded-t-2xl "/> 
            <p className="absolute bottom-2 left-2 text-white font-semibold text-sm bg-black/50 px-2 py-1 rounded">{info?.name}</p>
            <p className="absolute bottom-2 right-2 bg-green-600 text-white text-xs px-2 py-1 rounded">{info?.rating?.value}</p>
            </div>
            <div className="m-3">
                <div className="flex justify-between items-center text-sm text-gray-700">
                <p>{info?.cuisines?.[0]}</p>
                <p>{info?.costForTwo}</p>
                </div>
             <div className="flex justify-between items-center text-sm text-gray-700  ">
                <p>{info?.locationInfo?.formattedAddress }</p>
                <p>{info?.locationInfo?.distanceString}</p>
                </div>
                <div className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-gray-100 text-xs text-gray-700 mt-2">
                            <img
                             src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/dineout/rx-card/highlights/book.png"
                           alt="table booking"
                             className="h-3 w-3"
                                  />
                           <span>{info?.vendorHighlights?.[0]?.title}</span>
                   </div>
                    <div className="flex items-center justify-between bg-green-600 text-white px-3 py-2 rounded-lg mt-2 text-sm">
    
    <div className="flex items-center gap-2">
    
      <img
        src="https://media-assets.swiggy.com/swiggy/image/upload/dineout/rx-card/OFFER.png"
        alt="offer"
        className="h-4 w-4"
      />


      <span className="font-medium">
        {info.offerInfoV3.vendorOffer.title}{" "}
        {info.offerInfoV3.vendorOffer.subtitle}
      </span>
    </div>

    
    <span className="font-medium">
      {info.offerInfoV3.vendorOffer.subtext}
    </span>
                   </div>
                  <div className="bg-green-100 text-green-600 px-3 py-2 rounded-lg mt-2 text-sm">
                    <p>{info.customerOffer.info.description}</p>
                  </div>

            </div>
        </div>
         </a>
    )
}