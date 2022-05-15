import './HomeBar.css';
export const HomeBar = () =>{
    return(
        <div class="container">
            <div class="title">
                <h1>AYPC</h1>
            </div>
            <div class="navigation">
                <ul>
                    <li>
                        <p>Home</p>
                    </li>
                    <li>
                        <p>About Us</p>
                    </li>
                    <li>
                        <p>Contact</p>
                    </li>
                    <li>
                        <p>Projects</p>
                    </li>
                    <li>
                        <p>FAQ</p>
                    </li>
                </ul>
                {/* <div class="social-buttons">
                <ul>
                    <li>
                        <p>discord</p>
                    </li>
                </ul>
                </div> */}
            </div>

        </div>
    );
}