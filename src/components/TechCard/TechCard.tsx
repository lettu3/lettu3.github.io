import './TechCard.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../state/store';

type TechCardProps = {
    title: string;
};


function TechCard ({title}: TechCardProps) {
    const theme = useSelector((state: RootState) => state.theme.value);

    const imgName = theme === 'light' ? `${title.toLowerCase()}Light.svg` : `${title.toLowerCase()}Dark.svg`;

    const images = import.meta.glob('/src/assets/*.svg', { eager: true });

    const imgPath = images[`/src/assets/${imgName}`]?.default;

    return (
        <div className='tech-card'>
            <div className='tech-card-logo'>
                <img src={imgPath} />
            </div>
            <div className='tech-card-title'>
                {title}
            </div>
        </div>
    );
};

export default TechCard;