import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './ContactButton.css'

import ContactModal from '../ContactModal/ContactModal';

function ContactButton () {
    const [isOpen, setIsOpen] = useState(false);
    const {t} = useTranslation();

    const handleOpen = () => {
        setIsOpen(true);
    }
    const handleClose = () => {
        setIsOpen(false);
    }
    
    return (
        <>
            <button className="contact-button" onClick={handleOpen}>{t("contact")}</button>
            {isOpen &&  (<ContactModal onClose={handleClose}/>)}
        </>
    );
}

export default ContactButton;