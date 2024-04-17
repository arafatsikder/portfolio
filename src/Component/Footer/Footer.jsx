import Link from '../Link/Link';
import './Footer.css'
import { FaFacebook, FaTwitter, FaLinkedinIn, FaDiscord, FaGithub } from "react-icons/fa";

const Footer = () => {
    const routes = [
        { id: 1, path: 'https://www.facebook.com/profile.php?id=100005150418529', name: <FaFacebook /> },
        { id: 2, path: '/about', name: <FaTwitter /> },
        { id: 3, path: 'https://www.linkedin.com/in/arafat-sikder-45247020a/', name: <FaLinkedinIn /> },
        { id: 4, path: 'https://discord.com/channels/arafat3202', name: <FaDiscord /> },
        { id: 5, path: 'https://github.com/arafatsikder', name: <FaGithub /> },
    ];
    return (
        <div className='footer'>
            <div className='spacing'>
                <div className=''>
                    <ul className="footer-menu">
                        {routes.map(route => <Link key={route.id} route={route}></Link>)}
                    </ul>
                </div>

                <div className="hr-div">
                    <hr className='hr-line' />
                </div>
                <footer className='text-center copyright'>
                    <p>&copy; 2024 Arafat Sikder. All rights reserved.</p>
                </footer>

            </div>
        </div>
    );
};

export default Footer;