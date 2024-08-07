import { useNavigate } from 'react-router-dom';
import '../components/portfolio-projects.css';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';


export function PortfolioProjects(){

    let navigate = useNavigate();

    const LeftClick = () => {
        navigate('/portfolio-skills');
    }

    const RightClick = () => {
        navigate('/portfolio-contact');
    }

    
    return(
        <div className='portfolio-projects'>
            <div className='project-heading'>
                <p>Projects</p>
                <p className='project-bar'></p>
            </div>
            <div className="project1">
                <img src="to-do.png" />
                <div className='to-do-description'>
                    <h2 className='heading'>To Do</h2>
                    <p>A to-do list is a tool that helps you keep track of tasks you need to do. It's like a checklist where you write down everything you need to accomplish, whether it's for work, school, or daily life. By using a to-do list, you can organize your responsibilities, set priorities, and stay focused on completing what needs to be done. It's a helpful way to manage your time effectively and make sure nothing important gets forgotten</p>
                </div>
            </div>
            <div className='project2'>
                <img src="janseva-bank.png"/>
                <div className="janseva-description">
                    <h2 className='heading2'>Janseva Bank</h2>
                    <p>Janseva Bank is a cooperative bank that operates in India. It focuses on providing financial services to its members and customers, including savings accounts, loans, and other banking facilities. Cooperative banks like Janseva Bank are often community-oriented, aiming to serve local residents and businesses by offering accessible banking services and supporting economic development in their regions. These banks are governed by cooperative principles, emphasizing member participation and mutual benefit.</p>
                </div>
            </div>
            <div className='project3'>
                <img src="video.png"/>
                <div className='video-description'>
                    <h2 className='heading3'>Video Library</h2>
                    <p>A video library project is like an organized collection of videos, where you can easily find and watch movies, TV shows, or educational content. It's designed to store and manage these videos so that users can browse, search, and select what they want to watch. The project might include features like categorizing videos by genre or topic, creating user profiles to track preferences, and providing recommendations based on viewing history.</p>
                </div>
            </div>
            <div className='project4'>
                <img src="meesho.png"/>
                <div className='meesho-description'>
                    <h2 className='heading4'>Meesho</h2>
                    <p>Meesho is an online platform where people can buy and sell products easily from their homes. It connects suppliers who have products with potential customers through social media platforms like WhatsApp and Facebook. It's popular because it allows individuals to start their own small businesses without needing a physical store.</p>
                </div>
            </div>
            <div className='project5'>
                <img src="tic-tac-toe.png"/>
                <div className='tic-description'>
                    <h2 className="heading5">TicTacToe</h2>
                    <p>Tic Tac Toe is a fun game played on a grid of nine squares, arranged in a 3x3 layout. Two players take turns marking either an "X" or an "O" in an empty square. The goal is to get three of your marks in a row, either horizontally, vertically, or diagonally. The player who achieves this first wins the game. If all nine squares are filled without a winner, the game ends in a draw. It's a simple yet engaging game that's often played for entertainment and to pass the time.</p>
                </div>
            </div>
            <div className='project-buttons'>
                <Button onClick={LeftClick} className='left-button bi bi-arrow-left'></Button>
                <Button onClick={RightClick} className='right-button bi bi-arrow-right'></Button>
            </div>
        </div>
    )
}