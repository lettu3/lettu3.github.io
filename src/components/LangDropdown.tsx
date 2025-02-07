/* LangDropdown.tsx */
import './Lang.css';
import Dropdown from './Dropdown.tsx';
import {Item} from './Dropdown.tsx';
import i18next from 'i18next';

type LangDropdownProps = {
    items: Item[];
};

function LangDropDown ({items} : LangDropdownProps) {
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
        <Dropdown items={items} onItemSelect={onItemSelect}/>
    );
}


export default LangDropDown;
