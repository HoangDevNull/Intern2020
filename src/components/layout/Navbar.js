import React from 'react'
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <header className="nav-head">
            <nav>
                <div className="nav-brand">
                    <span>conduit</span>
                </div>
                <div className="nav-right">
                    <ul className="nav-list">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/signin">Sign in</Link></li>
                        <li><Link to="/signup">Sign up</Link></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}



export default Navbar;
