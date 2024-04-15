import './About.css'
const About = () => {

    return (
        <div className='background'>
            <div className='about'>
                <div className='left'>
                    <div className="group-container">
                        <div className="container">
                            <div className="div1"></div>
                            <div className="div2"><img src="./../../../src/image/image3.jpg" alt="" /></div>
                        </div>
                    </div>
                </div>
                <div className='right'>
                    <div>
                        <h1 className='text-5xl font-bold gradient-text'>ABOUT ME</h1>
                        <p className='py-6'>Hello! I’m Arafat Sikder. A frond-end web developer. Having an in-depth knowledge including advanced HTML5, CSS3, JavaScript, Bootstrap, Tailwind. Having basic expertise in Problem Solving.</p>
                        <p className='text-xl py-2'><span className='span-color font-medium font-bold'>NAME:</span> Arafat Sikder </p>
                        <p className='text-xl py-2'><span className='span-color font-medium font-bold'>DATE OF BIRTH:</span> 5 december 1998</p>
                        <p className='text-xl py-2'><span className='span-color font-medium font-bold'>NATIONALITY:</span> Citizen Of Bangladesh</p>
                        <p className='text-xl py-2'><span className='span-color font-medium font-bold'>ADDRESS:</span> 23 High Hope Blvd., Some City, Some Country</p>
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