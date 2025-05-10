import './Card.css';
import {motion} from 'framer-motion';

type CardProps = {
    header?: string;
    body?: string;
    children?: React.ReactNode;
};


function Card({header, body, children}: CardProps) {
    return (
        <motion.div 
            className='card'
            key={header}
            initial={{opacity: 0, y: 24, scale: 0.9}}
            whileInView={{opacity: 1, y: 0, scale: 1, transition: {duration: 0.5, ease: 'easeOut'}}}
            viewport={{once: true}}
            >
            {(header || body) && (
                <div className='card-content'>
                    <div className='card-header'
                         style={{display: header ? '' : 'none'}}
                    >
                        {header && header.toUpperCase()}
                    </div>
                    <div className='card-body'
                         style={{display: body ? '' : 'none'}}
                    >
                        {body}
                    </div>
                </div>
            )}

            <div className='card-footer'
                 style={{display: children ? '' : 'none'}}
            >
                {children}
            </div>
        </motion.div>
    );
};

export default Card;