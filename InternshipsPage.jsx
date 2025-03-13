import React, { useState } from "react";
import "./InternshipsPage.css";

const submissions = [
  { name: "Harshini", rollNumber: "CT117", year: "2",sector: "private",indname:"vikram&co",indweb: "www.vikram.com",certificate: "View Certificate", status: "Pending" },
 
  
];

const InternshipsPage = () => {
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
    <div className="technical-skills-container">
      <h2>Internships Submissions</h2>
      <table className="submissions-table">
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Roll Number</th>
            <th>Year</th>
            <th>Sector</th>
            <th>Industry Name</th>
            <th>Industry Website</th>
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
              <td>{submission.sector}</td>
              <td>{submission.indname}</td>
              <td>{submission.indweb}</td>
              <td><a href="#">{submission.certificate}</a></td>
         
              <td>
                <button className="verify-btn" onClick={() => handleVerify(index)}>Verify</button>
                <button className="reject-btn" onClick={() => handleReject(index)}>Reject</button>
              </td>
              <td className={`status ${submission.status.toLowerCase()}`}>{submission.status}</td>
              <td>{rejectionComments[index] || "—"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InternshipsPage;
