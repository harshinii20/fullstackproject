//DONT CHANGE ANYTHING//

import React, { useState } from "react";
import "./Events.css";
import { useNavigate } from "react-router-dom";

const Events = () => {
  const [formData, setFormData] = useState({
    studentName: "",
    rollNumber: "",
    yearOfStudy: "",
    eventCategory: "",
    eventDate: "",
    certificateDocumentProof: "",
    geoTag: "",
  });

  const [eventsList, setEventsList] = useState([]);
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "certificateDocumentProof" || name === "geoTag") {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add the current form data to the events list
    setEventsList([...eventsList, formData]);

    alert("Participated Event details submitted successfully!");

    // Reset the form fields
    setFormData({
      studentName: "",
      rollNumber: "",
      yearOfStudy: "",
      eventCategory: "",
      eventDate: "",
      certificateDocumentProof: "",
      geoTag: "",
    });

    setIsFormModalOpen(false);
  };

  return (
    <div className="event-container">
      <button
        className="open-modal-button"
        onClick={() => setIsFormModalOpen(true)}
      >
        Add New Events
      </button>

      <button
        className="open-modal-button"
        onClick={() => setIsViewModalOpen(true)}
      >
        View Events Participated
      </button>

      {/* Form Modal */}
      {isFormModalOpen && (
        <div className="modal-overlay">
          <div className="modal-container">
            <span
              className="modal-close"
              onClick={() => setIsFormModalOpen(false)}
            >
              &times;
            </span>
            <div className="events-container">
              <div className="form-container">
                <h2 className="form-header">EVENTS ATTENDED</h2>
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
                    <label htmlFor="eventCategory">Event Category*</label>
                    <select
                      id="eventCategory"
                      name="eventCategory"
                      value={formData.eventCategory}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Click to Choose</option>
                      <option value="Paper">Paper Presentation</option>
                      <option value="Project">Project Competition</option>
                      <option value="Technical">Technical Competition</option>
                      <option value="Patent">Patent</option>
                      <option value="Quiz">Tech-Quiz</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="eventDate">Event Date*</label>
                    <input
                      type="date"
                      id="eventDate"
                      name="eventDate"
                      value={formData.eventDate}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="certificateDocumentProof">
                      Certificate Document Proof*
                    </label>
                    <input
                      type="file"
                      id="certificateDocumentProof"
                      name="certificateDocumentProof"
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="geoTag">Upload GeoTag*</label>
                    <input
                      type="file"
                      id="geoTag"
                      name="geoTag"
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
          </div>
        </div>
      )}

      {/* View Modal */}
      {isViewModalOpen && (
        <div className="modal-overlay">
          <div className="modal-container">
            <span
              className="modal-close"
              onClick={() => setIsViewModalOpen(false)}
            >
              &times;
            </span>
            <div className="modal-header">Events Attended</div>
            {eventsList.length > 0 ? (
              <ul className="event-list">
                {eventsList.map((event, index) => (
                  <li key={index} className="event-list-item">
                    <p><strong>Student Name:</strong> {event.studentName}</p>
                    <p><strong>Roll Number:</strong> {event.rollNumber}</p>
                    <p><strong>Year of Study:</strong> {event.yearOfStudy}</p>
                    <p><strong>Event Category:</strong> {event.eventCategory}</p>
                    <p><strong>Event Date:</strong> {event.eventDate}</p>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="no-events-message">No events attended yet!</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Events;
