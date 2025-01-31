/* About.tsx */
import { useTranslation } from "react-i18next";
import Personal from "../../components/Personal";
import './About.css';

function About () {
    const  {t} = useTranslation();

    return (
        <div className="about">
            <div className="about column-1">
                <div className="about column-1 row-1">
                    <h1>{t('SARASA')}</h1>
                </div>
                <div className="about column-1 row-2">
                    <p>{t('lorem')}</p>
                </div>
            </div>
            <div className="about column-2">
                <Personal />
            </div>
        </div>
    );
}

export default About;