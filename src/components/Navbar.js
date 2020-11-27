import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaExternalLinkAlt, FaTimes } from 'react-icons/fa'
import './Navbar.css'

function Navbar() {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

    const [scroll, setScroll] = useState(false)
    const handleScroll = () => {
        if (window.pageYOffset > 16) {
            if (!scroll) setScroll(true)
        } else {
            if (scroll) setScroll(false)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    })

    return (
        <>
            <div className={scroll ? "navbar scroll" : "navbar"}>
                <div className="navbar-container">
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
                            <a href="https://github.com/willconry" target="_blank" rel="noreferrer" className="nav-links" onClick={closeMobileMenu}>
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
