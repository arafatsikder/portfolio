import './Nav.css'
import Link from "../Link/Link";
import { FaFacebook, FaTwitter, FaLinkedinIn, FaDiscord, FaGithub } from "react-icons/fa";
import { GrClose } from "react-icons/gr";
import { useState, useEffect } from "react";
// import { RiMenu3Fill } from "react-icons/ri";
const Nav = () => {
    const routes = [
        { id: 1, path: '/', name: <FaFacebook /> },
        { id: 2, path: '/about', name: <FaTwitter /> },
        { id: 3, path: '/services', name: <FaLinkedinIn /> },
        { id: 4, path: '/contact', name: <FaDiscord /> },
        { id: 5, path: '/github', name: <FaGithub /> },
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
            <nav className ={` fixed w-full navbar transition duration-1000 ease-in-out ${scrolled ? 'color pt-4 shadow-lg' : 'non-color pt-8'}`}>
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