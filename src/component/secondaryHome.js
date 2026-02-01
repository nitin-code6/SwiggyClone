import { Outlet } from "react-router-dom";
import RestHeader from "./Restheader";




 export default function SecondaryHome(){
    

    return (
            <div>
                <RestHeader/>
                <Outlet/>


            </div>
            

        
    )
}