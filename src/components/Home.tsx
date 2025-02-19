/* Home.tsx */
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
            本
        </button>
    );
}

export default Home;