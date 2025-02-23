import Burger from '../../components/Burger/Burger';
import ContactButton from '../../components/ContactButton/ContactButton';
import Home from '../../components/Home';
import LangDropDown from '../../components/LangDropdown';
import Theme from '../../components/Theme';
import GithubButton from '../../components/GithubButton/GithubButton';
import './NHeader.css';

function NHeader (){

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
                <LangDropDown/>
                <GithubButton/>
                <Burger/>
            </div>
        </div>
    );
}

export default NHeader;
