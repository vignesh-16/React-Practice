import { Link } from "react-router-dom/cjs/react-router-dom.min";

const NotExists = () => {
    return ( 
        <div className="does-not-exits">
            <h2>Sorry</h2>
            <p>The page you're looking cannot be found.</p>
            <Link to="/">Back to homepage..</Link>
        </div>
     );
}
 
export default NotExists;