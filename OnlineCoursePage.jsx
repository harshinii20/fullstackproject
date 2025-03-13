import React, { useState } from "react";
import "./OnlineCoursePage.css";

const submissions = [
  { name: "Harshini", rollNumber: "CT117", coursetype: "Nptel", coursename: "Introduction to Machine Learning", certificate: "View Certificate",url: "www.certificateurl.com", status: "Pending" },
  { name: "Sumathi", rollNumber: "CT103", coursetype: "coursera", coursename: "Java Fundamentals", certificate: "View Certificate",url: "www.certificateurl.com", status: "Pending" },
  { name: "Logu", rollNumber: "CT149", coursetype: "coursera", coursename: "Exploratory Data Analysis", rating: 3,  certificate: "View Certificate",url: "www.certificateurl.com",status: "Pending" },
];

const OnlineCoursePage = () => {
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
    <div className="technical-skills-container">
      <h2>Online Course Submissions</h2>
      <table className="submissions-table">
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Roll Number</th>
            <th>Course Type</th>
            <th>Course Name</th>
            <th>Certification Proof</th>
            <th>Certification URL</th>
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
              <td>{submission.coursetype}</td>
              <td>{submission.coursename}</td>
              <td><a href="#">{submission.certificate}</a></td>
              <td><a href="#">{submission.url}</a></td>
         
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

export default OnlineCoursePage;
