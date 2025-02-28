import CodeBlock from '../../components/CodeBlock/CodeBlock';
import './TestPage.css';

                                                                               
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
            <CodeBlock code=''/>
        </div>
    );
}

export default TestPage;