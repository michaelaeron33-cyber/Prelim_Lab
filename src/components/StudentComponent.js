import React from 'react';
import '../styles/StudentComponent.css';

const StudentComponent = ({ id, name, email, phone, onDelete }) => {
  return (
    <div className="student-card">
      <div className="student-info">
        <h3 className="student-name">{name}</h3>
        <p className="student-detail">
          <strong>ID:</strong> {id}
        </p>
        <p className="student-detail">
          <strong>Email:</strong> {email}
        </p>
        <p className="student-detail">
          <strong>Phone:</strong> {phone}
        </p>
      </div>
      <button 
        className="delete-btn" 
        onClick={() => onDelete(id)}
      >
        Delete
      </button>
    </div>
  );
};

export default StudentComponent;
