import React, { useState } from 'react';
import './ProjectsDone.css';

const ProjectsDone = () => {
  const [formData, setFormData] = useState({
    studentName: "",
    rollNumber: "",
    yearOfStudy: "",
    projectTitle: "",
    teamMembers: "",
    domain: "",
    domainKnowledgeRating: "",
    certificateProof: null,
  });

  const [projectsList, setProjectsList] = useState([]);
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "certificateProof") {
      setFormData({ ...formData, certificateProof: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setProjectsList([...projectsList, formData]);
    alert("Project details submitted successfully!");
    setFormData({
      studentName: "",
      rollNumber: "",
      yearOfStudy: "",
      projectTitle: "",
      teamMembers: "",
      domain: "",
      domainKnowledgeRating: "",
      certificateProof: null,
    });
    setIsFormModalOpen(false);
  };

  return (
    <div className="projects-container">
     

      <button
        className="open-modal-button"
        onClick={() => setIsFormModalOpen(true)}
      >
        Add New Project Details
      </button>

      <button
        className="open-modal-button"
        onClick={() => setIsViewModalOpen(true)}
      >
        View Projects Done
      </button>

      {/* Add New Project Modal */}
      {isFormModalOpen && (
        <div className="modal-overlay">
          <div className="modal-container">
            <span
              className="modal-close"
              onClick={() => setIsFormModalOpen(false)}
            >
              &times;
            </span>
            <h2>Add New Project Details</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Student Name*</label>
                <input
                  type="text"
                  name="studentName"
                  value={formData.studentName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Roll Number*</label>
                <input
                  type="text"
                  name="rollNumber"
                  value={formData.rollNumber}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Year of Study*</label>
                <select
                  name="yearOfStudy"
                  value={formData.yearOfStudy}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Year</option>
                  <option value="1">1st Year</option>
                  <option value="2">2nd Year</option>
                  <option value="3">3rd Year</option>
                  <option value="4">4th Year</option>
                </select>
              </div>

              <div className="form-group">
                <label>Project Title*</label>
                <input
                  type="text"
                  name="projectTitle"
                  value={formData.projectTitle}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Number of Team Members*</label>
                <select
                  name="teamMembers"
                  value={formData.teamMembers}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Number</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
              </div>

              <div className="form-group">
                <label>Domain*</label>
                <select
                  name="domain"
                  value={formData.domain}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Domain</option>
                  <option value="Web Development">Web Development</option>
                  <option value="Data Science">Data Science</option>
                  <option value="Machine Learning">Machine Learning</option>
                  <option value="Cyber Security">Cyber Security</option>
                </select>
              </div>

              <div className="form-group">
                <label>Rate yourself for your domain knowledge (Out of 5)</label>
                <input
                  type="number"
                  name="domainKnowledgeRating"
                  value={formData.domainKnowledgeRating}
                  onChange={handleChange}
                  min="1"
                  max="5"
                  required
                />
              </div>

              <div className="form-group">
                <label>Certificate Document Proof*</label>
                <input
                  type="file"
                  name="certificateProof"
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="submit-button">
                Submit for Verification
              </button>
            </form>
          </div>
        </div>
      )}

      {/* View Projects Modal */}
      {isViewModalOpen && (
        <div className="modal-overlay">
          <div className="modal-container">
            <span
              className="modal-close"
              onClick={() => setIsViewModalOpen(false)}
            >
              &times;
            </span>
            <h2>View Projects Done</h2>
            {projectsList.length > 0 ? (
              <ul className="projects-list">
                {projectsList.map((project, index) => (
                  <li key={index} className="projects-list-item">
                    <p><strong>Student Name:</strong> {project.studentName}</p>
                    <p><strong>Roll Number:</strong> {project.rollNumber}</p>
                    <p><strong>Year of Study:</strong> {project.yearOfStudy}</p>
                    <p><strong>Project Title:</strong> {project.projectTitle}</p>
                    <p><strong>Team Members:</strong> {project.teamMembers}</p>
                    <p><strong>Domain:</strong> {project.domain}</p>
                    <p><strong>Domain Knowledge Rating:</strong> {project.domainKnowledgeRating}</p>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="no-projects-message">No projects added yet!</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectsDone;
