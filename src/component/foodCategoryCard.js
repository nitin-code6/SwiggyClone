

export default function FoodCategoriesCard({name,image,link,bool_name}){
  const handleClick = () => {
    window.location.href = link;
  };

    return ( 
        
<button 
onClick={handleClick}
className="w-[144px] h-[180px] flex flex-col items-center justify-center">
    <img
    src={image}
    alt={name}
    className="h-120px w-full object-contain"
    />
   {bool_name&&<h6 className="mt-2 text-sm">{name}</h6>}
    
    
</button>

)
}