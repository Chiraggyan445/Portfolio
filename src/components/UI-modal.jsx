import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import '../components/UI-modal.css';


export function UIModal(){

    let navigate = useNavigate();

    function UIClick(){
        navigate('/portfolio-education');
    }

    return(
        <div className='more-education'>
            <div className="education-more3">
                <div className='heading3'>
                    <h1>UI Web Devleopment</h1> 
                </div>
            <div className='content3'>
                <p>
                    <ul>
                        <li className='first-li'>UI Development Course is a Frontend Course</li>
                        <li className='second-li'>I have completed this course from Naresh IT, Hyderabad</li>
                        <li className='third-li'>This course includes various Technologies such as HTML, CSS, JavaScript</li>
                        <li className='fourth-li'>It also include technologies like JQuery & Bootstrap</li>
                        <li className='fifth-li'>I have completed this course in the year 2022</li>
                        <li className="sixth-li">Duration : 6 months</li>
                    </ul>
                </p>
            </div>
            <div className="footer3">
                <Button onClick={UIClick}>Cancel</Button>
            </div>
        </div>
        </div>
    )   
}