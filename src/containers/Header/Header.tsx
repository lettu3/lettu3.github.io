import Theme from "../../components/Theme";
import Lang from "../../components/Lang";
import Home from "../../components/Home";
import './Header.css';

export default function Header () {
    return (
        <div className="header-component">
            <div className="header-row1">
                <Home/>
            </div>
            <div className="header-row2">
                <Lang />
                <Theme/>
            </div>
        </div>
    );
}