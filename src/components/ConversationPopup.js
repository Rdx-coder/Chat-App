import React from 'react';

// ConversationPopup component
const ConversationPopup = ({ contacts, startConversation }) => {
  return (
    <div>
      <h2>Create Conversation</h2> {/* Heading for the conversation popup */}
      {contacts.map((contact) => (
        <div key={contact.id} onClick={() => startConversation(contact)}> {/* Create a clickable div for each contact */}
          <p>{contact.name}</p> {/* Display the contact name */}
        </div>
      ))}
    </div>
  );
};

export default ConversationPopup;
