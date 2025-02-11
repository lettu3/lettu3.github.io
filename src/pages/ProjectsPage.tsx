import './ProjectsPage.css';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../state/store';
import BodyProjects from '../containers/BodyProjects/BodyProjects';

function ProjectsPage () {
    //apply theme
    const theme = useSelector((state: RootState) => state.theme.value);
    useEffect(() => {
      document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);



    return (
        <div className='ProjectsPage'>
          <BodyProjects />
        </div>
    );
}


export default ProjectsPage;