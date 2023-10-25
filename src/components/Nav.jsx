import { NavLink } from "react-router-dom";

export default function Nav() {
    return (
        <nav>
            <NavLink to="/">Dialogboks</NavLink>
            <NavLink to="/about">Side 2</NavLink>
            <NavLink to="/contact">Side 3</NavLink>
        </nav>
    );
}
