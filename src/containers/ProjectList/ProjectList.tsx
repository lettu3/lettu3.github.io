import './ProjectList.css';
import ProjectEntryBlog from "../../components/ProjectEntryBlog/ProjectEntryBlog";
import {projectsPreviews} from "../../projects/projects-data";


function ProjectList () {
    return (
        <div className="ProjectList">
            {projectsPreviews.map((project, index) => (
                <ProjectEntryBlog 
                    key={index}
                    date={project.date}
                    title={project.title}
                    description={project.description}
                    link={project.link}
                    image={project.image}
                />
            ))}
        </div>
    );
}

export default ProjectList;