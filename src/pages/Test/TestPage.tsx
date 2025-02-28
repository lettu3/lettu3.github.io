import CodeBlock from '../../components/CodeBlock/CodeBlock';
import './TestPage.css'
import { useEffect } from "react";

                                                                               
function TestPage () {


    /*
    useEffect(() => {
        document.body.classList.add("testing-mode");

        return () => {
            document.body.classList.remove("testing-mode");                   
        }; 
    }, []);
    */

    return (
        <div className="test-page">
            <CodeBlock />
        </div>
    );
}

export default TestPage;