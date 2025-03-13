import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./StudentDashboard.css";
import TechnicalSkills from "./TechnicalSkills";
import OnlineCourses from "./OnlineCourse";
import InternshipForm from "./InternshipForm";
import Events from "./Events";
import Projects from "./ProjectsDone";
import PsSkill from "./PsSkill";
import CommunicationPage from "./CommunicationPage";

const StudentDashboard = () => {
  const navigate = useNavigate();

  // State for popups
  const [isTechSkillsPopupVisible, setTechSkillsPopupVisible] = useState(false);
  const [isOnlineCoursesPopupVisible, setOnlineCoursesPopupVisible] = useState(false);
  const [isInternshipsPopupVisible, setInternshipsPopupVisible] = useState(false);
  const [isEventsPopupVisible, setEventsPopupVisible] = useState(false);
  const [isProjectsPopupVisible, setProjectsPopupVisible] = useState(false);
  const [isPsSkillPopupVisible, setPsSkillPopupVisible] = useState(false);
  const [isCommunicationPagePopupVisible, setCommunicationPopupVisible] = useState(false);

  // State for active tab and submission details popup
  const [activeTab, setActiveTab] = useState("All");
  const [selectedSubmission, setSelectedSubmission] = useState(null);

  const user = { name: "Harsh" };

  const submissions = [
    {
      id: 1,
      title: "Machine Learning (Online Course)",
      status: "Verified",
      courseName: "Introduction to Machine Learning.",
      facultyComment: "Great work, keep it up!",
    },
    {
      id: 2,
      title: "Python Automation Script(Project Done)",
      status: "To Be Verified",
      facultyComment: "Good effort, but some improvements needed.",
      studentRating: 3,
      facultyRating: null,
    },
    {
      id: 3,
      title: "AI Model Development(Project Done)",
      status: "Rejected",
      facultyComment: "Needs significant improvements.",
      studentRating: 2,
      facultyRating: null,
    },
    {
      id: 4,
      title: "React Portfolio Project(Project Done)",
      status: "Rating Changed",
      facultyComment: "Excellent presentation and code quality.",
      studentRating: 3,
      facultyRating: 5,
    },
  ];

  const filterSubmissions = (status) => {
    if (status === "All") return submissions;
    return submissions.filter((submission) => submission.status === status);
  };

  const renderStatus = (status) => {
    switch (status) {
      case "Verified":
        return <span className="status verified">Verified</span>;
      case "To Be Verified":
        return <span className="status to-be-verified">To Be Verified</span>;
      case "Rejected":
        return <span className="status rejected">Rejected</span>;
      case "Rating Changed":
        return <span className="status rating-changed">Rating Changed</span>;
      default:
        return <span className="status unknown">Unknown</span>;
    }
  };

  return (
    <div className="dashboard-container">
      <aside className="dashboard-sidebar">
        <div className="greeting">Hello, {user.name}!</div>
        <ul>
          <li>
            <button className="dashboard-button" onClick={() => navigate("/overview")}>
              Home
            </button>
          </li>
          <li>
            <button
              className="dashboard-button"
              onClick={() => setTechSkillsPopupVisible(true)}
            >
              Tech Skills
            </button>
          </li>
          <li>
            <button
              className="dashboard-button"
              onClick={() => setOnlineCoursesPopupVisible(true)}
            >
              Online Courses Attended
            </button>
          </li>
          <li>
            <button
              className="dashboard-button"
              onClick={() => setInternshipsPopupVisible(true)}
            >
              Internships Attended
            </button>
          </li>
          <li>
            <button
              className="dashboard-button"
              onClick={() => setEventsPopupVisible(true)}
            >
              Events Attended
            </button>
          </li>
          <li>
            <button
              className="dashboard-button"
              onClick={() => setProjectsPopupVisible(true)}
            >
              Projects Done
            </button>
          </li>
          <li>
            <button
              className="dashboard-button"
              onClick={() => setPsSkillPopupVisible(true)}
            >
              Personalized Skill Assessment Status
            </button>
          </li>
          <li>
            <button className="dashboard-button" 
            onClick={() => setCommunicationPopupVisible(true)}>
              Communication Skill
            </button>
          </li>
          <li>
            <button className="dashboard-button" onClick={() => navigate("/")}>
              Log Out
            </button>
          </li>
        </ul>
      </aside>

      <main className="dashboard-content">
        <h2>Recent Submissions</h2>

        <div className="submission-tabs">
          {["All", "Verified", "To Be Verified", "Rejected", "Rating Changed"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={activeTab === tab ? "tab active-tab" : "tab"}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="submissions-list">
          {filterSubmissions(activeTab).map((submission) => (
            <div
              key={submission.id}
              className="submission-item"
              onClick={() => setSelectedSubmission(submission)}
            >
              <div className="submission-title">{submission.title}</div>
              <div className="submission-status">{renderStatus(submission.status)}</div>
            </div>
          ))}
        </div>
      </main>

      

      {/* Other popups */}
      {isTechSkillsPopupVisible && (
        <div className="popup-overlay">
          <div className="popup-container">
            <button
              className="close-button"
              onClick={() => setTechSkillsPopupVisible(false)}
            >
              ✖
            </button>
            <TechnicalSkills />
          </div>
        </div>
      )}
      {isOnlineCoursesPopupVisible && (
        <div className="popup-overlay">
          <div className="popup-container">
            <button
              className="close-button"
              onClick={() => setOnlineCoursesPopupVisible(false)}
            >
              ✖
            </button>
            <OnlineCourses />
          </div>
        </div>
      )}
      {isInternshipsPopupVisible && (
        <div className="popup-overlay">
          <div className="popup-container">
            <button
              className="close-button"
              onClick={() => setInternshipsPopupVisible(false)}
            >
              ✖
            </button>
            <InternshipForm />
          </div>
        </div>
      )}
      {isEventsPopupVisible && (
        <div className="popup-overlay">
          <div className="popup-container">
            <button
              className="close-button"
              onClick={() => setEventsPopupVisible(false)}
            >
              ✖
            </button>
            <Events />
          </div>
        </div>
      )}
      {isProjectsPopupVisible && (
        <div className="popup-overlay">
          <div className="popup-container">
            <button
              className="close-button"
              onClick={() => setProjectsPopupVisible(false)}
            >
              ✖
            </button>
            <Projects />
          </div>
        </div>
      )}
      {isPsSkillPopupVisible && (
        <div className="popup-overlay">
          <div className="popup-container">
            <button
              className="close-button"
              onClick={() => setPsSkillPopupVisible(false)}
            >
              ✖
            </button>
            <PsSkill />
          </div>
        </div>
      )}

{isCommunicationPagePopupVisible && (
        <div className="popup-overlay">
          <div className="popup-container">
            <button
              className="close-button"
              onClick={() => setCommunicationPopupVisible(false)}
            >
              ✖
            </button>
            <CommunicationPage />
          </div>
        </div>
      )}
    </div>
  );
};

export default StudentDashboard;
