/* Theme.tsx */
import './Theme.css'
import { RootState } from '../state/store';
import { useDispatch, useSelector} from "react-redux"
import { toggleTheme } from "../state/theme/themeSlice";

export default function Theme () {
    const theme = useSelector((state: RootState) => state.theme.value);
    const {width} = useSelector((state: RootState) => state.window);
    const dispatch = useDispatch();
    
    const isMobile = width < 480;

    let currentScheme = theme === 'light' ? '/schemeLight.svg' : '/schemeDark.svg';
    if (isMobile && (theme === 'light')) {
        currentScheme = '/schemeDark.svg';
    }
    else if (isMobile && (theme === 'dark')) {
        currentScheme = '/schemeLight.svg';
    }

    return (
            <div className='theme-container'>
                <button 
                    onClick={()=> dispatch(toggleTheme())}
                    className='theme'>
                    <img src={currentScheme} className='theme-icon'/>
                </button>
            </div>

    )
}