import './ResumeButton.css';
import { useTranslation } from 'react-i18next';


function getLanguageStr(str : string){
    const match = str.match(/\[(.*?)\]/);
    const result = match ? match[1] : str;
    return result;
}

function getDocumentPath (lang : string) {
    const initialPath = './resume/resume_';
    const documentPath = initialPath + lang + '.pdf';
    return documentPath;
}

type ResumeButtonProps = {
    title: string;
}

function ResumeButton ({title} : ResumeButtonProps) {
    const {t} = useTranslation();
    const lang = getLanguageStr(title);
    const documentPath = getDocumentPath(lang);
    const documentName = 'Ignacio-Gomez-Barrios_'+ t('curriculum') + '_' + lang +'.pdf';

    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = documentPath;
        link.download = documentName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    return (
        <div className="resume-button-container">
            <button className='resume-button' onClick={handleDownload}>
                <span className='resume-button-text'>{title}</span>
                <img src='./downloadDark.svg' className='resume-button-img'/>
            </button>
        </div>
    );
}

export default ResumeButton;