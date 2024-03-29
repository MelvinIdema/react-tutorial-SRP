import { NavLink } from "react-router-dom";
import "./index.css";

export default function Navbar(props) {
    const cartCount = props.cart.reduce(
        (total, product) => total + product.quantity,
        0
    );

    return (
        <nav className="navbar">
            <NavLink to="/" className="nav-brand">
                Bakery Chantal
            </NavLink>
            <ul>
                <li className="nav-item">
                    <NavLink exact activeClassName="active" to="/">
                        Home
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink exact activeClassName="active" to="/about">
                        About us
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink activeClassName="active" to="/products">
                        Products
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/cart" className="nav-item nav-cart btn btn-accent">
                        Cart ({cartCount})
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}