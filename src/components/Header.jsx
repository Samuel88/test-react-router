import { NavLink } from "react-router-dom";

const Header = () => <nav>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/contact">Contact</NavLink>
    <NavLink to="/user">User</NavLink>
</nav>
export default Header;