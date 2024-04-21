import './Hire.css'
import { BiLogoTelegram } from "react-icons/bi";
const Hire = () => {
    return (
        <div className='hire'>
            <div className='spacea'>
                <div className=' text-center hire-text'>

                    <div className='group'>
                        <span className='text-7xl check'><BiLogoTelegram /></span>

                        <div className='hire-space'>
                            <p className=' pt-2 hire-size font-bold check'>HIRE ME FOR YOUR AWESOME PROJECT</p>
                            <div className='check'>
                                <p className='text-center py-1'>I am available for Freelance projects that depends  on your project value.Hire me and get your project done!</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <button className='hire-btn  font-semibold text-xl'><a href="https://www.linkedin.com/in/arafat-sikder-45247020a/">HIRE ME</a></button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Hire;