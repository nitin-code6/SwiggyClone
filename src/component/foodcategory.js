import FoodCategories from "../data/foodCategories";
import FoodCategoryCard from "./foodCategoryCard";
import { CDN_URL } from "../data/constant";
import { IMAGE_SIZE } from "../data/constant";
export default function Foodcategory(){
    return (
        <div>
            <h2 className="flex justify-center text-5xl font-bold py-10">Our Best Food Option</h2>
            <div className="  grid grid-rows-2 grid-flow-col gap-10 overflow-x-auto"> 
                {
                    FoodCategories.map(items=>( 
                        <FoodCategoryCard
                        key={items.id}
                        name={items.action?.text}
                        image={`${CDN_URL}${IMAGE_SIZE}${items.imageId}`}
                         link={items.action?.link}
                        />
                    )
                )
                }
            </div>
        </div>


    )
}