/* Body.tsx */
import Personal from "../../components/Personal";
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
                <h1>{t('index')}</h1>
                <p>/<Link to="/about">{t('about')}</Link></p>
                <p>/<Link to="/projects">{t('projects')}</Link></p>
                <p>/<Link to="/offtopic">{t('offtopic')}</Link></p>
            </div>
        </div>
        <div className="body-column-2">
            <Personal />
        </div>

        </div>
    );
}