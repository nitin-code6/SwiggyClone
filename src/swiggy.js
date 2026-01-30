import ReactDOM from "react-dom/client";

import Restaurant from "./component/Restaurant";
import RestaurantMenu from "./component/Restaurantmenu";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Home from "./component/Home";
// Header

function App(){
    return (
          <BrowserRouter>
          <Routes>
            <Route path="/" element={ <Home/>}></Route>
             <Route path="/restaurant" element={<Restaurant/>}></Route>
            <Route path="/city/delhi/:id" element={<RestaurantMenu/>}></Route>
          </Routes>
          </BrowserRouter>
       
        
        
    )

}

ReactDOM.createRoot(document.getElementById("root")).render(<App/>);