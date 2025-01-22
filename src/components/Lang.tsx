import './Lang.css'
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../state/store";
import { AVAILABLE_LANGUAGES } from "../constants";
import { setLanguage } from "../state/lang/langSlice";
import i18next from "i18next";

export default function Lang () {
    const lang = useSelector((state: RootState) => state.lang.value);
    const theme = useSelector((state: RootState) => state.theme.value);
    const dispatch = useDispatch();

    const current_icon = theme === 'light' ? '/langLight.svg' : '/langDark.svg';
    const handleLang = () => {
        const currentIndex = AVAILABLE_LANGUAGES.indexOf(lang);
        const nextIndex = (currentIndex + 1) % AVAILABLE_LANGUAGES.length;
        dispatch(setLanguage(AVAILABLE_LANGUAGES[nextIndex]));
        i18next.changeLanguage(AVAILABLE_LANGUAGES[nextIndex]);
    };
    return (
        <button
            onClick={()=>handleLang()}
            className="lang">
        <img src={current_icon} className='lang-icon'/>
        </button>
    )
}