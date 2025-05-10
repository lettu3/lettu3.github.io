import './ProjectsPage.css'
import { useTranslation } from 'react-i18next';
import {motion} from 'framer-motion';

import ProjectList from '../../containers/ProjectList/ProjectList';


function ProjectsPage () {
  const {t, i18n} = useTranslation();
    return (
        <div className='projects-page'>
            <motion.h1
                key={i18n.language}
                initial={{opacity: 0, y:24}}
                animate={{opacity: 1, y: 0}}
                transition={{duration : 0.5, ease: 'easeOut'}} 
            >
                {t('projects').toUpperCase()}
            </motion.h1>
            <ProjectList />
        </div>
    );
}


export default ProjectsPage;