import React, { useState } from "react";
import { Bar, Pie } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from "chart.js";
import SideBar from "./SideBar";
import TechnicalSkillsPage from "./TechnicalSkillsPage";
import "./TeacherDashboard.css";
import OnlineCoursePage from "./OnlineCoursePage";
import InternshipsPage from "./InternshipsPage";
import EventsPage from "./EventsPage";
import ProjectsPage from "./ProjectsPage";
import PsskillPage from "./PsskillPage";
import CommunicationSkillPage from "./CommunicationSkillPage";

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Title, Tooltip, Legend);

const TeacherDashboard = () => {
  const [currentPage, setCurrentPage] = useState("overview");

  const totalStudents = 120;
  const submissionsPending = 15;

  // Skill-wise expertise data
  const techSkillData = {
    labels: ["React", "Node.js", "Python", "Java", "C++", "Data Structures"],
    datasets: [
      {
        label: "Number of Students",
        data: [25, 20, 50, 15, 10, 20],
        backgroundColor: ["#3498db", "#1abc9c", "#f1c40f", "#e67e22", "#e74c3c", "#9b59b6"],
        borderColor: "#2c3e50",
        borderWidth: 1,
      },
    ],
  };

  const techSkillOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  // PS-level completion data
  const psCompletionData = {
    labels: ["C", "Data Structures", "Python", "Java"],
    datasets: [
      {
        label: "Completion Percentage",
        data: [60, 50, 80, 70],
        backgroundColor: ["#3498db", "#e67e22", "#1abc9c", "#e74c3c"],
        borderColor: "#2c3e50",
        borderWidth: 1,
      },
    ],
  };

  const psCompletionOptions = {
    responsive: true,
    maintainAspectRatio: false,
  };

  // Domain-wise expertise data
  const domainExpertiseData = {
    labels: ["Web Development", "AI/ML", "Cloud Computing", "Cybersecurity", "Data Science"],
    datasets: [
      {
        label: "Number of Students",
        data: [40, 25, 30, 15, 20],
        backgroundColor: ["#1abc9c", "#3498db", "#f1c40f", "#e74c3c", "#9b59b6"],
        borderColor: "#2c3e50",
        borderWidth: 1,
      },
    ],
  };

  const domainExpertiseOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  const renderPage = () => {
    if (currentPage === "overview" || currentPage === "home") {
      return (
        <div className="overview-section">
          <h2>Overview</h2>

          {/* Statistics Cards */}
          <div className="overview-cards">
            <div className="card">
              <h3>Total Students Submissions</h3>
              <p>{totalStudents}</p>
            </div>
            <div className="card">
              <h3>Verifications Pending</h3>
              <p>{submissionsPending}</p>
            </div>
          </div>

          {/* Skill-Wise Expertise */}
          <div className="skill-section">
            <h3>Skill-Wise Expertise</h3>
            <div className="chart-container">
              <Bar data={techSkillData} options={techSkillOptions} />
            </div>
          </div>

          {/* PS-Level Completion */}
          <div className="ps-completion-section">
            <h3>PS-Level Completion</h3>
            <div className="chart-container">
              <Pie data={psCompletionData} options={psCompletionOptions} />
            </div>
          </div>

          {/* Domain-Wise Expertise */}
          <div className="domain-expertise-section">
            <h3>Domain-Wise Expertise</h3>
            <div className="chart-container">
              <Bar data={domainExpertiseData} options={domainExpertiseOptions} />
            </div>
          </div>
        </div>
      );
    } else if (currentPage === "technicalSkills") {
      return <TechnicalSkillsPage />;
    } else if (currentPage === "onlinecourse") {
      return <OnlineCoursePage />;
    } else if (currentPage === "internships") {
      return <InternshipsPage />;
    } else if (currentPage === "events") {
      return <EventsPage />;
    } else if (currentPage === "projects") {
      return <ProjectsPage />;
    } else if (currentPage === "psskills") {
      return <PsskillPage />;
    } else if (currentPage === "communication") {
      return <CommunicationSkillPage />;
    }
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <SideBar onSelectPage={(page) => setCurrentPage(page === "home" ? "overview" : page)} />

      {/* Dynamic Content Section */}
      <div className="content-section">{renderPage()}</div>
    </div>
  );
};

export default TeacherDashboard;
