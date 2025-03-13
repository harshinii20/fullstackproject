import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CommunicationPage.css';

const CommunicationPage = () => {
  const [formData, setFormData] = useState({
    studentName: "",
    rollNumber: "",
    yearOfStudy: "",
    mockinterview: "",
    mockgd: "",
    rating: "",
  });

  const [communicationList, setCommunicationList] = useState([]);
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add the current form data to the communication list
    setCommunicationList([...communicationList, formData]);

    alert("Communication skills details submitted successfully!");

    setFormData({
      studentName: "",
      rollNumber: "",
      yearOfStudy: "",
      mockinterview: "",
      mockgd: "",
      rating: "",
    });

    setIsFormModalOpen(false);
  };

  return (
    <div className="communication-container">

      <button
        className="open-modal-button"
        onClick={() => setIsFormModalOpen(true)}
      >
        Add New Achievements
      </button>

      <button
        className="open-modal-button"
        onClick={() => setIsViewModalOpen(true)}
      >
        View Achievements
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
            <div className="communication-form-container">
              <h2 className="form-header">Communication Skill</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="studentName">Student Name*</label>
                  <input
                    type="text"
                    id="studentName"
                    name="studentName"
                    value={formData.studentName}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="rollNumber">Roll Number*</label>
                  <input
                    type="text"
                    id="rollNumber"
                    name="rollNumber"
                    value={formData.rollNumber}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="yearOfStudy">Year of Study*</label>
                  <select
                    id="yearOfStudy"
                    name="yearOfStudy"
                    value={formData.yearOfStudy}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select an Option</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="mockinterview">Attended Mock Interview?*</label>
                  <select
                    id="mockinterview"
                    name="mockinterview"
                    value={formData.mockinterview}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Click to Choose</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="mockgd">Attended Mock Group Discussion?*</label>
                  <select
                    id="mockgd"
                    name="mockgd"
                    value={formData.mockgd}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Click to Choose</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="rating">
                    Rate yourself for your Communication skill out of 5*
                  </label>
                  <input
                    type="number"
                    id="rating"
                    name="rating"
                    value={formData.rating}
                    onChange={handleChange}
                    min="1"
                    max="5"
                    required
                  />
                </div>

                <button type="submit" className="submit-button">
                  Submit for Verification
                </button>
              </form>
            </div>
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
            <div className="view-header">View Achievements</div>
            <ul className="communication-list">
              {communicationList.map((achievement, index) => (
                <li key={index} className="communication-list-item">
                  <strong>Student Name:</strong> {achievement.studentName} <br />
                  <strong>Roll Number:</strong> {achievement.rollNumber} <br />
                  <strong>Year of Study:</strong> {achievement.yearOfStudy} <br />
                  <strong>Mock Interview:</strong> {achievement.mockinterview} <br />
                  <strong>Mock GD:</strong> {achievement.mockgd} <br />
                  <strong>Rating:</strong> {achievement.rating} <br />
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default CommunicationPage;
