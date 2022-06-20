import './HomeBar.css';
import { Link } from "react-router-dom";
import { useState } from "react";
import MediaQuery from 'react-responsive';

export const HomeBar = () => {

    const [navBarOpen, toggleNavBar] = useState(false);


    const toggleMenu = () => {
        toggleNavBar(!navBarOpen);
    }

    const closeMenu = () =>{
        toggleNavBar(false);
    }

    return (
        <div className={'container'}>
            {/* Navigation Menu for Mobile Users */}
            <div className={navBarOpen ? "navMenu showMenu" : "navMenu closeMenu"}>
                <button className="navButton" onClick={toggleMenu}>☰</button>
                <ul>
                    <li>
                        <Link to="/" onClick={closeMenu}>Home</Link>
                    </li>
                    <li>
                        <Link to="/projects" onClick={closeMenu}>Projects</Link>
                    </li>
                    <li>
                        <Link to="/faq" onClick={closeMenu}>FAQ</Link>
                    </li>
                    <li>
                        <Link to="/contact-us" onClick={closeMenu}>Contact Us</Link>
                    </li>
                    <li>
                        <Link to="/sponsors" onClick={closeMenu}>Sponsors</Link>
                    </li>
                    <li>
                        <Link to="/join-us" onClick={closeMenu}>Join Us</Link>
                    </li>
                </ul>
            </div>

            {/* Normal Home Bar Stuff */}
            <div className="title">
                <h1>ABYPC</h1>
            </div>

            <div className="navigation">
                <nav>
                    {/* Used on Desktop Version */}
                    <MediaQuery minWidth={1224}>
                        <ul className="desktopNav">
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/projects">Projects</Link>
                            </li>
                            <li>
                                <Link to="/faq">FAQ</Link>
                            </li>
                            <li>
                                <Link to="/contact-us">Contact Us</Link>
                            </li>
                            <li>
                                <Link to="/sponsors">Sponsors</Link>
                            </li>
                            <li>
                                <Link to="/join-us">Join Us</Link>
                            </li>
                        </ul>
                    </MediaQuery>
                    {/* Used on Mobile Version */}
                    <MediaQuery maxWidth={1224}>
                        <ul>
                            <li>
                                <button className='navButtonButNotTheImportantOne' onClick={toggleMenu}>☰</button>
                            </li>
                        </ul>
                    </MediaQuery>
                </nav>
            </div>
        </div>
    );
}