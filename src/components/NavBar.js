import { Link } from "react-router-dom";
import Logo from "../Images/LogoWhite.png";

import './NavBar.css'

function NavBar() {
    return (
        <nav className="NavBar">
            <ul className="ListItems">
                <li className="LinkDecoration"><Link className="NavLink" to="/">HOME</Link></li>
                <li className="LinkDecoration"><Link className="NavLink" to="/projects">PROJECTS</Link></li>
            </ul>
            <img className="NavLogo" src={Logo} alt="Orion company logo "/>
            <ul className="ListItems">
                <li className="LinkDecoration"><Link className="NavLink" to="/about">ABOUT</Link></li>
                <li className="LinkDecoration"><Link className="NavLink" to="/contact">CONTACT</Link></li>
            </ul>
        </nav>
    );
}

export default NavBar;