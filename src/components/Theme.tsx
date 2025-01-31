/* Theme.tsx */
import './Theme.css'
import { RootState } from '../state/store';
import { useDispatch, useSelector} from "react-redux"
import { toggleTheme } from "../state/theme/themeSlice";

export default function Theme () {
    const theme = useSelector((state: RootState) => state.theme.value);
    const dispatch = useDispatch();

    const currentScheme = theme === 'light' ? '/schemeLight.svg' : '/schemeDark.svg';

    return (
            <button 
                onClick={()=> dispatch(toggleTheme())}
                className='theme'>
                <img src={currentScheme} className='theme-icon'/>
            </button>
    )
}