/* About.tsx */
import './About.css';
import { useTranslation } from "react-i18next";
import Personal from "../../components/Personal";

function About () {
    const  {t} = useTranslation();

    return (
        <div className="about-container">
            <div className="about-header">
                <h1>{t('SARASA')}</h1>
            </div>
            <div className='about-content'>
                <div className="about-pp"><Personal /></div>
                <div className="about-body"><p>{t('lorem')}</p></div>
            </div>
        </div>
    );
}

export default About;