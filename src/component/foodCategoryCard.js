

export default function FoodCategoriesCard({name,image,link}){
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
    className="h-full w-full object-contain"
    />
    
</button>

)
}