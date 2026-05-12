import { createRoot } from "react-dom/client";
import FrameworkList from "./frameworkList"; 
import "./tailwind.css";
import FrameworkListSearch from "./FrameworkListSearch";

createRoot(document.getElementById("root")).render(
    <div>
        {/* <FrameworkList/> */}
        <FrameworkListSearch/>
    </div>
)