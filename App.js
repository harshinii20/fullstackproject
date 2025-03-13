import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './LoginPage';
import SignInPage from './SigninPage';
import StudentDashboard from './StudentDashboard';
import TeacherDashboard from './TeacherDashboard';
import TechnicalSkills from './TechnicalSkills';
import OnlineCourse from './OnlineCourse';
import InternshipForm from './InternshipForm';
import Events from './Events';
import ProjectsDone from './ProjectsDone';
import PsSkill from './PsSkill';
import CommunicationPage from './CommunicationPage';
import AdminFacultyCheck from './AdminFacultyCheck';
import Sidebar from './SideBar';
import InternshipsPage from './InternshipsPage';
import EventsPage from './EventsPage';
import ProjectsPage from './ProjectsPage';
import PsskillPage from './PsskillPage';
import CommunicationSkillPage from './CommunicationSkillPage';
import Admin from './Admin';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/studentdashboard" element={<StudentDashboard />} />
        <Route path="/teacher-dashboard" element={<TeacherDashboard />} />
        <Route path="/technical-skills" element={<TechnicalSkills />} />
        <Route path="/online-course" element={<OnlineCourse />} />
        <Route path="/internships" element={<InternshipForm />} />
        <Route path="/events" element={<Events />} />
        <Route path="/projects" element={<ProjectsDone />} />
        <Route path="/psskill" element={<PsSkill />} />
        <Route path="/communication" element={<CommunicationPage />}/>
        <Route path="/teacherdashboard" element={<TeacherDashboard />} />
        <Route path="/admin-faculty-check" element={<AdminFacultyCheck />}/>
        <Route path="/sidebar" element={<Sidebar />}/>
        <Route path='/internships' element={<InternshipsPage />}/>
        <Route path='/events' element={<EventsPage />}/>
        <Route path='/projects' element={<ProjectsPage/>}/>
        <Route path='/psskill' element={<PsskillPage/>}/>   
        <Route path='/communication' element={<CommunicationSkillPage/>} />    
        <Route path='/admin' element={<Admin/>}/>
      </Routes>
    </Router>
  );
}

export default App;
