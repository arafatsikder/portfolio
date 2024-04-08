import Link from "../Link/Link";
import { FaFacebook, FaTwitter, FaLinkedinIn, FaDiscord, FaGithub } from "react-icons/fa";
import { GrClose } from "react-icons/gr";

import { RiMenu3Fill } from "react-icons/ri";
import './NavHeader.css'
import { useState } from "react";


const NavHeader = () => {

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

    return (
        <div className="header">
            <div className="navigation">
                <div className="">
                    <div className="flex justify-between py-8 margin">
                        <div>
                            <ul className="flex fixed">
                                {routes.map(route => <Link key={route.id} route={route}></Link>)}
                            </ul>
                        </div>
                        <div className="flex justify-end" onClick={navOpen}>
                            <button className=" m-0 text-2xl fixed nav-bg p-3 rounded-lg "><RiMenu3Fill /></button>
                        </div>

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
                </div>

                <div className=" my-10 margin welcome">
                    <p><span className="text-9xl font-thin">Hello!</span><br />
                        <div className="py-6">
                            <span className="text-8xl font-normal">I'm </span> <span className="text-8xl font-medium">Arafat Sikder</span>
                        </div>
                    </p>
                    <p className='text-2xl'>
                        Frontend Web Developer
                    </p>
                </div>

                {/* for testing my website */}
                 
            </div>
        </div>
    );
};

export default NavHeader;