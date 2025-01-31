/* Home.tsx */
import icon from '/home.svg';
import './Home.css';
import { useLocation, useNavigate } from 'react-router-dom';

function Home () {
    const route = useLocation().pathname;
    const navigate = useNavigate();

    const handleClick = () => {
        if (route !== '/') {
            navigate('/');
        }
    }

    return (
        <button 
        className='home'
        onClick={handleClick}>
            <img src={icon} alt="home-icon" className='home-icon' />
        </button>
    );
}

export default Home;