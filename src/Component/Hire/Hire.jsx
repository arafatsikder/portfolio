import './Hire.css'
import { BiLogoTelegram } from "react-icons/bi";
const Hire = () => {
    return (
        <div className='hire'>
            <div className='space'>
                <div className=' text-center flex justify-around'>
                    {/* <div> */}
                        <span className='text-7xl check'><BiLogoTelegram /></span>
                    {/* </div> */}
                    <div>
                        <p className='flex text-4xl font-bold check tracking-wide pt-2 text-center'>HIRE ME FOR YOUR AWESOME PROJECT</p>
                        <div className=' check'>
                        <p className='text-center py-2'>I am available for Freelance projects that depends  on your project value.<br /> Hire me and get your project done!</p>
                        </div>
                    </div>
                    <div>
                        <button className='hire-btn px-16 py-3 font-semibold text-xl'>HIRE ME</button>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Hire;