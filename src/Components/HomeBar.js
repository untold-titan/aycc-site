import './HomeBar.css';
import {Link } from "react-router-dom";

export const HomeBar = () =>{
    return(
        <div class="container">
            <div class="title">
                <h1>ABYPC</h1>
            </div>
            <div class="navigation">
                <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/aboutus">About Us</Link>
                    </li>
                    <li>
                        <a href="Home">Projects</a>
                    </li>
                    <li>
                        <a href="Home">FAQ</a>
                    </li>
                </ul>
                </nav>
            </div>

        </div>
    );
}