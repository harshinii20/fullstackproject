//DONT CHANGE ANYTHING//
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const OnlineCourse = () => {
  const [formData, setFormData] = useState({
    studentName: "",
    rollNumber: "",
    courseType: "",
    courseName: "",
    certificateProof: null,
    certificateURL: "",
  });

  const [coursesList, setCoursesList] = useState([]);
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
    setCoursesList([...coursesList, formData]);
    alert("Submitted successfully!");
    setFormData({
      studentName: "",
      rollNumber: "",
      courseType: "",
      courseName: "",
      certificateProof: null,
      certificateURL: "",
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
        Add Online Course
      </button>

      <button
        className="open-modal-button"
        onClick={() => setIsViewModalOpen(true)}
      >
        View Your Online Courses
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
            <div className="modal-header">Online Course Attended</div>
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
                <label>Course Type*</label>
                <select
                  name="courseType"
                  value={formData.courseType}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>
                    Select an Option
                  </option>
                  <option value="Swayam-NPTEL">Swayam-NPTEL</option>
                  <option value="others">Others</option>
                </select>
              </div>
              <div className="form-group">
                <label>Course Name*</label>
                <input
                  type="text"
                  name="courseName"
                  value={formData.courseName}
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
              <div className="form-group">
                <label>Certificate URL*</label>
                <input
                  type="url"
                  name="certificateURL"
                  value={formData.certificateURL}
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
          <div className="modal-container">
            <span
              className="modal-close"
              onClick={() => setIsViewModalOpen(false)}
            >
              &times;
            </span>
            <div className="modal-header">Your Online Courses</div>
            <ul className="courses-list">
              {coursesList.map((course, index) => (
                <li key={index} className="courses-list-item">
                  <strong>Student Name:</strong> {course.studentName} <br />
                  <strong>Roll Number:</strong> {course.rollNumber} <br />
                  <strong>Course Type:</strong> {course.courseType} <br />
                  <strong>Course Name:</strong> {course.courseName} <br />
                  <strong>Certificate:</strong> {course.certificateProof ? course.certificateProof.name : "N/A"} <br />
                  <strong>Certificate URL:</strong> {course.certificateURL}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default OnlineCourse;
