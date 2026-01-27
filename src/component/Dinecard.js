
import { CDN_URL } from "../data/constant"
export default function DineCard({info}){
         const img_url=info?.mediaFiles[0]?.url;
         
        
    return (
        <div className="max-w-sm  h-[189px] relative flex-none ">
            <img src={`${CDN_URL}${img_url}`} alt={info?.name|| "dine image" }className="w-full h-full object-cover"/> 
            <p className="absolute bottom-2 left-2 text-white font-semibold text-sm bg-black/50 px-2 py-1 rounded">{info?.name}</p>
            <p className="absolute bottom-2 right-2 bg-green-600 text-white text-xs px-2 py-1 rounded">{info?.rating?.value}</p>
        </div>
    )
}