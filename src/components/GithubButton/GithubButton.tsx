import './GithubButton.css';

import { useSelector } from "react-redux";
import { RootState } from "../../state/store";

function GithubButton(){
    const theme = useSelector((state: RootState) => state.theme.value);

    const currentIcon = theme === 'light' ? './githubLight.svg' : './githubDark.svg';

    return (
        <div className="github-container">
            {/* ??? */}
            <a href="https://github.com/lettu3" className="github-button">
                <img src={currentIcon} alt="github-icon" className="github-button-img"/>
            </a>
        </div>
    );
}

export default GithubButton