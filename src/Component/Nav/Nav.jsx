import './Nav.css'
import Link from "../Link/Link";
import { FaFacebook, FaTwitter, FaLinkedinIn, FaDiscord, FaGithub } from "react-icons/fa";
import { GrClose } from "react-icons/gr";
import { useState, useEffect } from "react";
// import { RiMenu3Fill } from "react-icons/ri";
const Nav = () => {
    const routes = [
        { id: 1, path: 'https://www.facebook.com/profile.php?id=100005150418529', name: <FaFacebook /> },
        { id: 2, path: '/about', name: <FaTwitter /> },
        { id: 3, path: 'https://www.linkedin.com/in/arafat-sikder-45247020a/', name: <FaLinkedinIn /> },
        { id: 4, path: ' https://discord.com/channels/arafat3202', name: <FaDiscord /> },
        { id: 5, path: 'https://github.com/arafatsikder', name: <FaGithub /> },
    ];

    const [nav, setNav] = useState(false);
    const navOpen = () => {
        setNav(!nav);
    }

    const closeMenu = () => setNav(false)

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 190) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className='full'>
            <nav className ={`fixed w-full navbar transition duration-1s ease-in-out ${scrolled ? 'color pt-2 shadow-lg' : 'non-color pt-6'}`}>
                <div className='full-nave'>
                    <div>
                        <ul className="flex">
                            {routes.map(route => <Link key={route.id} route={route}></Link>)}
                        </ul>
                    </div>
                    {/* <div>
                        <button className=" text-2xl nav-bg p-3 rounded-lg " onClick={navOpen}><RiMenu3Fill /></button>
                    </div> */}

                    <ul className={nav ? "nav-menu active" : "nav-menu"}>
                        <div onClick={closeMenu} className="text-5xl flex flex-row-reverse p-8"><button><GrClose /></button></div>
                        <div className="spacing">
                            <li className='nav-item'>
                                <a href='/' onClick={closeMenu}>Home</a>
                            </li>
                            <li className='nav-item'>
                                <a href='#about' onClick={closeMenu}>About</a>
                            </li>
                            <li className='nav-item'>
                                <a href='#testimonials' onClick={closeMenu}>Testimonials</a>
                            </li>
                            <li className='nav-item'>
                                <a href='#demo' onClick={closeMenu}>Demo</a>
                            </li>
                        </div>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Nav;