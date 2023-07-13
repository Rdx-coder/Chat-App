import React, { useState } from 'react';
import '../styles/NewMessageForm.css'; // Import the CSS file

// NewMessageForm component
const NewMessageForm = ({ sendMessage }) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim() !== '') {
      sendMessage({
        id: new Date().getTime(),
        sender: 'You',
        content: message
      });
      setMessage('');
    }
  };

  return (
    <div className="new-message-form-container"> {/* Add a container div */}
      <h3>New Message</h3> {/* Heading for the new message form */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Enter your message"
        /> {/* Message input field */}
        <button type="submit">Send</button> {/* Submit button for sending the message */}
      </form>
    </div>
  );
};

export default NewMessageForm;
