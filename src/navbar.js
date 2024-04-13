import React from "react";
import {Link} from "react-router-dom"

const Navbar = () => {
    return (
    <nav>
        <ul>
            <li><Link to="/">Hem</Link></li>
            <li><Link to="/products">Produkter</Link></li>
        </ul>
    </nav>
    );
}

export default Navbar