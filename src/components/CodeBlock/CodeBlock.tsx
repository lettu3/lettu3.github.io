import { useState } from 'react';
import './CodeBlock.css'
import { useTranslation } from 'react-i18next';
import { PrismAsyncLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import {typescript} from 'react-syntax-highlighter/dist/esm/languages/prism';

type CodeBlockProps = {
    code: string;
};

function CodeBlock ({code} : CodeBlockProps){
    const {t} = useTranslation();
    const [copied, setCopied] = useState(false);

    SyntaxHighlighter.registerLanguage('typescript', typescript);

    const handleCopy = async () => {
        try{
            await navigator.clipboard.writeText(code);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
            console.log("copied");
        }
        catch{
            console.error("Error copying to clipboard");
            setCopied(false);
        }
    };

    return (
        <div className = 'code-block'>
            <div className="code-top"></div>
            <SyntaxHighlighter 
                language="javascript" 
                customStyle={{
                    backgroundColor: 'none',
                    fontSize: '1rem',
                    fontFamily: '"Source Code Pro", monospace'
                }}
                useInlineStyles={true}>
                {code}
            </SyntaxHighlighter>
            <div className="code-bar">
                <button className='copy-button' onClick={handleCopy}>
                    {copied ? t('copied') : t('copy')}
                </button>
            </div>
        </div>
    );
}

export default CodeBlock;