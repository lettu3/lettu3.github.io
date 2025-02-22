import './TechContainer.css';

import TechCard from "../../components/TechCard/TechCard";

function TechContainer(){
    const technologies = [
        {name: "TypeScript", color: "3178c6"},
        {name: "JavaScript", color: "f7df1e"},
        {name: "Python", color: "4584b6"},
        {name: "Java", color: "f8981d"},
        {name: "Clang", color: "00599c"},
        {name: "Cpp", color: "00599c"},
        {name: "Haskell", color: "5e5086"},
        {name: "arm", color: "0091bd"},
        {name: "React", color: "61dafb"},
        {name: "Redux", color: "764abc"},
        {name: "FastAPI", color: "009688"},
        {name: "ApacheSpark", color: "e25a1c"},
        {name: "MySQL", color: "f8981d"},
        {name: "MongoDB", color: "00ed64"},
        {name: "Git", color: "f03c2e"},
        {name: "HTML", color: "e44d26"},
        {name: "Docker", color: "066da5"},
        {name: "Linux", color: "f6da4a"},
        {name: "Bash", color: "4da825"}
    ]
    return (
        <div className='tech-container'>
            {technologies.map((tech, index) => (
                <TechCard key={index} title={tech.name} hoverColor={tech.color} />
            ))}
        </div>
    )
};

export default TechContainer;