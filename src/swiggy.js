import reactDOM from "react-dom/client";
import Header from "./component/header";

// Header

function App(){
    return (
        <Header/>
        
    )

}

reactDOM.createRoot(document.getElementById("root")).render(<App/>);