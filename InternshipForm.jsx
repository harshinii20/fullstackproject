//DONT CHANGE ANYTHING//

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './InternshipForm.css';

const InternshipForm = () => {
  const [formData, setFormData] = useState({
    studentName: "",
    rollNumber: "",
    yearOfStudy: "",
    sector: "",
    industryName: "",
    city: "",
    state: "",
    country: "",
    industryWebsite: "",
    certificateProof: null,
  });

  const [internshipsList, setInternshipsList] = useState([]);
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);

  const navigate = useNavigate();

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
    setInternshipsList([...internshipsList, formData]);
    alert("Internship details submitted successfully!");
    setFormData({
      studentName: "",
      rollNumber: "",
      yearOfStudy: "",
      sector: "",
      industryName: "",
      city: "",
      state: "",
      country: "",
      industryWebsite: "",
      certificateProof: null,
    });
    setIsFormModalOpen(false);
  };

  return (
    <div className="internship-form-container">
    

      <button
        className="open-modal-button"
        onClick={() => setIsFormModalOpen(true)}
      >
        Add Internship
      </button>

      <button
        className="open-modal-button"
        onClick={() => setIsViewModalOpen(true)}
      >
        View Internships
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
            <div className="modal-header">Add Internship</div>
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
            placeholder="Enter your roll number"
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
            <option value="">Select an Option</option>
            <option value="1">First Year</option>
            <option value="2">Second Year</option>
            <option value="3">Third Year</option>
            <option value="4">Final Year</option>
          </select>
        </div>
        <div className="form-group">
          <label>Sector*</label>
          <select
            name="sector"
            value={formData.sector}
            onChange={handleChange}
            required
          >
            <option value="">Select an Option</option>
            <option value="Government">Government</option>
            <option value="Private">Private</option>
          </select>
        </div>
        <div className="form-group">
          <label>Industry Name*</label>
          <input
            type="text"
            placeholder="Enter industry name"
            name="industryName"
            value={formData.industryName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>City*</label>
          <input
            type="text"
            placeholder="Enter city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>State*</label>
          <input
            type="text"
            placeholder="Enter state"
            name="state"
            value={formData.state}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Country*</label>
          <input
            type="text"
            placeholder="Enter country"
            name="country"
            value={formData.country}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Industry Website*</label>
          <input
            type="text"
            placeholder="Enter industry website"
            name="industryWebsite"
            value={formData.industryWebsite}
            onChange={handleChange}
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

      {isViewModalOpen && (
        <div className="modal-overlay">
          <div className="internship-container">
            <span
              className="modal-close"
              onClick={() => setIsViewModalOpen(false)}
            >
              &times;
            </span>
            <div className="modal-header">Internships</div>
            <ul className="internship-list">
              {internshipsList.map((internship, index) => (
                <li key={index} className="internship-list-item">
                  <strong>Student Name:</strong> {internship.studentName} <br />
                  <strong>Roll Number:</strong> {internship.rollNumber} <br />
                  <strong>Year of Study:</strong> {internship.yearOfStudy} <br />
                  <strong>Sector:</strong> {internship.sector} <br />
                  <strong>Industry Name:</strong> {internship.industryName} <br />
                  <strong>City:</strong> {internship.city} <br />
                  <strong>State:</strong> {internship.state} <br />
                  <strong>Country:</strong> {internship.country} <br />
                  <strong>Industry Website:</strong> {internship.industryWebsite} <br />
                  <strong>Certificate Proof:</strong> {internship.certificateProof ? internship.certificateProof.name : "N/A"} <br />
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default InternshipForm;
