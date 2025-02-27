import { Outlet } from "react-router-dom";
import WindowScroller from "../utils/WindowScroller";

function RootLayout () {
    return (
        <div className="RootLayout">
            <WindowScroller/>
            <Outlet/>
        </div>
    );
}

export default RootLayout;