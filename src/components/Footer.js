import React from 'react'
import { FaRegEnvelope, FaGithub } from 'react-icons/fa'

function Footer() {
    return (
        <>
        <div className="footer-spacer"></div>
        <div className="footer">
            <div className="footer-container">
                <div className="about">
                    <h1>Welcome</h1>
                    <p>This is my website. It isn't much but it's something.</p>
                </div>
                <div className="social">
                    <h1>Contact</h1>
                    <ul>
                        <li>
                            <a href="https://github.com/willconry" target="_blank" rel="noreferrer" className="footer-link">
                                <FaGithub /> GitHub
                            </a>
                        </li>
                        <li>
                            <a href="mailto:will@conry.ca" target="_blank" rel="noreferrer" className="footer-link">
                                <FaRegEnvelope /> Email
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        </>
    )
}

export default Footer
