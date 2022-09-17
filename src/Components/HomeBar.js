import './HomeBar.css';
import { Link } from "react-router-dom";
import { useState } from "react";
import MediaQuery from 'react-responsive';
import { Dropdown } from './Dropdown';
import Logo from '../Images/logo.jpg'

export const HomeBar = () => {

    const [navBarOpen, toggleNavBar] = useState(false);

    const toggleMenu = () => {
        toggleNavBar(!navBarOpen);
    }

    const closeMenu = () => {
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
                        <Link to="/join-us" onClick={closeMenu}>Join Us</Link>
                    </li>
                    <li>
                        <Link to="/programs/events" onClick={closeMenu}>Events</Link>
                    </li>
                    <li>
                        <Link to="/programs/products" onClick={closeMenu}>Products</Link>
                    </li>
                    <li>
                        <Link to="/programs/classes" onClick={closeMenu}>Classes</Link>
                    </li>
                </ul>
            </div>

            {/* Normal Home Bar Stuff */}
            <div className="title">
                {/* <h1>ABYPC</h1> */}
                <img className="logo" alt="logo" src={Logo}></img>
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
                                <Dropdown categoryName="Programs" links={[{name:"Events",path:"/programs/events"},{name:"Packages",path:"/programs/packages"}]}/>
                            </li>
                            <li>
                                <Dropdown categoryName="About Us" links={[{name:"Community",path:"/about-us/community"},{name:"Contact Us",path:"/about-us/contact-us"}]}/>
                            </li>
                            <li>
                                <Dropdown categoryName="Education" links={[{name:"Classes",path:"/education/classes"},{name:"Booklets",path:"/education/booklets"}]}/>
                            </li>
                            <li>
                                <Link to="/volunteer">Volunteer</Link>
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