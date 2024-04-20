// import Link from "../Link/Link";
// import { FaFacebook, FaTwitter, FaLinkedinIn, FaDiscord, FaGithub } from "react-icons/fa";
// import { GrClose } from "react-icons/gr";

// import { RiMenu3Fill } from "react-icons/ri";
import Nav from '../Nav/Nav';
import './NavHeader.css'


const NavHeader = () => {


    return (
        <div className="header h-screen">
            
                <Nav></Nav>
                

                <div className="flex flex-col justify-center  h-screen name-margin welcome">
                    <p><span className="sm:text-7xl md:text-8xl lg:text-9xl xl:text-9xl font-thin hello-size">Hello!</span><br />
                        <div className="jaega md:py-3 sm:py-2 ">
                            <span className="xl:text-8xl lg:text-8xl md:text-7xl sm:text-7xl font-normal hello-size">I'm </span> <span className="name-size xl:text-8xl lg:text-7xl md:text-6xl sm:text-5xl font-medium ">Arafat Sikder</span>
                        </div>
                    </p>
                    <p className='md:text-2xl sm:text-xl dev-space'>
                        Frontend Web Developer
                    </p>
                </div>

                {/* for testing my website */}

            {/* </div> */}
        </div>
    );
};

export default NavHeader;