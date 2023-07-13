import React, { useState } from 'react';
import '../styles/ChatPage.css';

// Conversation component
const Conversation = ({ conversation, sendMessage }) => {
  // State for managing the message input
  const [message, setMessage] = useState('');

  // Handle sending a message
  const handleSendMessage = (e) => {
    e.preventDefault();
    sendMessage(message);
    setMessage('');
  };

  return (
    <div>
      <h2>{conversation.contactName}</h2> {/* Display the contact name */}

      <ul>
        {conversation.messages.map((msg) => (
          <li key={msg.id}>
            {msg.sender}: {msg.content} {/* Display each message with the sender */}
          </li>
        ))}
      </ul>

      {/* Message input and send button */}
      <form onSubmit={handleSendMessage}>
        <input
          type="text"
          placeholder="Type a message"
          value={message}
          onChange={(e) => setMessage(e.target.value)} 
          /* Update the message state on input change */
        />
        <button type="submit">Send</button> {/* Submit button to send the message */}
      </form>
    </div>
  );
};

export default Conversation;
