import './ProjectsPage.css'
import { useTranslation } from 'react-i18next';

import ProjectList from '../../containers/ProjectList/ProjectList';


function ProjectsPage () {
  const {t} = useTranslation();
    return (
        <div className='projects-page'>
            <h1>{t('projects').toUpperCase()}</h1>
            <ProjectList />
        </div>
    );
}


export default ProjectsPage;