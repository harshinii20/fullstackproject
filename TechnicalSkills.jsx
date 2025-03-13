//DONT CHANGE ANYTHING//
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const TechnicalSkills = () => {
  const [formData, setFormData] = useState({
    studentName: "",
    rollNumber: "",
    techSkill: "",
    certificate: null,
    rating: "",
  });

  const [skillsList, setSkillsList] = useState([]); // State to store submitted skills
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "certificate") {
      setFormData({ ...formData, certificate: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add the submitted data to the skills list
    setSkillsList([...skillsList, formData]);
    alert("Submitted successfully!");
    setFormData({
      studentName: "",
      rollNumber: "",
      techSkill: "",
      certificate: null,
      rating: "",
    });
    setIsFormModalOpen(false);
  };

  return (
    <div>
    <style>
      {`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 999;
          overflow: hidden;
        }
  
        .modal-container {
          width: 500px;
          background-color: white;
          padding: 30px;
          border-radius: 8px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
          position: relative;
          text-align: left;
        }
  
        .modal-header {
          font-size: 24px;
          font-weight: bold;
          color: #335a75;
          margin-bottom: 20px;
          text-align: center;
        }
  
        .modal-close {
          position: absolute;
          top: 15px;
          right: 15px;
          font-size: 20px;
          cursor: pointer;
          color: #335a75;
        }
  
        .form-group {
          margin-bottom: 15px;
        }
  
        .form-group label {
          display: block;
          font-size: 14px;
          margin-bottom: 5px;
          color: black;
        }
  
        .form-group input,
        .form-group select {
          width: 100%;
          padding: 10px;
          font-size: 14px;
          border: 1px solid #ccc;
          border-radius: 4px;
          box-sizing: border-box;
        }
  
        .form-group input[type="file"] {
          padding: 5px;
          border: none;
        }
  
        .submit-button {
          width: 100%;
          padding: 12px;
          font-size: 16px;
          color: white;
          background-color: #557d9d;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          text-align: center;
        }
  
        .submit-button:hover {
          background-color: #335a75;
        }
  
        .open-modal-button {
          padding: 10px 20px;
          background-color: #557d9d;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-size: 16px;
          margin-right: 10px;
        }
  
        .open-modal-button:hover {
          background-color: #335a75;
        }
  
        .skills-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }
  
        .skills-list-item {
          padding: 15px;
          border-bottom: 1px solid #ccc;
          font-size: 14px;
        }
      `}
    </style>
  
    <button
      className="open-modal-button"
      onClick={() => setIsFormModalOpen(true)}
    >
      Open Technical Skills Form
    </button>
  
    <button
      className="open-modal-button"
      onClick={() => setIsViewModalOpen(true)}
    >
      View Your Technical Skills
    </button>
  
    {isFormModalOpen && (
      <div className="modal-overlay">
        <div className="modal-container">
          <span
            className="modal-close"
            onClick={() => setIsFormModalOpen(false)}
          >
            &times;
          </span>
          <div className="modal-header">TECH SKILLS</div>
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
              <label>Tech skill that you're expertise in*</label>
              <select
                name="techSkill"
                value={formData.techSkill}
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                  Select an Option
                </option>
                <option value="Data Science/Machine Learning">
                  Data Science/Machine Learning
                </option>
                <option value="Block Chain">Block Chain</option>
                <option value="Web Development">Web Development</option>
                <option value="Cyber Security">Cyber Security</option>
                <option value="Cloud Computing">Cloud Computing</option>
                <option value="Full Stack Development">
                  Full Stack Development
                </option>
              </select>
            </div>
            <div className="form-group">
              <label>Certificate Document Proof*</label>
              <input
                type="file"
                name="certificate"
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Rate Yourself (Out of 5)*</label>
              <select
                name="rating"
                value={formData.rating}
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                  Select an Option
                </option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
            <button type="submit" className="submit-button">
              Submit for Verification
            </button>
          </form>
        </div>
      </div>
    )}
  
    {isViewModalOpen && (
      <div className="modal-overlay">
        <div className="modal-container">
          <span
            className="modal-close"
            onClick={() => setIsViewModalOpen(false)}
          >
            &times;
          </span>
          <div className="modal-header">View Technical Skills</div>
          <ul className="skills-list">
            {skillsList.map((skill, index) => (
              <li key={index} className="skills-list-item">
                <strong>Student Name:</strong> {skill.studentName} <br />
                <strong>Roll Number:</strong> {skill.rollNumber} <br />
                <strong>Technical Skill:</strong> {skill.techSkill} <br />
                <strong>Rating:</strong> {skill.rating} <br />
                <strong>Certificate:</strong>{" "}
                {skill.certificate ? skill.certificate.name : "N/A"}
              </li>
            ))}
          </ul>
        </div>
      </div>
    )}
  </div>
  
  );
};

export default TechnicalSkills;
