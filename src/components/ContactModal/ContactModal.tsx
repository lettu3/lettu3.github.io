import './ContactModal.css';
import { useTranslation } from "react-i18next";
import  ReactDOM  from 'react-dom';

type ContactModalProps = {
    onClose: () => void;
}

function ContactModal({onClose}: ContactModalProps) {
    const {t} = useTranslation();

    return ReactDOM.createPortal(
        <div className="contact-modal-overlay">
            <div className="contact-modal-content">
                <h1>{t('contact')}</h1>
                <p>{t('sendmail')}</p>
                <p>ignas.gomezb12@gmail.com</p>
                <button className="contact-close-button" 
                        onClick={onClose}>
                    {t("close")}
                </button>
            </div> 
        </div>,
        document.getElementById("modal-root") as HTMLElement
    );
};

export default ContactModal;