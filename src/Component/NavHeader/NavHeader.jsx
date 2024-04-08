import Link from "../Link/Link";
import { FaFacebook, FaTwitter, FaLinkedinIn, FaDiscord, FaGithub } from "react-icons/fa";
import { RiMenu3Fill } from "react-icons/ri";
import './NavHeader.css'


const NavHeader = () => {

    const routes = [
        { id: 1, path: '/', name: <FaFacebook /> },
        { id: 2, path: '/about', name: <FaTwitter /> },
        { id: 3, path: '/services', name: <FaLinkedinIn /> },
        { id: 4, path: '/contact', name: <FaDiscord /> },
        { id: 5, path: '/github', name: <FaGithub /> },
    ];

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
                            <div className="flex justify-end ">
                                <button className=" m-0 text-2xl fixed nav-bg p-3 rounded-lg "><RiMenu3Fill /></button>
                            </div>
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
            </div>
        </div>
    );
};

export default NavHeader;