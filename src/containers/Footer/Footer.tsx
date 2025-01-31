/* Footer.tsx */
import { useTranslation } from 'react-i18next'
import './Footer.css';

export default function Footer () {
    const {t} = useTranslation();
    return (
        <div className='footer-component'>
            <div className='footer-columns'>
                <div className="footer-contact">
                    <h1>{t('contact')}</h1>
                    <p>{t('personal_email')}</p>
                    <p>{t('academic_email')}</p>
                </div>
                <div className='footer-social'>
                    <h1>{t('social')}</h1>
                    <p><a href="https://github.com/lettu3" target="_blank" rel="noopener noreferrer">Github</a></p>
                    <p><a href="https://linkedin.com/in/ignacio-gomez-barrios-53701a172/" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
                </div>
            </div>
            <div className='footer-bottom'>
                <p>{t('footer')}</p>
                <p>{t('footer2')}</p>
            </div>
        </div>
    );
}