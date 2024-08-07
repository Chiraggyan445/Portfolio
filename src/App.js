import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PortfolioHome } from './components/portfolio-home';
import { PortfolioAbout } from './components/portfolio-about';
import { PortfolioEducation } from './components/portfolio-education';
import { EducationModal } from './components/education-modal';
import { HighSchoolModal } from './components/highschool-modal';
import { UIModal } from './components/UI-modal';
import { ReactModal } from './components/React-modal';
import { PortfolioSkills } from './components/portfolio-skills';
import { PortfolioProjects } from './components/portfolio-projects';
import { PortfolioContact } from './components/portfolio-contact';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<PortfolioHome />}/>
            <Route path='/portfolio-about' element={<PortfolioAbout />} />
            <Route path='/portfolio-education' element={<PortfolioEducation />}/>
            <Route path='/education-modal' element={<EducationModal/>}/>
            <Route path='/highschool-modal' element={<HighSchoolModal/>}/>
            <Route path='/Ui-modal' element={<UIModal/>}/>
            <Route path='React-modal' element={<ReactModal/>}/>
            <Route path='/portfolio-skills' element={<PortfolioSkills/>}/>
            <Route path='/portfolio-projects' element={<PortfolioProjects/>} />
            <Route path='/portfolio-contact' element={<PortfolioContact/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
