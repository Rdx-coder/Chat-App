import React from 'react';

// ConversationList component
const ConversationList = ({ conversations, setSelectedConversation }) => {
  return (
    <ul className="conversation-list">
      {conversations.map((conversation) => {
        const lastMessage = conversation.messages[conversation.messages.length - 1];

        return (
          <li
            key={conversation.id} /* Assign a unique key to each conversation item */
            className="conversation-item"
            onClick={() => setSelectedConversation(conversation)} /* Set the selected conversation when clicked */
          >
            <div className="contact-avatar"></div> {/* Display the contact avatar */}
            <div className="contact-info">
              <div className="contact-name">{conversation.contactName}</div> {/* Display the contact name */}
              <div className="last-message">{lastMessage && lastMessage.content}</div> {/* Display the content of the last message */}
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default ConversationList;
