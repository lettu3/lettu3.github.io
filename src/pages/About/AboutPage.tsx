import './AboutPage.css';
import { useTranslation } from 'react-i18next';
import Personal from '../../components/Personal';
import TechContainer from '../../containers/TechContainer/TechContainer';
import Card from '../../components/Card/Card';
import ResumeButton from '../../components/ResumeButton/ResumeButton';
import LinkerButton from '../../components/LinkerButton/LinkerButton';
import { motion } from 'framer-motion';


function AboutPage() {
    const { t , i18n} = useTranslation();
    
    return (
        <div className="about-page">
            <section className='content'>
                <motion.div
                    className="about-header"
                    key={i18n.language}
                    initial={{opacity: 0, y: 24}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.5, ease: 'easeOut'}}>
                    <h1>{t('about').toUpperCase()}</h1>
                </motion.div>
                <div className='about-content'>
                    <motion.div className="about-pp" initial={{scale: 0.9}} animate={{scale: 1}} transition={{duration: 0.5, ease:'easeOut'}}><Personal /></motion.div>
                    <motion.div className="about-body"             
                        initial={{opacity: 0, y: 24, scale: 0.9}}
                        whileInView={{opacity: 1, y: 0, scale: 1, transition: {duration: 0.5, ease: 'easeOut'}}}
                        viewport={{once: true}}  >
                        <motion.p 
                            key={i18n.language}
                            initial={{opacity: 0, y: 24}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.66, ease: 'easeOut'}}>
                            {t('aboutme')}
                        </motion.p>
                    </motion.div>
                </div>
            </section>
            <motion.section 
                className='tech'
                initial={{opacity: 0, y: 24, scale: 0.9}}
                whileInView={{opacity: 1, y: 0, scale: 1, transition: {duration: 0.5, ease: 'easeOut'}}}
                viewport={{once: true}}>
                <motion.div
                    className="about-tech-header"
                    key={i18n.language}
                    initial={{opacity: 0, y: 24}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.5, ease: 'easeOut'}}>
                    <h1>{t('my tech stack').toUpperCase()}</h1>
                </motion.div>
                <div className="about-tech">
                    <TechContainer />
                </div>
            </motion.section>
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