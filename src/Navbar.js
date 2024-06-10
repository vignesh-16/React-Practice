import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <nav className="navbar">
             <h1>The Navbar</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/profile">Profile</Link>
                <Link to="/todo">To Do</Link>
                <Link to="/createStory">Create Story</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;