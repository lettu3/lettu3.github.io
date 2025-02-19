import './TestPage.css'
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../state/store";

import NHeader from '../containers/NewHeader/NHeader';

function TestPage () {
    //apply theme
    const theme = useSelector((state: RootState) => state.theme.value);
    useEffect(() => {
      document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);

    return (
        <div className="TestPage">
            <NHeader />
        </div>
    );
}

export default TestPage;