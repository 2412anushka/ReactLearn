import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faEnvelope,faBug } from '@fortawesome/free-solid-svg-icons'
import { faBug } from "@fortawesome/free-solid-svg-icons";
const NotFound = () => {
    return ( 
        <div className="not-found">
            <h1>404</h1>
            <div><FontAwesomeIcon icon={faBug} /></div>
            <p>Page Not Found!!</p>
            <Link to="/">Back to Home page</Link>
        </div>
     );
}
 
export default NotFound;