import {NavLink} from "react-router-dom";

export default function Nav() {
    return <nav>
        <ul>
            <li>
                <NavLink exact to="/" activeClassName="nav-active">Home</NavLink>
            </li>
            <li>
                <NavLink exact to="/about" activeClassName="nav-active">About</NavLink>
            </li>
            <li>
                <NavLink to="/products" activeClassName="nav-active">Products</NavLink>
            </li>
        </ul>
    </nav>
}