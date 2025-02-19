/* Home.tsx */
import { RootState } from '../state/store';
import './Home.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

function Home () {
    const theme = useSelector((state: RootState) => state.theme.value);
    const route = useLocation().pathname;
    const navigate = useNavigate();

    const [currentIcon, setCurrentIcon] = useState<string>(
        theme === 'light' ? '/homeLight.svg' : '/homeDark.svg'
    );

    useEffect(() => {
        const icon = theme === 'light' ? '/homeLight.svg' : '/homeDark.svg';
        setCurrentIcon(icon);
    }, [theme]);

    const handleClick = () => {
        if (route !== '/') {
            navigate('/');
        }
    }

    return (
        <button 
        className='home'
        onClick={handleClick}>
            <img src={currentIcon} className='home-icon' />
        </button>
    );
}

export default Home;