import '../components/portfolio-home.css';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Button, Carousel } from 'react-bootstrap';

export function PortfolioHome(){

    let navigate = useNavigate();

    const OnButtonClick = () => {
        navigate('/portfolio-about');
    }


    const descriptions = [
        'FrontEnd Developer',
        'Web Developer'
    ];

    const [currentDescriptionIndex, setCurrentDescriptionIndex] = useState(0);
    const [currentDescription, setCurrentDescription] = useState(descriptions[0]);

    useEffect(()=>{
        const interval = setInterval(()=>{
            setCurrentDescriptionIndex((prevIndex) => (prevIndex + 1) % descriptions.length);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        setCurrentDescription(descriptions[currentDescriptionIndex]);
      }, [currentDescriptionIndex]);

    return(
    <div className='portfolio'>
        <div className="container-fluid bg-dark">
            <header className='text-white'>
                <h2>Chirag</h2>
                <div className='links'>
                    <Link to="#" className='home active'>Home</Link>
                    <Link to="/portfolio-about" className='about'>About</Link>
                    <Link to="/portfolio-education" className='education'>Education</Link>
                    <Link to="/portfolio-skills" className='skills'>Skills</Link>
                    <Link to="/portfolio-projects" className='projects'>Projects</Link>
                    <Link to="/portfolio-contact" className='contact'>Contact</Link>
                </div>
                
            </header>
        </div>   
        <div className='description'>
            <section>
                <h4>Welcome to my Portfolio</h4>
                <span className='welcome-bar'></span>
                <h1>Hi I'm Chirag Gyanchandani, <span>{currentDescription}</span></h1>
                <Button onClick={OnButtonClick} className='more'>More About me</Button>
                <div className='chirag-image'>
                    <img src="chirag3.jpg"/>
                </div>
            </section>
        </div>
    </div>
    )
}