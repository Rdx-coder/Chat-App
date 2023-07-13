import React, { useState } from 'react';

// ContactButton component
const ContactButton = ({ contacts }) => {
  // State to manage whether to show contacts or not
  const [showContacts, setShowContacts] = useState(false);

  // Handle click event of the button to toggle the showContacts state
  const handleClick = () => {
    setShowContacts(!showContacts);
  };

  // Style for the button
  const buttonStyle = {
    padding: '8px 16px',
    background: '#f0f0f0',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  };

  // Style for the contact list
  const contactListStyle = {
    marginTop: '16px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    padding: '16px',
  };

  return (
    <div>
      {/* Button to show/hide contacts */}
      <button style={buttonStyle} onClick={handleClick}>
        Show Contacts
      </button>
      {/* Render contact list if showContacts is true */}
      {showContacts && (
        <div style={contactListStyle}>
          <h2>Contacts</h2>
          {/* Render each contact */}
          {contacts.map((contact) => (
            <div key={contact.id}>
              <p>{contact.name}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ContactButton;
