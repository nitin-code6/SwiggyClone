import FoodCategories from "../data/foodCategories";
import FoodCategoryCard from "./foodCategoryCard";
import { CDN_URL } from "../data/constant";
import { IMAGE_SIZE } from "../data/constant";
import grocery from "../data/groceries";
export default function Foodcategory(){
    return (
        <div  className="px-20">
            <div>
            <h2 className="flex justify-start text-3xl font-bold py-8 px-2">Our Best Food Option</h2>
            <div className="  grid grid-rows-2 grid-flow-col gap-10 overflow-x-auto scrollbar-hide"> 
                {
                    FoodCategories.map(items=>( 
                        <FoodCategoryCard
                        key={items.id}
                        name={items.action?.text}
                        image={`${CDN_URL}${IMAGE_SIZE}${items.imageId}`}
                         link={items.action?.link}
                         bool_name={false}
                        />
                    )
                )
                }
            </div>
            </div>
            <div>
                  <h2 className="flex justify-start text-3xl font-bold py-8 px-2">Shop Grocery on InstaMart</h2>
                   <div className="  grid grid-rows-1 grid-flow-col gap-10 overflow-x-auto scrollbar-hide"> 
                            {

                            grocery.map(items=>( 
                        <FoodCategoryCard
                        key={items.id}
                        name={items.action?.text}
                        image={`${CDN_URL}${IMAGE_SIZE}${items.imageId}`}
                         link={items.action?.link}
                         bool_name={true}
                        />
                    )
                )
                }
                 </div>
                </div>
        </div>


    )
}