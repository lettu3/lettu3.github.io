import './NotFoundPage.css';
import {Link} from "react-router-dom";

function NotFoundPage () {
    return (
        <div className="notfound-page">
            <h1>404: Not Found</h1>
            <p><Link to="/" >Return</Link></p>
        </div>
    );
}

export default NotFoundPage;