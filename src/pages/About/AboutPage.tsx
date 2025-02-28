import './AboutPage.css';
import { useTranslation } from 'react-i18next';
import Personal from '../../components/Personal';
import TechContainer from '../../containers/TechContainer/TechContainer';
import Card from '../../components/Card/Card';
import ResumeButton from '../../components/ResumeButton/ResumeButton';
import LinkerButton from '../../components/LinkerButton/LinkerButton';

function AboutPage() {
    const { t } = useTranslation();
    
    return (
        <div className="about-page">
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
                    <TechContainer />
                </div>
            </section>
            <section className='links'>
                <div className='links-cards'>
                    <Card header={t('curriculum')} 
                          body={t('curriculum-body')}>
                        <ResumeButton title='[ES] - Español' />
                        <ResumeButton title='[EN] - English' />
                    </Card>
                    <Card header={t('projects')} 
                          body={t('projects-body')}>
                        <LinkerButton linkto='/projects' 
                                      title={t('projects')} />
                    </Card>
                </div>
            </section>
        </div>
    );
}

export default AboutPage;