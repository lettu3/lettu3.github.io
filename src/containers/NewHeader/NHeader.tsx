import ContactButton from '../../components/ContactButton/ContactButton';
import Home from '../../components/Home';
import LangDropDown from '../../components/LangDropdown';
import Theme from '../../components/Theme';
import './NHeader.css';

function NHeader (){
    const items = [
        {id: 1, title: "[EN] - English", },
        {id: 2, title: "[ES] - Espanol", }, 
        {id: 3, title: "[JP] - 日本語", },
    ]
    return (
        <div className='nheader-component'>
            <div className='nheader-column1'>
                <Home/>
            </div>
            <div className='nheader-column2'>
                <ContactButton/>
            </div>
            <div className='nheader-column3'>
                <Theme/>
                <LangDropDown items={items}/>
            </div>
        </div>
    );
}

export default NHeader;
