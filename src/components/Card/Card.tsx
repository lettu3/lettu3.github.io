import './Card.css';


type CardProps = {
    header?: string;
    body?: string;
    children?: React.ReactNode;
};


function Card({header, body, children}: CardProps) {
    return (
        <div className='card'>
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
        </div>
    );
};

export default Card;