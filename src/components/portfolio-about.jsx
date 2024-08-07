import { Button } from "react-bootstrap";
import '../components/portfolio-home.css';
import { useNavigate } from "react-router-dom";

export function PortfolioAbout(){

    let navigate = useNavigate();

    const LeftButton = () => {
        navigate('/');
    }

    const RightButton = () => {
        navigate('/portfolio-education');
    }

    return(
        <div className='about2 text-white'>
                    <h1 className='about2-heading'>More About me</h1>
                        <Button onClick={RightButton} className="right-button"><span className="bi bi-arrow-right"></span></Button>
                        <Button onClick={LeftButton} className="left-button"><span className="bi bi-arrow-left"></span></Button>
                    <span className='about2-bar'></span>
                    <img src="about-img.jpg" className='about2-img'/>
                    <Button href='ChiragCV.pdf' className='contact-me'>Resume</Button>
                    <p className='about2-description'>I am a <strong>frontend developer</strong> who loves building user-friendly websites and web applications. With a strong foundation in HTML, CSS, and JavaScript, I specialize in creating responsive and visually appealing interfaces. I have experience working with frameworks like React.js, focusing on crafting efficient and scalable code. Collaborating closely with designers and backend developers, I strive to deliver intuitive digital experiences that meet both user needs and business goals. Passionate about continuous learning, I keep up with industry trends and best practices to ensure my work is always at the forefront of frontend development. I have gained good knowledge in JQuery, Bootstrap, API's and MERN Stack</p>
                </div>
    )
}