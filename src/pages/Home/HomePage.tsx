import './HomePage.css';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion';

function HomePage() {
  const {t, i18n} = useTranslation();

  return (
    <div className="home-page">
      <motion.div 
        className='body-column-1'
        key={i18n.language}
        initial={{opacity: 0, y:24}}
        animate={{opacity: 1, y: 0}}
        transition={{duration : 0.5, ease: 'easeOut'}}>
        <div className="welcome">
          <h1>
            {t('welcome')}
          </h1>
        </div>
        <div className="index">
          <h1>{t('index').toUpperCase()}</h1>
          <div>
            <p>/<Link to="/about">{t('about')}</Link></p>
            <p>/<Link to="/projects">{t('projects')}</Link></p>
            <p>/<a href="https://lettu3.github.io/offtopic">{t('offtopic')}</a></p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default HomePage;