import React from 'react';
import '../styles/ChatPage.css';

// MessageList component
const MessageList = ({ messages }) => {
  return (
    <div>
      {messages.map((message) => (
        <div key={message.id}> {/* Assign a unique key to each message */}
          <p><strong>{message.sender}</strong>: {message.content}</p> {/* Display the sender and content of each message */}
        </div>
      ))}
    </div>
  );
};

export default MessageList;
