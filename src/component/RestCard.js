import { Link } from "react-router-dom";
export default function RestCard({restInfo}){

    return (
      <Link to={"/city/delhi/ "+ restInfo?.info?.id}>
        <div className="p-4 w-[280px] transform transition duration-300 hover:scale-105">

         <div className="relative aspect-[4/3]">
         <img src={"https://media-assets.swiggy.com/swiggy/image/upload/"+restInfo.info.cloudinaryImageId} className="w-full h-full  object-cover rounded-2xl"></img>
        <p className="absolute bottom-3 left-2 text-white font-extrabold text-xl drop-shadow">
  {restInfo?.info?.aggregatedDiscountInfoV3 && (
  <>
    {restInfo.info.aggregatedDiscountInfoV3.header}
    {restInfo.info.aggregatedDiscountInfoV3.subHeader
      ? ` ${restInfo.info.aggregatedDiscountInfoV3.subHeader}`
      : ""}
  </>
)}

</p>

         </div>
         <div>
          <p className="font-bold">{restInfo.info.name}</p>
          <span className="flex items-center gap-2 text-sm text-gray-700">

           {restInfo.info.avgRating}
             •
           {restInfo.info.sla.deliveryTime} mins
          </span>
          <p className="text-sm text-gray-600 truncate">{restInfo.info.cuisines.join()}</p>
        
        <p className="text-sm text-gray-500 truncate">
          {restInfo.info.locality}
        </p>
         </div>
        </div>
        </Link>
    )
}