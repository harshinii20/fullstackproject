import React, { useState } from "react";
import "./TechnicalSkillsPage.css";

const submissions = [
  { name: "Harshini", rollNumber: "CT117", skill: "React", certificate: "View Certificate", rating: 4, status: "Pending" },
  { name: "Sumathi", rollNumber: "CT103", skill: "Python", certificate: "View Certificate", rating: 5, status: "Pending" },
  { name: "Logu", rollNumber: "CT149", skill: "Java", certificate: "View Certificate", rating: 3, status: "Pending" },
];

const TechnicalSkillsPage = () => {
  const [data, setData] = useState(submissions);
  const [rejectionComments, setRejectionComments] = useState({});
  const [selectedSubmission, setSelectedSubmission] = useState(null); // To track the selected submission

  const handleVerify = (index) => {
    const updatedData = [...data];
    updatedData[index].status = "Verified";
    setData(updatedData);
    alert(`Verified submission for ${data[index].name}`);
  };

  const handleReject = (index) => {
    const comment = prompt(`Enter a comment for rejecting ${data[index].name}:`);
    if (comment) {
      const updatedData = [...data];
      updatedData[index].status = "Rejected";
      setData(updatedData);
      setRejectionComments({ ...rejectionComments, [index]: comment });
    }
  };

  const handleChangeRating = (index, newRating) => {
    if (newRating < 1 || newRating > 5) {
      alert("Rating must be between 1 and 5.");
      return;
    }
    const updatedData = [...data];
    updatedData[index].rating = newRating;
    setData(updatedData);
    alert(`Updated rating for ${data[index].name} to ${newRating}`);
  };

  const handleView = (index) => {
    setSelectedSubmission(data[index]); // Set the selected submission for the popup
  };

  const closePopup = () => {
    setSelectedSubmission(null); // Close the popup by setting it to null
  };

  return (
    <div className="technical-skills-container">
      <h2>Technical Skills Submissions</h2>
      <table className="submissions-table">
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Roll Number</th>
            <th>Technical Skill</th>
            <th>Certificate Proof</th>
            <th>Ratings</th>
            <th>Actions</th>
            <th>Verification Status</th>
            <th>Rejection Comment</th>
            <th>View</th>
          </tr>
        </thead>
        <tbody>
          {data.map((submission, index) => (
            <tr key={index}>
              <td>{submission.name}</td>
              <td>{submission.rollNumber}</td>
              <td>{submission.skill}</td>
              <td><a href="#">{submission.certificate}</a></td>
              <td>
                <input
                  type="number"
                  value={submission.rating}
                  min="1"
                  max="5"
                  onChange={(e) => handleChangeRating(index, parseInt(e.target.value))}
                />
              </td>
              <td>
                <button className="verify-btn" onClick={() => handleVerify(index)}>Verify</button>
                <button className="reject-btn" onClick={() => handleReject(index)}>Reject</button>
              </td>
              <td className={`status ${submission.status.toLowerCase()}`}>{submission.status}</td>
              <td>{rejectionComments[index] || "—"}</td>
              <td>
                <button className="view-btn" onClick={() => handleView(index)}>View</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedSubmission && (
        <div className="popup-container">
          <div className="popup-content">
            <h3>Submission Details</h3>
            <p><strong>Student Name:</strong> {selectedSubmission.name}</p>
            <p><strong>Roll Number:</strong> {selectedSubmission.rollNumber}</p>
            <p><strong>Technical Skill:</strong> {selectedSubmission.skill}</p>
            <p><strong>Certificate:</strong> <a href="#">{selectedSubmission.certificate}</a></p>
            <p><strong>Rating:</strong> {selectedSubmission.rating}</p>
            <p><strong>Status:</strong> {selectedSubmission.status}</p>
            <p><strong>Rejection Comment:</strong> {rejectionComments[data.indexOf(selectedSubmission)] || "None"}</p>
            <button className="close-btn" onClick={closePopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TechnicalSkillsPage;
