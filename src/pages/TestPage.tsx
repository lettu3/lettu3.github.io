import './TestPage.css'
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../state/store";

import TechContainer from '../containers/TechContainer/TechContainer';

function TestPage () {
    //apply theme
    const theme = useSelector((state: RootState) => state.theme.value);
    useEffect(() => {
      document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);

    return (
        <div className="TestPage">
            <TechContainer/>
        </div>
    );
}

export default TestPage;