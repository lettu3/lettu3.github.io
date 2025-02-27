import './TestPage.css'
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../state/store";

import Theme from '../../components/Theme';
import Card from '../../components/Card/Card';

function TestPage () {

    useEffect(() => {
        document.body.classList.add("testing-mode");

        return () => {
            document.body.classList.remove("testing-mode");
        };
    }, []);

    return (
        <div className="TestPage">
            <h1>Testing Page</h1>
        </div>
    );
}

export default TestPage;