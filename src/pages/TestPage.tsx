import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../state/store";
import Flsdmfr from "../components/Flsdmfr";
import Header from "../containers/Header/Header";
import Dropdown from "../components/Dropdown";
import LangDropDown from "../components/LangDropdown";

const items = [
    {id: 1, title: "[EN] - English", },
    {id: 2, title: "[ES] - Espanol", }, 
    {id: 3, title: "[JP] - 日本語", },
]

function TestPage () {
    //apply theme
    const theme = useSelector((state: RootState) => state.theme.value);
    useEffect(() => {
      document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);

    return (
        <div>
            <Header/>
            <LangDropDown items={items}/>
        </div>
    );
}

export default TestPage;