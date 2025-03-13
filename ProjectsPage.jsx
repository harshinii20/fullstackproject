import React, { useState } from "react";
import "./ProjectsPage.css";

const submissions = [
  {
    name: "Harshini",
    rollNumber: "CT117",
    year: "2",
    projectTitle: "AI-Based Chatbot",
    domain: "Artificial Intelligence",
    ratings: "4",
    certificate: "View Certificate",
    status: "Pending",
  },
];

const ProjectsPage = () => {
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
  return (
    <div className="events-container">
      <div className="white-container">
        <h2 className="table-title">Project Submissions</h2>
        <table className="submissions-table">
          <thead>
            <tr>
              <th>Student Name</th>
              <th>Roll Number</th>
              <th>Year</th>
              <th>Project Title</th>
              <th>Domain</th>
              <th>Ratings</th>
              <th>Certification Proof</th>
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
                <td>{submission.projectTitle}</td>
                <td>{submission.domain}</td>
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
                  <a href="#" className="certificate-link">
                    {submission.certificate}
                  </a>
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

export default ProjectsPage;
