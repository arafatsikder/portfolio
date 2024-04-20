import './About.css'
// import { FaFileDownload } from "react-icons/fa"
const About = () => {

    return (
        <div className='background'>
            <div className='about'>
                <div className='left'>
                    <div className="group-container">
                        <div className="container">
                            <div className="div1"></div>
                            <div className="div2"><img src="https://i.ibb.co/MMLhvw2/arafat2.png" height="350px" width="350px" alt="" /></div>
                        </div>

                    </div>
                    {/* <span><FaFileDownload /></span> */}

                    <a href="https://pink-vina-20.tiiny.site/">
                        <button className='cv-btn'>
                            Download Resume
                            
                        </button>
                    </a>
                </div>



                <div className='right'>
                    <div>
                        <h1 className='about-text text-5xl font-bold gradient-text'>ABOUT ME</h1>
                        <p className='py-6'>Hello! I’m Arafat Sikder. A front-end web developer. Having an in-depth knowledge including advanced HTML5, CSS3, JavaScript, Bootstrap, Tailwind. Having basic expertise in Problem Solving.As a front-end web developer and competitive programmer, I aim to design a stable, user-friendly, and beautiful website.My expertise    will benefit your company’s front-end development.</p>
                        <p className='text-xl py-2'><span className='span-color font-medium font-bold'>NAME:</span> Arafat Sikder </p>
                        <p className='text-xl py-2'><span className='span-color font-medium font-bold'>DATE OF BIRTH:</span> 5 december 1998</p>
                        <p className='text-xl py-2'><span className='span-color font-medium font-bold'>NATIONALITY:</span> Citizen Of Bangladesh</p>
                        <p className='text-xl py-2'><span className='span-color font-medium font-bold'>ADDRESS:</span> Dhaka, Bangladesh</p>
                        <p className='text-xl py-2'><span className='span-color font-medium font-bold'>PHONE:</span> +880186-7828205</p>
                        <p className='text-xl py-2'><span className='span-color font-medium font-bold'>E-MAIL:</span> arafatsikder929@gmail.com</p>
                    </div>
                </div>
                {/* src="./../../../src/image/image.jpg" */}
            </div>
        </div>
    );

};

export default About;