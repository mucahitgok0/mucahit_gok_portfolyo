// Navbar.js
import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <h1 className="logo">Mücahit Gök</h1>

                <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
                    <li><a href="#home" onClick={() => setMenuOpen(false)}>Anasayfa</a></li>
                    <li><a href="#about" onClick={() => setMenuOpen(false)}>Ben Kimim?</a></li>
                    <li><a href="#services" onClick={() => setMenuOpen(false)}>Neler yapabilirim?</a></li>
                    <li><a href="#projects" onClick={() => setMenuOpen(false)}>Portfolyo</a></li>
                    <li><a href="#contact" onClick={() => setMenuOpen(false)}>İletişim</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
