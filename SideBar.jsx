import React from "react";
import "./Sidebar.css";

const Sidebar = ({ onSelectPage }) => {
  // Define the list of valid pages for navigation
  const validPages = ["technicalSkills", "onlinecourse","internships","events","projects","psskills","communication"];

  const handleNavigation = (page) => {
    if (validPages.includes(page)) {
      onSelectPage(page);
    } 
  };

  return (
    <aside className="dashboard-sidebar">
      <ul>
      <li>
          <button className="dashboard-button" onClick={() => handleNavigation("overview")}>
            Home
          </button>
        </li>
        <li>
          <button className="dashboard-button" onClick={() => handleNavigation("technicalSkills")}>
            Technical Skills
          </button>
        </li>
        <li>
          <button className="dashboard-button" onClick={() => handleNavigation("onlinecourse")}>
            Online Courses
          </button>
        </li>
        <li>
          <button className="dashboard-button" onClick={() => handleNavigation("internships")}>
            Internships
          </button>
        </li>
        <li>
          <button className="dashboard-button" onClick={() => handleNavigation("events")}>
            Events
          </button>
        </li>
        <li>
          <button className="dashboard-button" onClick={() => handleNavigation("projects")}>
            Project Submissions
          </button>
        </li>
        <li>
          <button className="dashboard-button" onClick={() => handleNavigation("psskills")}>
            Personalized Skill
          </button>
        </li>
        <li>
          <button className="dashboard-button" onClick={() => handleNavigation("communication")}>
            Communication Skills
          </button>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
