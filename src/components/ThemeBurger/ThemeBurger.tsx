import './ThemeBurger.css';

import { useState } from 'react';

function ThemeBurger(){
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='theme-burger'>
            <button className='theme-burger-button' onClick={()=>setIsOpen(!isOpen)}>THEME</button>
            {isOpen && 
            <div className='theme-burger-dropdown'>hola</div>}
        </div>
    );
};

export default ThemeBurger;