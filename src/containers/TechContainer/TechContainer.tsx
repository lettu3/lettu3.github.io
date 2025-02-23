import './TechContainer.css';

import TechCard from "../../components/TechCard/TechCard";

function TechContainer(){
    const technologies = [
        {name: "TypeScript", },
        {name: "JavaScript", },
        {name: "Python",},
        {name: "Java", },
        {name: "Clang", },
        {name: "Cpp", },
        {name: "Haskell", },
        {name: "arm", },
        {name: "React", },
        {name: "Redux", },
        {name: "FastAPI", },
        {name: "ApacheSpark",},
        {name: "MySQL", },
        {name: "MongoDB",},
        {name: "Git", },
        {name: "HTML", },
        {name: "Docker",},
        {name: "Linux",},
        {name: "Bash"}
    ]
    return (
        <div className='tech-container'>
            {technologies.map((tech, index) => (
                <TechCard key={index} title={tech.name} />
            ))}
        </div>
    )
};

export default TechContainer;