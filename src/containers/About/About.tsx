/* About.tsx */
import './About.css';
import { useTranslation } from "react-i18next";
import Personal from "../../components/Personal";
import TechContainer from '../TechContainer/TechContainer';

function About () {
    const  {t} = useTranslation();

    return (
        <div className="about-container">
            <div className="about-header">
                <h1>{t('about').toUpperCase()}</h1>
            </div>
            <div className='about-content'>
                <div className="about-pp"><Personal /></div>
                <div className="about-body"><p>{t('lorem')}</p></div>
            </div>
            <div className="about-tech-header">
                <h1>MY TECH STACK</h1>
            </div>
            <div className="about-tech">
                <TechContainer/>
            </div>
        </div>
    );
}

export default About;