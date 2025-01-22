import {Link} from "react-router-dom";
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../state/store';

function NotFoundPage () {
    //apply theme
    const theme = useSelector((state: RootState) => state.theme.value);
    useEffect(() => {
      document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);
    return (
        <div>
            <h1>404: Not Found</h1>
            <p><Link to="/" >Return</Link></p>
        </div>
    );
}

export default NotFoundPage;