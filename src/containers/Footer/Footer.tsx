/* Footer.tsx */
import { useTranslation } from 'react-i18next'
import './Footer.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../state/store';  

export default function Footer () {
    const theme = useSelector((state: RootState) => state.theme.value);
    const {t} = useTranslation();

    const githubIcon = theme === 'light' ? '/githubLight.svg' : '/githubDark.svg';
    const linkedinIcon = theme === 'light' ? '/linkedinLight.svg' : '/linkedinDark.svg';

    return (
        <div className='footer-component'>
            <div className='footer-columns'>
                <div className="footer-contact">
                    <h1>{t('contact')}</h1>
                    <p>{t('personal_email')}</p>
                </div>
                <div className='footer-social'>
                    <h1>{t('social')}</h1>
                    <p>
                        <a href="https://github.com/lettu3" target="_blank" rel="noopener noreferrer" className='social-link'>
                            <img src={githubIcon} alt="github-icon" />
                            Github
                        </a>
                    </p>
                    <p>
                        <a href="https://linkedin.com/in/ignacio-gomez-barrios-53701a172/" target="_blank" rel="noopener noreferrer" className='social-link'>
                            <img src={linkedinIcon} alt="linkedin-icon" />
                            LinkedIn
                        </a>
                    </p>
                </div>
            </div>
            <div className='footer-bottom'>
                <p>{t('footer')}</p>
                <p>{t('footer2')}</p>
            </div>
        </div>
    );
}