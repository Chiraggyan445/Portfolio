import { useState } from 'react';
import '../components/portfolio-education.css';
import { Button, ModalBody, ModalFooter } from 'react-bootstrap';
import { Modal, ModalHeader, ModalTitle } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


export function PortfolioEducation(){

    let navigate = useNavigate();
    
    const HandleClick = () =>{
        navigate('/education-modal');
    }

    const HighClick = () => {
        navigate('/highschool-modal');
    }

    const UIClick = () => {
        navigate('/Ui-modal');
    }

    const ReactClick = () => {
        navigate('/React-modal');
    }

    const Rightbutton = () => {
        navigate('/portfolio-skills');
    }

    const LeftButton = () => {
        navigate('/portfolio-about');
    }

    return(
        <div className='education2'>
            <h1 className='education2-heading'>Education</h1>
            <div>
                <Button onClick={Rightbutton} className='right-button2'><span className='bi bi-arrow-right'></span></Button>
                <Button onClick={LeftButton} className='left-button2'><span className='bi bi-arrow-left'></span></Button>
            </div>
            <span className='education2-bar'></span>
            <span className='education2-bar2'></span>
            <div>
            <div className='undergraduation'><p className='bi bi-mortarboard-fill'></p></div>
            <div className='bca-bar'></div>
            <div className='bca-bar2'></div>
            <div className='bca-bar3'></div>
            <div className='bca-bar4'></div>
            <div className='card'>
                <h2>Graduation</h2>  
                <p className='graduation-bar'></p>
                <p className='graduation-description'>
                    <ul>
                        <li className='first'>I have Completed My Graduation in B.C.A(Bachelors in Computer Applications)</li>
                        <li className='second'>My Graduation score in CGPA was 8.7/10</li>
                        <li className='third'>My Graduation course included laguages like JAVA, Python, Javascript, C & C++</li>
                    </ul>
                    <Button onClick={HandleClick}>Read more <span className='arrow bi bi-arrow-right'></span></Button>
                </p>
            </div>
            <div className='card-2'>
                <h2>High-School</h2>  
                <p className='graduation-bar2'></p>
                <p className='graduation-description2'>
                    <ul>
                        <li className='first-1'>I have Completed My High School in Commerce</li>
                        <li className='second-2'>I have Completed My High School from Sardar Dastur Junior College</li>
                        <li className='third-3'>.....</li>
                    </ul>
                    <Button onClick={HighClick}>Read more <span className='arrow bi bi-arrow-right'></span></Button>
                </p>
            </div>
            <div className='card-3'>
                <h2>UI Development</h2>  
                <p className='graduation-bar3'></p>
                <p className='graduation-description3'>
                    <ul>
                        <li className='first-1'>UI Web Development is a Frontend Course</li>
                        <li className='second-2'>I have Completed this course From Naresh IT, Hyderabad</li>
                        <li className='third-3'>It included various technologies</li>
                    </ul>
                    <Button onClick={UIClick}>Read more <span className='arrow bi bi-arrow-right'></span></Button>
                </p>
            </div>
            <div className='card-4'>
                <h2>React JS</h2>  
                <p className='graduation-bar4'></p>
                <p className='graduation-description4'>
                    <ul>
                        <li className='first-1'>React JS is basically a JavaScript Library</li>
                        <li className='second-2'>I have Completed this course From Naresh IT, Hyderabad</li>
                        <li className='third-3'>It includes various DOM methods</li>
                    </ul>
                    <Button onClick={ReactClick}>Read more <span className='arrow bi bi-arrow-right'></span></Button>
                </p>
            </div>
            </div>
            <div className='undergraduation-bar'></div>
            <div className='undergraduation2'><p className='bi bi-building'></p></div>
            <div className='undergraduation3'><p className='bi bi-code'></p></div>
            <div className='undergraduation4'><p className='bi bi-filetype-jsx'></p></div>
        </div>    
    )
}