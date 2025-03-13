import React, { useState } from "react";
import "./EventsPage.css";

const submissions = [
  { 
    name: "Harshini", 
    rollNumber: "CT117", 
    year: "2", 
    event: "Hackathon 2024", 
    eventDate: "2024-12-01", 
    certificate: "View Certificate", 
    geoTag: "13.0827° N, 80.2707° E", 
    status: "Pending" 
  },
];

const EventsPage = () => {
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
      <h2 className="table-title">Events Submissions</h2>
        <table className="submissions-table">
          <thead>
            <tr>
              <th>Student Name</th>
              <th>Roll Number</th>
              <th>Year</th>
              <th>Event</th>
              <th>Event Date</th>
              <th>Certification Proof</th>
              <th>Geo Tag</th>
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
                <td>{submission.event}</td>
                <td>{submission.eventDate}</td>
                <td><a href="#" className="certificate-link">{submission.certificate}</a></td>
                <td>{submission.geoTag}</td>
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
    </div>
  );
};

export default EventsPage;
