import './RootLayout.css';

import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../state/store";
import { Outlet } from "react-router-dom";
import WindowScroller from "../../utils/WindowScroller";
import NHeader from "../../containers/NewHeader/NHeader";
import Footer from "../../containers/Footer/Footer";

function RootLayout () {
    const theme = useSelector((state: RootState) => state.theme.value);
    useEffect(() => {
      document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);

    return (
        <div className="root-layout">
            <WindowScroller/>
            <NHeader/>
            <Outlet/>
            <Footer/>
        </div>
    );
}

export default RootLayout;