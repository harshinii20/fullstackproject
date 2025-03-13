import React, { useState } from "react";
import "./CommunicationSkillPage.css";

const submissions = [
  {
    name: "Harshini",
    rollNumber: "CT117",
    year: "2",
    mockInterview: "Yes",
    mockGD: "No",
    communicationRating: 4, // Default rating
    status: "Pending",
  },
];

const CommunicationSkillPage = () => {
  const [data, setData] = useState(submissions);
  const [rejectionComments, setRejectionComments] = useState({});

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

  const handleRatingChange = (index) => {
    const newRating = prompt(
      `Enter a new rating for ${data[index].name} (1-5):`,
      data[index].communicationRating
    );
    if (newRating && newRating >= 1 && newRating <= 5) {
      const updatedData = [...data];
      updatedData[index].communicationRating = parseInt(newRating, 10);
      setData(updatedData);
      alert(`Updated rating for ${data[index].name} to ${newRating}`);
    } else {
      alert("Please enter a valid rating between 1 and 5.");
    }
  };

  return (
    <div className="events-container">
      <div className="white-container">
        <h2 className="table-title">Communication Skills Submissions</h2>
        <table className="submissions-table">
          <thead>
            <tr>
              <th>Student Name</th>
              <th>Roll Number</th>
              <th>Year</th>
              <th>Mock Interview Attended</th>
              <th>Mock GD Attended</th>
              <th>Communication Skills Rating</th>
              <th>Actions</th>
              <th>Verification Status</th>
              <th>Rejection Comment</th>
            </tr>
          </thead>
          <tbody>
            {data.map((submission, index) => (
              <tr key={index}>
                <td>{submission.name}</td>
                <td>{submission.rollNumber}</td>
                <td>{submission.year}</td>
                <td>{submission.mockInterview}</td>
                <td>{submission.mockGD}</td>
                <td>
                  {submission.communicationRating}{" "}
                  <button
                    className="edit-rating-btn"
                    onClick={() => handleRatingChange(index)}
                  >
                    Edit
                  </button>
                </td>
                <td>
                  <button
                    className="verify-btn"
                    onClick={() => handleVerify(index)}
                  >
                    Verify
                  </button>
                  <button
                    className="reject-btn"
                    onClick={() => handleReject(index)}
                  >
                    Reject
                  </button>
                </td>
                <td
                  className={`status ${submission.status.toLowerCase()}`}
                >
                  {submission.status}
                </td>
                <td>{rejectionComments[index] || "—"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CommunicationSkillPage;
