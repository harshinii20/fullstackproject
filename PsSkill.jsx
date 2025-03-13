import React, { useState } from 'react';
import './PsSkill.css';

const PsSkill = () => {
  const [formData, setFormData] = useState({
    studentName: "",
    rollNumber: "",
    yearOfStudy: "",
    cLevel: "",
    dsLevel: "",
    javaLevel: "",
    pythonLevel: "",
  });

  const [skillsList, setSkillsList] = useState([]);
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSkillsList([...skillsList, formData]);
    alert("Skills details submitted successfully!");
    setFormData({
      studentName: "",
      rollNumber: "",
      yearOfStudy: "",
      cLevel: "",
      dsLevel: "",
      javaLevel: "",
      pythonLevel: "",
    });
    setIsFormModalOpen(false);
  };

  return (
    <div className="ps-skills-container">
      <button
        className="open-modal-button"
        onClick={() => setIsFormModalOpen(true)}
      >
        Add New Skill Details
      </button>

      <button
        className="open-modal-button"
        onClick={() => setIsViewModalOpen(true)}
      >
        View Skills
      </button>

      {/* Add New Skill Modal */}
      {isFormModalOpen && (
        <div className="modal-overlay">
          <div className="modal-container">
            <span
              className="modal-close"
              onClick={() => setIsFormModalOpen(false)}
            >
              &times;
            </span>
         
            <form onSubmit={handleSubmit}>
              <div className="form-group">
              <h2 className="form-header">Personalized Skill Completion</h2>
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
                <label>C Level Completion*</label>
                <select
                  name="cLevel"
                  value={formData.cLevel}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Level</option>
                  <option value="1">Level 1</option>
                  <option value="2">Level 2</option>
                  <option value="3">Level 3</option>
                  <option value="4">Level 4</option>
                  <option value="5">Level 5</option>
                </select>
              </div>

              <div className="form-group">
                <label>DS Level Completion*</label>
                <select
                  name="dsLevel"
                  value={formData.dsLevel}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Level</option>
                  <option value="1">Level 1</option>
                  <option value="2">Level 2</option>
                  <option value="3">Level 3</option>
                  <option value="4">Level 4</option>
                  <option value="5">Level 5</option>
                </select>
              </div>

              <div className="form-group">
                <label>Java Level Completion*</label>
                <select
                  name="javaLevel"
                  value={formData.javaLevel}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Level</option>
                  <option value="1">Level 1</option>
                  <option value="2">Level 2</option>
                  <option value="3">Level 3</option>
                  <option value="4">Level 4</option>
                  <option value="5">Level 5</option>
                </select>
              </div>

              <div className="form-group">
                <label>Python Level Completion*</label>
                <select
                  name="pythonLevel"
                  value={formData.pythonLevel}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Level</option>
                  <option value="1">Level 1</option>
                  <option value="2">Level 2</option>
                  <option value="3">Level 3</option>
                  <option value="4">Level 4</option>
                  <option value="5">Level 5</option>
                </select>
              </div>

              <button type="submit" className="submit-button">
                Submit for Verification
              </button>
            </form>
          </div>
        </div>
      )}

      {/* View Skills Modal */}
      {isViewModalOpen && (
        <div className="modal-overlay">
          <div className="modal-container">
            <span
              className="modal-close"
              onClick={() => setIsViewModalOpen(false)}
            >
              &times;
            </span>
            <h2>View Skills</h2>
            {skillsList.length > 0 ? (
              <ul className="skills-list">
                {skillsList.map((skill, index) => (
                  <li key={index} className="skills-list-item">
                    <p><strong>Student Name:</strong> {skill.studentName}</p>
                    <p><strong>Roll Number:</strong> {skill.rollNumber}</p>
                    <p><strong>Year of Study:</strong> {skill.yearOfStudy}</p>
                    <p><strong>C Level:</strong> {skill.cLevel}</p>
                    <p><strong>DS Level:</strong> {skill.dsLevel}</p>
                    <p><strong>Java Level:</strong> {skill.javaLevel}</p>
                    <p><strong>Python Level:</strong> {skill.pythonLevel}</p>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="no-skills-message">No skills added yet!</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default PsSkill;
