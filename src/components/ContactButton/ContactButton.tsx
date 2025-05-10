import { useState, useLayoutEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, useAnimation } from 'framer-motion';
import './ContactButton.css'

import ContactModal from '../ContactModal/ContactModal';

function ContactButton () {
    const [isOpen, setIsOpen] = useState(false);
    const {t, i18n} = useTranslation();
    const controls = useAnimation();

    const handleOpen = () => {
        setIsOpen(true);
    }
    const handleClose = () => {
        setIsOpen(false);
    }

    useLayoutEffect(() => {
        controls.start({
            scale: [0.9, 1],
            transition: { duration: 0.2, ease: 'easeOut' }
        });
    }, [i18n.language]);
    
    return (
        <>
            <motion.button 
                className="contact-button" 
                onClick={handleOpen}
                key={i18n.language}
                animate={controls}>
                    {t("contact")}
                </motion.button>
            {isOpen &&  (<ContactModal onClose={handleClose}/>)}
        </>
    );
}

export default ContactButton;