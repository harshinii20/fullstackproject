import React from "react";
import "./RatingChangedDetails.css";

const RatingChangedDetails = ({ submissions, onClose }) => {
  return (
    <div className="rating-changed-container">
      <button className="close-button" onClick={onClose}>
        ✖
      </button>
      <h3>Details of Rating Changed Submissions</h3>
      {submissions.length === 0 ? (
        <p>No submissions have changed ratings.</p>
      ) : (
        <div className="rating-changed-list">
          {submissions.map((submission) => (
            <div key={submission.id} className="rating-changed-item">
              <div>
                <strong>Title:</strong> {submission.title}
              </div>
              <div>
                <strong>Original Rating:</strong> {/* Add Original Rating */}
              </div>
              <div>
                <strong>New Rating:</strong> {/* Add Updated Rating */}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RatingChangedDetails;
