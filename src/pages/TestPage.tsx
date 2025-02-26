import './TestPage.css'
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../state/store";

import Theme from '../components/Theme';
import Card from '../components/Card/Card';

function TestPage () {
    //apply theme
    const theme = useSelector((state: RootState) => state.theme.value);
    useEffect(() => {
      document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);

    return (
        <div className="TestPage">
            <Theme/>
            <Card header='hola' body= 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'> 
                <button>holas</button>
            </Card>
        </div>
    );
}

export default TestPage;