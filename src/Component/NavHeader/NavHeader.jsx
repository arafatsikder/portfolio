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
                    <p><span className="text-9xl font-thin">Hello!</span><br />
                        <div className="py-3">
                            <span className="text-8xl font-normal">I'm </span> <span className="text-8xl font-medium">Arafat Sikder</span>
                        </div>
                    </p>
                    <p className='text-2xl'>
                        Frontend Web Developer
                    </p>
                </div>

                {/* for testing my website */}

            {/* </div> */}
        </div>
    );
};

export default NavHeader;