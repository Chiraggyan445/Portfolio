import { useNavigate } from 'react-router-dom';
import '../components/React-modal.css';
import { Button } from 'react-bootstrap';


export function ReactModal(){

    let navigate = useNavigate();

    function ReactClick(){
        navigate('/portfolio-education');
    }

    return(
        <div className='more-education'>
            <div className="education-more4">
                <div className='heading4'>
                    <h1>React JS</h1> 
                </div>
            <div className='content4'>
                <p>
                    <ul>
                        <li className='first-li'>React JS is basically a JavaScript Library</li>
                        <li className='second-li'>I have completed this course from Naresht IT, Hyderabad</li>
                        <li className='third-li'>This course includes various DOM methods</li>
                        <li className='fourth-li'>I have done many projects using ReactJS like To-do list, Video Library Project, My own Portfolio</li>
                        <li className='fifth-li'>Duration : 2 months (2022)</li>
                    </ul>
                </p>
            </div>
            <div className="footer2">
                <Button onClick={ReactClick}>Cancel</Button>
            </div>
        </div>
        </div>
    )
}