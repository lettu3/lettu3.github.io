import './GithubButton.css';

import { useSelector } from "react-redux";
import { RootState } from "../../state/store";

function GithubButton(){
    const theme = useSelector((state: RootState) => state.theme.value);
    const {width} = useSelector((state: RootState) => state.window);

    const isMobile = width < 480;
    
    let currentIcon = theme === 'light' ? './githubLight.svg' : './githubDark.svg';
    if (isMobile && (theme === 'light')) {
        currentIcon = './githubDark.svg'; 
    }
    else if (isMobile && (theme === 'dark')) {
        currentIcon = './githubLight.svg';
    }

    return (
        <div className="github-container">
            {/* ??? */}
            <a href="https://github.com/lettu3" className="github-button">
                <img src={currentIcon} alt="github-icon" className="github-button-img"/>
                {isMobile && <span className="github-button-text">GitHub</span>}
            </a>
        </div>
    );
}

export default GithubButton