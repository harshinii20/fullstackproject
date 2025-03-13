import React, { useState } from "react";
import { Bar, Pie } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from "chart.js";
import "./Admin.css";

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Title, Tooltip, Legend);

const studentData = [
  {
    name: "Harshini",
    rollNumber: "CT117",
    domain: "Machine Learning",
    skill: "ReactJS",
    commSkills: "Beginner",
    psStatus: "Python",
    avgrating: 4.5,
    details: "Completed an online course on Machine Learning using NPTEL.",
    submissionStatus: "Verified",
  },
  {
    name: "Sumathi",
    rollNumber: "CT103",
    domain: "Web Development",
    skill: "Java",
    commSkills: "Advanced",
    psStatus: "Python",
    avgrating: 3.5,
    details: "Working on web-based applications and improving JavaScript skills.",
    submissionStatus: "Pending",
  },
  {
    name: "Logu",
    rollNumber: "CT149",
    domain: "Data Science",
    skill: "Data Structures",
    commSkills: "Advanced",
    psStatus: "C",
    avgrating: 4,
    details: "Focused on Data Science projects using Python and SQL.",
    submissionStatus: "Verified",
  },
  {
    name: "Madhu",
    rollNumber: "IT101",
    domain: "BlockChain",
    skill: "MERN",
    commSkills: "Advanced",
    psStatus: "C",
    avgrating: 4.5,
    details: "Completed an online course on Machine Learning using Coursera.",
    submissionStatus: "Verified",
  },
  {
    name: "Ashika",
    rollNumber: "SE107",
    domain: "Cyber security",
    skill: "ReactJS",
    commSkills: "Intermediate",
    psStatus: "Python",
    avgrating: 4.5,
    details: "Completed an online course on Cyber Security using NPTEL.",
    submissionStatus: "Verified",
  },
];

const Admin = () => {
  const [students, setStudents] = useState(studentData);
  const [filter, setFilter] = useState({ skill: "", commSkills: "", psStatus: "" });
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [activeSection, setActiveSection] = useState("studentRecords"); // State to handle the active section of the sidebar

  const handleFilterChange = (e) => {
    setFilter({ ...filter, [e.target.name]: e.target.value });
  };

  const filteredStudents = students.filter((student) => {
    return (
      (filter.skill ? student.skill === filter.skill : true) &&
      (filter.commSkills ? student.commSkills === filter.commSkills : true) &&
      (filter.psStatus ? student.psStatus === filter.psStatus : true)
    );
  });

  const handleView = (student) => {
    setSelectedStudent(student);
  };

  const handleCloseModal = () => {
    setSelectedStudent(null);
  };

  // Additional data for insights
  const verifiedCount = students.filter(student => student.submissionStatus === "Verified").length;
  const pendingCount = students.filter(student => student.submissionStatus === "Pending").length;

  // Chart Data
  const techSkillData = {
    labels: ["React", "Node.js", "Python", "Java", "C++", "Data Structures"],
    datasets: [
      {
        label: "Number of Students",
        data: [25, 20, 30, 15, 10, 20],
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

  const renderSectionContent = () => {
    switch (activeSection) {
      case "domainExpertise":
        return (
          <div className="chart-section">
            <h3>Domain-Wise Expertise</h3>
            <div className="chart-container">
              
              {/* Render domain-wise expertise chart or content here */}
              <Bar data={domainExpertiseData} options={domainExpertiseOptions} />
            </div>
          </div>
        );
      case "skillExpertise":
        return (
          <div className="chart-section">
            <h3>Skill-Wise Expertise</h3>
            <div className="chart-container">
              <Bar data={techSkillData} options={techSkillOptions} />
            </div>
          </div>
        );
      case "psCompletion":
        return (
          <div className="chart-section">
            <h3>PS-Level Completion</h3>
            <div className="chart-container">
              <Pie data={psCompletionData} options={psCompletionOptions} />
            </div>
          </div>
        );
      case "studentRecords":
      default:
        return (
          <div>
            <div className="filters">
          <label>Filter by Skill:</label>
          <select name="skill" onChange={handleFilterChange}>
            <option value="">All</option>
            <option value="ReactJS">ReactJS</option>
            <option value="MERN">MERN</option>
            <option value="Java">Java</option>
            <option value="Data Structures">Data Structures</option>
          </select>

          <label>Filter by Communication Skills:</label>
          <select name="commSkills" onChange={handleFilterChange}>
            <option value="">All</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>

          <label>Filter by PS Status:</label>
          <select name="psStatus" onChange={handleFilterChange}>
            <option value="">All</option>
            <option value="Python">Python</option>
            <option value="Java">Java</option>
            <option value="C">C</option>
          </select>
        </div>
            {/* Student Table */}
            <table className="student-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Roll Number</th>
                  <th>Domain</th>
                  <th>Skill</th>
                  <th>Communication Skills</th>
                  <th>PS Status</th>
                  <th>Average Rating</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredStudents.map((student, index) => (
                  <tr key={index}>
                    <td>{student.name}</td>
                    <td>{student.rollNumber}</td>
                    <td>{student.domain}</td>
                    <td>{student.skill}</td>
                    <td>{student.commSkills}</td>
                    <td>{student.psStatus}</td>
                    <td>{student.avgrating}</td>
                    <td>
                      <button className="view-btn" onClick={() => handleView(student)}>View</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
    }
  };

  return (
    <div className="admin-dashboard">
      <div className="sidebar">
        <h2>Dashboard</h2>
        <ul>
          <li onClick={() => setActiveSection("domainExpertise")}>Domain-Wise Expertise</li>
          <li onClick={() => setActiveSection("skillExpertise")}>Skill-Wise Expertise</li>
          <li onClick={() => setActiveSection("psCompletion")}>PS Completion</li>
          <li onClick={() => setActiveSection("studentRecords")}>Student Records</li>
        </ul>
      </div>
      <div className="main-content">
        <h1>Admin Dashboard</h1>
        {renderSectionContent()}
        {/* Modal for viewing details */}
        {selectedStudent && (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={handleCloseModal}>
                &times;
              </span>
              <h2>{selectedStudent.name}'s Details</h2>
              <p><strong>Roll Number:</strong> {selectedStudent.rollNumber}</p>
              <p><strong>Domain:</strong> {selectedStudent.domain}</p>
              <p><strong>Skill:</strong> {selectedStudent.skill}</p>
              <p><strong>Communication Skills:</strong> {selectedStudent.commSkills}</p>
              <p><strong>PS Status:</strong> {selectedStudent.psStatus}</p>
              <p><strong>Average Rating:</strong> {selectedStudent.avgrating}</p>
              <p><strong>Details:</strong> {selectedStudent.details}</p>
              <p><strong>Submission Status:</strong> {selectedStudent.submissionStatus}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Admin;
