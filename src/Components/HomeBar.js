import './HomeBar.css';
import {Link } from "react-router-dom";
import {useState} from "react";

export const HomeBar = () =>{

    const [navBarOpen,toggleNavBar] = useState(false);
    

    const toggleMenu = () =>{
        toggleNavBar(!navBarOpen);
    }

    return(
        <div className={'container'}>
            <div class={navBarOpen?"navMenu showMenu":"navMenu"}>
                <button onClick={toggleMenu}>☰</button>
                <ul>
                    <li>
                        <p>OUAHHHHH</p>
                    </li>
                </ul>
            </div>
            <div className="title">
                <h1>ABYPC</h1>
            </div>
            <div className="navigation">
                <nav>
                <ul>
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
                    <li>
                        <a onClick={toggleMenu}>☰</a>
                    </li>
                </ul>

                </nav>
            </div>

        </div>
    );
}