import './Footer.css'
import Discord from '../Images/Discord.png'
import Insta from '../Images/Insta.png'

export const Footer = () =>{
    return(
        <div className="footer">
            <div className="socials">
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