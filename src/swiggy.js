import reactDOM from "react-dom/client";
import Header from "./component/header";
import Foodcategory from "./component/foodcategory";
import Dineout from "./component/dineout";
// Header

function App(){
    return (<>
        <Header/>
        <Foodcategory/>
        <Dineout/>
        </>
    )

}

reactDOM.createRoot(document.getElementById("root")).render(<App/>);