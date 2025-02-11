import './BodyProjects.css';
import ProjectEntryBlog from '../../components/ProjectEntryBlog/ProjectEntryBlog';

function BodyProjects () {
    const ProjectEntry0 = {
        title: 'EXAMPLE',
        date: 'February 2, 2025',
        description: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        link: '/',
        image: '/images/dasd.webp',      
    };
    return (
        <div className="BodyProjects">
            <ProjectEntryBlog title={ProjectEntry0.title} description={ProjectEntry0.description} date={ProjectEntry0.date} link={ProjectEntry0.link} image={ProjectEntry0.image}/>
            <ProjectEntryBlog title={ProjectEntry0.title} description={ProjectEntry0.description} date={ProjectEntry0.date} link={ProjectEntry0.link} image={ProjectEntry0.image}/>
            <ProjectEntryBlog title={ProjectEntry0.title} description={ProjectEntry0.description} date={ProjectEntry0.date} link={ProjectEntry0.link} image={ProjectEntry0.image}/>
            <ProjectEntryBlog title={ProjectEntry0.title} description={ProjectEntry0.description} date={ProjectEntry0.date} link={ProjectEntry0.link} image={ProjectEntry0.image}/>
            <ProjectEntryBlog title={ProjectEntry0.title} description={ProjectEntry0.description} date={ProjectEntry0.date} link={ProjectEntry0.link} image={ProjectEntry0.image}/>
        </div>
    );
}

export default BodyProjects;