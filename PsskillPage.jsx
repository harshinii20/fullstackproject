import React, { useState } from "react";
import "./PsskillPage.css";

const submissions = [
  {
    name: "Harshini",
    rollNumber: "CT117",
    year: "2",
    cCompletion: "3",
    dsCompletion: "5",
    javaCompletion: "1",
    pythonCompletion: "1",
    status: "Pending",
  },
];

const PsskillPage = () => {
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

  return (
    <div className="events-container">
      <div className="white-container">
        <h2 className="table-title">Personalized Skill Completion</h2>
        <table className="submissions-table">
          <thead>
            <tr>
              <th>Student Name</th>
              <th>Roll Number</th>
              <th>Year</th>
              <th>C Level Completion</th>
              <th>Data Structures Level Completion</th>
              <th>Java Completion</th>
              <th>Python Completion</th>
              <th>Actions</th>
              <th>Verification Status</th>
            </tr>
          </thead>
          <tbody>
            {data.map((submission, index) => (
              <tr key={index}>
                <td>{submission.name}</td>
                <td>{submission.rollNumber}</td>
                <td>{submission.year}</td>
                <td>{submission.cCompletion}</td>
                <td>{submission.dsCompletion}</td>
                <td>{submission.javaCompletion}</td>
                <td>{submission.pythonCompletion}</td>
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
            
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PsskillPage;
