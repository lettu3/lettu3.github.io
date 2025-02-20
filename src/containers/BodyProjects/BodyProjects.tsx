import './BodyProjects.css';
import ProjectList from '../ProjectList/ProjectList';
import { useTranslation } from 'react-i18next';


function BodyProjects () {
    const {t} = useTranslation();
    return (
        <div className="BodyProjects">
            <h1>{t('projects').toUpperCase()}</h1>
            <ProjectList />
        </div>
    );
}

export default BodyProjects;