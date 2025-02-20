import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setWindowSize } from "../state/window/windowSlice";

function WindowSizeListener(){
    const dispatch = useDispatch();

    useEffect(() => {
        const handleResize = () => {
            dispatch(setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            }));
        };

        window.addEventListener("resize", handleResize);

        //in mount
        handleResize();

        //i dont believe in the next 4 lines, but chatgpt told me they work so i do believe in it
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [dispatch]);


    return null;
};

export default WindowSizeListener;