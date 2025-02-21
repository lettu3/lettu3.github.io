/*Burger.tsx*/
/*
The idea is similar to dropdown, but without location functionality,
because burger will fullfill the screen, so you won't be able to change the location 
*/

import './Burger.css';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../state/store';
import { toggleBurger } from '../../state/burger/burgerSlice';
import ContactButton from '../ContactButton/ContactButton';
import LangDropDown from '../LangDropdown';


function Burger (){
    const isOpen = useSelector((state: RootState) => state.burger.isOpen);
    const theme = useSelector((state: RootState) => state.theme.value);

    const dispatch = useDispatch();

    const burgerPath = theme === 'light' ? './burgerLight.svg' : './burgerDark.svg';

    const handleToggle = () => {
        dispatch(toggleBurger(!isOpen));
    }

    return (
        <div className='burger'>
            <button className='burger-button' onClick={handleToggle}><img src={burgerPath} className='burger-icon'/></button>
            {isOpen && 
            <div className='burger-menu'>
                <div className='burger-menu-top'><LangDropDown /></div>
                <div className='burger-menu-bottom'><ContactButton /></div>

                
                
            </div>}   
        </div>
    );
}

export default Burger;