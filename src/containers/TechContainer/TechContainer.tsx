import './TechContainer.css';

import TechCard from "../../components/TechCard/TechCard";

function TechContainer(){
    const technologies = ["TypeScript", "JavaScript", "Python", "Java",
                          "Clang", "Cpp", "Haskell", "arm", "React",
                          "Redux", "FastAPI", "ApacheSpark", "MySQL",
                          "MongoDB", "Git", "HTML", "Docker", "Linux",
                          "Bash"];
    return (
        <div className='tech-container'>
            {technologies.map((tech, index) => (
                <TechCard key={index} title={tech} />
            ))}
        </div>
    )
};

export default TechContainer;