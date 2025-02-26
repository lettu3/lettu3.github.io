import './LinkerButton.css';
import { Link } from "react-router-dom";


type LinkerButtonProps = {
    linkto: string;
    title: string;
}

function LinkerButton ({linkto, title} : LinkerButtonProps) {
    return (
        <div className="linker-button-container">
            <Link to={linkto} className="linker-button">
                <span className="linker-button-text">{title}</span>
                <img src="./hyperlinkDark.svg" className="linker-button-img"/>
            </Link>
        </div>
    );
};

export default LinkerButton;