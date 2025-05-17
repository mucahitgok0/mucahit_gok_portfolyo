// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';  // react-router-dom'dan Link import edin
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <h1 className="logo">Mücahit Gök</h1>
                <ul className="nav-links">
                    <li><a href="#home">Anasayfa</a></li>
                    <li><a href="#about">Ben Kimim</a></li>
                    <li><a href="#services">Hizmetler</a></li>
                    <li><a href="#projects">Projeler</a></li>
                    <li><a href="#contact">İletişim</a></li> {/* İletişim linki */}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;