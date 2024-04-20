import './Skills.css'
const Skills = () => {
    return (
        <div className='background'>
            <h1 className='text-5xl font-bold text-center spaceb'><span className='head'>SKILLS</span></h1>
            <div className='skills'>
                
                <div className='skill-div'>
                    <div className="skill">
                        <div className="skill-align">
                            <div className='text-xl'>HTML5</div>
                            <div>90%</div>
                        </div>
                        <div className="skill-bar ">
                            <div className="skill-level html">.</div>
                        </div>
                    </div>
                    <div className="skill">
                        <div className="skill-align">
                            <div className='text-xl'>CSS</div>
                            <div>80%</div>
                        </div>
                        <div className="skill-bar">
                            <div className="skill-level css"> .</div>
                        </div>
                    </div>
                    <div className="skill">
                        <div className="skill-align">
                            <div className='text-xl'>JS</div>
                            <div>70%</div>
                        </div>
                        <div className="skill-bar">
                            <div className="skill-level javascript">.</div>
                        </div>
                    </div>
                    <div className="skill">
                        <div className="skill-align">
                            <div className='text-xl'>BOOTSTRAP</div>
                            <div>90%</div>
                        </div>
                        <div className="skill-bar ">
                            <div className="skill-level html">.</div>
                        </div>
                    </div>
                    <div className="skill">
                        <div className="skill-align">
                            <div className='text-xl'>TAILWIND</div>
                            <div>80%</div>
                        </div>
                        <div className="skill-bar">
                            <div className="skill-level css"> .</div>
                        </div>
                    </div>
                    <div className="skill">
                        <div className="skill-align">
                            <div className='text-xl'>REACT</div>
                            <div>70%</div>
                        </div>
                        <div className="skill-bar">
                            <div className="skill-level javascript">.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;