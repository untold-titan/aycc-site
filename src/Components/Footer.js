import './Footer.css'
import Discord from '../Images/Discord.png'
import Insta from '../Images/Insta.png'
import sponsors from '../Images/sponsors.png'
import logo from '../Images/logo.jpg'

export const Footer = () =>{
    return(
        <div className="footer">
            <div className='footer_div'>
                <img className="images" src={logo} alt="Abypc Logo"></img>
            </div>
            <div className='footer_div'>
                <h1>Sponsors</h1>
                <img alt="Sponsors." className='images' src={sponsors}></img>
            </div>
            <div className="socials">
                <h1>Socials</h1>
                <a className="footerLink" href="https://discord.gg/xjtxRZgppq">
                    <img alt="Discord Logo" width="50px" height="50px" src={Discord}/>
                </a>
                <a className="footerLink" href="https://www.instagram.com/calgaryyouthcodingclub/">
                    <img alt="Instagram Logo" widht="50px" height="50px" src={Insta}/>
                </a>
            </div>
        </div>
    );
}