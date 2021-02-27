import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Header() {
    const location = useLocation();
    const active = location.pathname.split('/')[1];
    return (
        <div>
            <header className="d-flex justify-around">
                <div className="d-flex">
                    <img src="./imgs/logo.jpg" height="50" alt="logo" />
                    <h2>DataGraph</h2>
                </div>
                <nav>
                    <Link to="/" className={`nav-link ${active === '' ? 'active' : ''}`}>Home</Link>
                    <Link to="/current" className={`nav-link ${active === 'current' ? 'active' : ''}`}>Current Data</Link>

                </nav>
                <img src="./imgs/comp_logo.png" height="50" alt="envision" />
            </header>
            <hr />
        </div>
    )
}
