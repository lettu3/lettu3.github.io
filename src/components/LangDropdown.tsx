/* LangDropdown.tsx */
import './LangDropdown.css';
import Dropdown from './Dropdown.tsx';
import {Item} from './Dropdown.tsx';
import i18next from 'i18next';


function LangDropDown () {

    const Languages : Item[] = [
        {id : 1, title : "[EN] - English"},
        {id : 2, title : "[ES] - Espanol"},
        {id : 3, title : "[JP] - 日本語"}
    ];

    const onItemSelect = (item: Item) => {
        switch (item.title) {
            case "[EN] - English":
                i18next.changeLanguage('en');
                break;
            case "[ES] - Espanol":
                i18next.changeLanguage('es');
                break;
            case "[JP] - 日本語":
                i18next.changeLanguage('jp');
                break;
            default:
                i18next.changeLanguage('en');
                break;
        }
    };
    
    return (
        <Dropdown items={Languages} onItemSelect={onItemSelect} buttonClassName='lang' imgClassName='lang-icon'/>
    );
}


export default LangDropDown;
