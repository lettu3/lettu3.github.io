import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../state/store';
import { Link } from "react-router-dom";

function ProjectsPage () {
    //apply theme
    const theme = useSelector((state: RootState) => state.theme.value);
    useEffect(() => {
      document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);

    return (
        <div>
          <h1>Projects Page</h1>
          <p><Link to="/" >Return</Link></p>
        </div>
    );
}


export default ProjectsPage;