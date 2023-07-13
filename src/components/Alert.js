import React from 'react';

// Alert component
const Alert = ({ type, message }) => {
  return (
    <div className={`alert ${type}`}> {/* Use dynamic class names based on the 'type' prop */}
      {message} {/* Display the 'message' prop */}
    </div>
  );
};

export default Alert;
