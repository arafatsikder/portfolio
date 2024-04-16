import './Card.css'
const Card = () => {
    return (
        <div className='card'>
            <div className='all-cards'>
                <div className='div-1'>
                    <div className='div1-style pl-6 px-6'>
                        <h1 className='text-4xl font-semibold pt-2'>02.</h1>
                        <p className='text-2xl h-color font-semibold py-2'>UX/UI DESIGN</p>
                        <p className='text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus laoreet dolor metus, eu ullamcorper turpis ornare tincidunt. Vivamus tristique rhoncus enim. Curabitur varius est quis din pat.</p>
                    </div>
                </div>
                <div className='div-2'>
                    <h1 className='text-4xl'>01.</h1>
                    <p className='text-3xl'>UX/UI DESIGN</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus laoreet dolor metus, eu ullamcorper turpis ornare tincidunt. Vivamus tristique rhoncus enim. Curabitur varius est quis din pat.</p>
                </div>
                <div className='div-3'>
                    <h1 className='text-4xl'>03.</h1>
                    <p className='text-3xl'>UX/UI DESIGN</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus laoreet dolor metus, eu ullamcorper turpis ornare tincidunt. Vivamus tristique rhoncus enim. Curabitur varius est quis din pat.</p>
                </div>
            </div>
        </div>
    );
};

export default Card;