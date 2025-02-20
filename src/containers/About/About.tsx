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
            <section className='about-content'>
                <div className="about-pp"><Personal /></div>
                <div className="about-body"><p>{t('lorem')}</p></div>
            </section>
            <div className="about-tech-header">
                <h1>MY TECH STACK</h1>
            </div>
            <section className="about-tech">
                <TechContainer/>
            </section>
        </div>
    );
}

export default About;