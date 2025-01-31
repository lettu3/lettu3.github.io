/* Header.tsx */
import Theme from "../../components/Theme";
import Lang from "../../components/Lang";
import Home from "../../components/Home";
import './Header.css';
import LangDropDown from "../../components/LangDropdown";

const items = [
    {id: 1, title: "[EN] - English", },
    {id: 2, title: "[ES] - Espanol", }, 
    {id: 3, title: "[JP] - 日本語", },
]

export default function Header () {
    return (
        <div className="header-component">
            <div className="header-row1">
                <Home/>
            </div>
            <div className="header-row2">
                <LangDropDown items={items}/>
                <Theme/>
            </div>
        </div>
    );
}