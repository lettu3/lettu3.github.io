/* Body.tsx */
import './Body.css';
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function Body () {
    const {t} = useTranslation();

    return (
        <div className="body-component">
            <div className="body-column-1">
                <div className="welcome">
                    <h1>
                    {t('welcome')}
                    </h1>
                </div>
                <div className="index">
                    <h1>{t('index').toUpperCase()}</h1>
                    <div>
                        <p>/<Link to="/about">{t('about')}</Link></p>
                        <p>/<Link to="/projects">{t('projects')}</Link></p>
                        <p>/<a href="https://lettu3.github.io/offtopic">{t('offtopic')}</a></p>
                    </div>
                </div>
            </div>
        </div>
    );
}