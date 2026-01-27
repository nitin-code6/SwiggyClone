import reactDOM from "react-dom/client";
import Header from "./component/header";
import Foodcategory from "./component/foodcategory";
// Header

function App(){
    return (<>
        <Header/>
        <Foodcategory/>
        </>
    )

}

reactDOM.createRoot(document.getElementById("root")).render(<App/>);