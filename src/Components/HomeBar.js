import './HomeBar.css';
import {Link } from "react-router-dom";

export const HomeBar = () =>{
    return(
        <div className="container">
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
                        <Link to="/aboutus">About Us</Link>
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
                </nav>
            </div>

        </div>
    );
}