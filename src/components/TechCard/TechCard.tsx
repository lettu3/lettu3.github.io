import './TechCard.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../state/store';

type TechCardProps = {
    title: string;
};


function TechCard ({title}: TechCardProps) {
    const theme = useSelector((state: RootState) => state.theme.value);

    const imgName = theme === 'light' ? `${title.toLowerCase()}Light.svg` : `${title.toLowerCase()}Dark.svg`;

    const images = import.meta.glob('/src/assets/*.svg', { eager: true }) as Record<string, { default: string }>;

    const imgPath = images[`/src/assets/${imgName}`]?.default;

    //probably the worst thing i've ever wrotten
    let titleN : string;
    switch (title) {
        case 'arm':
            titleN = 'ARMv8';
            break;
        case 'Cpp':
            titleN = 'C++';
            break;
        case 'Clang':
            titleN = 'C';
            break;
        case 'ApacheSpark':
            titleN = 'Apache Spark';
            break;
        default:
            titleN = title;
            break;
    }



    return (
        <div className='tech-card' 
        >
            <div className='tech-card-logo'>
                <img src={imgPath} />
            </div>
            <div className='tech-card-title'>
                {titleN}
            </div>
        </div>
    );
};

export default TechCard;