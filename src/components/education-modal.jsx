import { useNavigate } from 'react-router-dom';
import '../components/education-modal.css';
import { Button } from 'react-bootstrap';


export function EducationModal(){

    let navigate = useNavigate();

    function EducationHandleClick(){
        navigate('/portfolio-education');
    }

    return(
        <div className='more-education'>
            <div className="education-more">
                <div className='heading'>
                    <h1>Graduation <span className='bi bi-mortarboard=fill'></span></h1> 
                </div>
            <div className='content'>
                <p>
                    <ul>
                        <li className='first-li'>I have completed My Graduation in B.C.A (Bachelors in Computer Applications)</li>
                        <li className='second-li'>I have completed My Bachelors Degree from Vishwakarma University</li>
                        <li className='third-li'>My Graduation Score was 8.7 / 10 CGPA taht aggregates to 85%</li>
                        <li className='fourth-li'>My Course included languages like JAVA, C++, Python, Node.js, JavaScript, C</li>
                        <li className='fifth-li'>While Pursuing My BCA Course I have worked on various projects that included responsive designs and database connectivity</li>
                        <li className='sixth-li'>Duration : 3 Years (2021 - 2024)</li>
                    </ul>
                </p>
            </div>
            <div className="footer">
                <Button onClick={EducationHandleClick}>Cancel</Button>
            </div>
        </div>
        </div>
    )
}