/* LangDropdown.tsx */
import './LangDropdown.css';
import Dropdown from './Dropdown.tsx';
import {Item} from './Dropdown.tsx';
import i18next from 'i18next';
import { useSelector } from 'react-redux';
import { RootState } from '../state/store.ts';
import { useTranslation } from 'react-i18next';


function LangDropDown () {
    const {t} = useTranslation();
    const {width} = useSelector((state: RootState) => state.window);


    const Languages : Item[] = [
        {id : 1, title : "[EN] - English"},
        {id : 2, title : "[ES] - Espanol"},
        {id : 3, title : "[JP] - 日本語"}
    ];

    const isMobile = width < 480;
    const currentIcon = isMobile ? 'dropdown' : 'lang';

    const dropDownText = isMobile ? (t('language')) : '';


    const onItemSelect = (item: Item) => {
        switch (item.title) {
            case "[EN] - English":
                i18next.changeLanguage('en');
                localStorage.setItem('i18nextLng', 'en');
                break;
            case "[ES] - Espanol":
                i18next.changeLanguage('es');
                localStorage.setItem('i18nextLng', 'es');
                break;
            case "[JP] - 日本語":
                i18next.changeLanguage('jp');
                localStorage.setItem('i18nextLng', 'jp');
                break;
            default:
                i18next.changeLanguage('en');
                localStorage.setItem('i18nextLng', 'en');
                break;
        }
    };

    return (
        <Dropdown 
            items={Languages} 
            buttonClassName='lang'
            imgTitle={currentIcon} 
            imgClassName='lang-icon'
            textButton={dropDownText}
            onItemSelect={onItemSelect} />
    );
}


export default LangDropDown;
