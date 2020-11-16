import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaExternalLinkAlt, FaTimes } from 'react-icons/fa'
import './Navbar.css'

function Navbar() {

    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

    return (
        <>
            <div className="navbar">
                <div className="navbar-container container">
                    <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                        Will Conry
                    </Link>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item">
                            <Link to='/' className="nav-links" onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/resume' className="nav-links" onClick={closeMobileMenu}>
                                Resume
                            </Link>
                        </li>
                        <li className="nav-item">
                            <a href="http://github.com/willconry" target="_blank" rel="noreferrer" className="nav-links" onClick={closeMobileMenu}>
                                GitHub
                                <FaExternalLinkAlt className='external-link-icon' />
                            </a>
                        </li>
                    </ul>
                    <div className="menu-icon" onClick={handleClick} >
                        {click ? <FaTimes /> : <FaBars />}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
