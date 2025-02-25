/* About.tsx */
import './About.css';
import { useTranslation } from "react-i18next";
import Personal from "../../components/Personal";
import TechContainer from '../TechContainer/TechContainer';

function About () {
    const  {t} = useTranslation();

    return (
        <div className="about-container">
            <section className='content'>
                <div className="about-header">
                    <h1>{t('about').toUpperCase()}</h1>
                </div>
                <div className='about-content'>
                    <div className="about-pp"><Personal /></div>
                    <div className="about-body"><p>{t('lorem')}</p></div>
                </div>
            </section>
            <section className='tech'>
                <div className="about-tech-header">
                    <h1>{t('my tech stack').toUpperCase()}</h1>
                </div>
                <div className="about-tech">
                    <TechContainer/>
                </div>
            </section>
        </div>
    );
}

export default About;