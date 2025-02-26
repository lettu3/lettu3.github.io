import { useLocation } from "react-router-dom";
import { useEffect } from "react";

function WindowScroller () {
    const {pathname} = useLocation();

    useEffect(() => {
        window.scrollTo(0,0);
        console.log('scrolled');
    }, [pathname]);

    return null;
};

export default WindowScroller;