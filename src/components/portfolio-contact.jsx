import { useNavigate } from 'react-router-dom';
import '../components/portfolio-contact.css';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


export function PortfolioContact(){

    let navigate = useNavigate();

    const ButtonNavigate = () => {
        navigate('/portfolio-projects');
    }

    const ButtonClick = () => {
        alert('Message sent Successfully!!');
    }


    return(
        <div className="portfolio-contact">
            <div className="contact-h">
                <h1>Contact</h1>
            </div>
            <div className='contact-bar'></div>
            <div className='contact-small'>
                <p className='contact-p'>Leave a mail or contact me at - <a href="">chiraggyanchandani03@gmail.com</a>/<a href=''>9325146732</a></p>
            </div>
            <div className='contact-name'>
                <input type="text" placeholder='Name' className='name text-white'/>
            </div>
            <div className='contact-email'>
                <input type="email" placeholder='Email' className='email text-white'/>
            </div>  
            <div className='contact-message'>
                <input type="text" placeholder='Message' className='message text-white'/>
            </div>
            <div className='contact-buttons'>
                <Button onClick={ButtonClick}>Send Message</Button>
            </div>
            <div className='go-home'>
                <Link to='/' className='go'>Go back home <span className='bi bi-arrow-right'></span></Link>
            </div>
            <div className='icons'>
                <Link to="https://www.linkedin.com/in/chirag-gyanchandani-571453253/" className='linkedin bi bi-linkedin'></Link>
                <Link to="https://accounts.google.com/v3/signin/identifier?ifkv=AdF4I75z7TbEPJkhU9qW8kr6to5dw2k4r4GTrXE6mdRywmrhWqofRKmlCZ4vnJTmJTF71fnE0suRVQ&ddm=0&flowName=GlifWebSignIn&flowEntry=ServiceLogin&continue=https%3A%2F%2Faccounts.google.com%2FManageAccount%3Fnc%3D1" className='mail bi bi-envelope ms-3 text-white'></Link>
            </div>
            <div className='contact-button'>
                <Button onClick={ButtonNavigate} className='button-left bi bi-arrow-left'></Button>
            </div>
        </div>
    )
}