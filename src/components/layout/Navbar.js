import React from 'react'

function Navbar() {
    return (
        <header className="nav-head">
            <nav>
                <div className="nav-brand">
                    <span>conduit</span>
                </div>
                <div className="nav-right">
                    <ul className="nav-list">
                        <li>Home</li>
                        <li>Sign in</li>
                        <li>Sign up</li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Navbar;
