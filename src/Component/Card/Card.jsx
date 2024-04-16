import './Card.css'
const Card = () => {
    return (
        <div className='card'>
            <div className='all-cards'>
                <div className='div-1'>
                    <div className='div1-style pl-6 px-6'>
                        <h1 className='text-4xl font-bold pt-2'>02.</h1>
                        <p className='text-2xl h-color font-semibold py-2'>User-Friendly Interface</p>
                        <p className='text-white'> A user-friendly interface makes it easy for visitors to navigate your website, find information quickly, and complete tasks efficiently. It enhances usability, reduces bounce rates, and increases conversions.</p>
                    </div>
                </div>
                <div className='div-2'>
                    <div className='div2-style pl-6 px-6'>
                        <h1 className='text-4xl font-bold pt-2 color2'>01.</h1>
                        <p className='text-2xl h-color font-semibold py-2 text-black'>Responsive Design</p>
                        <p className='text-white'>Responsive design ensures that your website adapts and displays properly on various devices, including desktops, laptops, tablets, and smartphones.It allows you to reach a wider audience and provides a consistent user experience.</p>
                    </div>
                </div>
                <div className='div-3'>
                    <div className='div3-style pl-6 px-6'>
                        <h1 className='text-4xl font-bold pt-2'>03.</h1>
                        <p className='text-2xl h-color font-semibold py-2'>Fast Loading Speed</p>
                        <p className='text-white'>Fast loading speed is crucial for retaining visitors and improving search engine rankings. It enhances user experience by minimizing wait times and ensuring that content is delivered quickly.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;