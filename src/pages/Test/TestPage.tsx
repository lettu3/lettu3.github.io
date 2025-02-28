import './TestPage.css'
import { useEffect } from "react";

                                                                               
function TestPage () {

    useEffect(() => {
        document.body.classList.add("testing-mode");

        return () => {
            document.body.classList.remove("testing-mode");                   
        }; 
    }, []);

    return (
        <div className="test-page">
            <h1>Testing Page</h1>
        </div>
    );
}

export default TestPage;