import './Footer.css'
import Discord from '../Images/Discord.png'
import Insta from '../Images/Insta.png'
import {faker} from '@faker-js/faker'

export const Footer = () =>{
    return(
        <div className="footer">
            <div className='footer_div'>
                <h1>Contact Us!</h1>
                <p>{faker.hacker.phrase()}</p>
            </div>
            <div className="footer_div">
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