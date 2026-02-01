import ReactDOM from "react-dom/client";

import Restaurant from "./component/Restaurant";
import RestaurantMenu from "./component/Restaurantmenu";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Home from "./component/Home";
import SearchFood from "./component/Searchfood";
import SecondaryHome from "./component/secondaryHome";
// Header

function App(){
    return (
          <BrowserRouter>
          <Routes>
           
            <Route path="/" element={ <Home/>}></Route>
             <Route element={<SecondaryHome/>}>
             <Route path="/restaurant" element={<Restaurant/>}></Route>
            <Route path="/city/delhi/16866" element={<RestaurantMenu/>}></Route>
            <Route path="/city/delhi/16866/search" element={<SearchFood/>}></Route>
            </Route>
          </Routes>
          </BrowserRouter>
       
        
        
    )

}

ReactDOM.createRoot(document.getElementById("root")).render(<App/>);