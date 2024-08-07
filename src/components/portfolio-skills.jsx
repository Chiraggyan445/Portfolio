import { Button } from "react-bootstrap"
import '../components/portfolio-skills.css';
import { useNavigate } from "react-router-dom";


export function PortfolioSkills(){

    let navigate = useNavigate();

    const LeftClick = () => {
        navigate('/portfolio-education');
    }

    const RightClick = () => {
        navigate('/portfolio-projects');
    }

    return(
        <div className="portfolio-skills">
            <div className="skills">
                <h2>Skills</h2>
                <p className="skills-bar"></p>
            </div>
            <div className="skills-content1">
                <p className="content1"></p>
                <p className="number1">100%</p>
                <h3>HTML</h3>
            </div>
            <div className="skills-content2">
                <p className="content2"></p>
                <p className="number2">100%</p>
                <h3>CSS</h3>
            </div>
            <div className="skills-content3">
                <p className="content3"></p>
                <p className="number3">95%</p>
                <h3>JavaScript</h3>
            </div>
            <div className="skills-content4">
                <p className="content4"></p>
                <p className="number4">95%</p>
                <h3>ReactJS</h3>
            </div>
            <div className="skills-content5">
                <p className="content5"></p>
                <p className="number5">70%</p>
                <h3>JQuery</h3>
            </div>
            <div className="skills-content6">
                <p className="content6"></p>
                <p className="number6">90%</p>
                <h3>BootStrap</h3>
            </div>
            <div className="skills-content7">
                <p className="content7"></p>
                <p className="number7">80%</p>
                <h3>API's</h3>
            </div>
            <div className="skills-content8">
                <p className="content8"></p>
                <p className="number8">85%</p>
                <h3>MERN</h3>
            </div>
            <div className="buttons">
                <Button onClick={LeftClick} className="left-button bi bi-arrow-left"></Button>
                <Button onClick={RightClick} className="right-button bi bi-arrow-right"></Button>
            </div>
        </div>
    )
}
