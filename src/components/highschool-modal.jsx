import { useNavigate } from 'react-router-dom';
import '../components/highschool-modal.css';
import { Button } from 'react-bootstrap';


export function HighSchoolModal(){

    let navigate = useNavigate();

    function HighSchoolClick(){
        navigate('/portfolio-education');
    }

    return(
        <div className='more-education'>
            <div className="education-more2">
                <div className='heading2'>
                    <h1>High-School</h1> 
                </div>
            <div className='content2'>
                <p>
                    <ul>
                        <li className='first-li'>I have completed My High School in Commerce </li>
                        <li className='second-li'>I have completed My High School from Sardar Dastur Horamzadiar Junior College Camp, Pune</li>
                        <li className='third-li'> I have cleared My High School with a grade of 81%</li>
                        <li className='fourth-li'>I had Maths & IT as Main Subjects during this course</li>
                        <li className='fifth-li'>Duration : 2 Years (2019 - 2021)</li>
                    </ul>
                </p>
            </div>
            <div className="footer2">
                <Button onClick={HighSchoolClick}>Cancel</Button>
            </div>
        </div>
        </div>
    )
}