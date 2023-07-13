import React, { useState, useEffect } from 'react';
import ConversationList from '../components/ConversationList';
import ConversationPopup from '../components/ConversationPopup';
import MessageList from '../components/MessageList';
import NewMessageForm from '../components/NewMessageForm';
import dummyData from '../data/dummyData.json';
import '../styles/ChatPage.css';

const ChatPage = () => {
  // State hooks
  const [conversations, setConversations] = useState(() => {
    const storedConversations = localStorage.getItem('conversations');
    return storedConversations ? JSON.parse(storedConversations) : dummyData.conversations;
  });
  const [selectedConversation, setSelectedConversation] = useState(null);
  const [contacts, setContacts] = useState(dummyData.contacts);
  const [searchTerm, setSearchTerm] = useState('');
  const [showContactList, setShowContactList] = useState(false);

  // Filtered conversations based on search term
  const filteredConversations = conversations.filter((conversation) =>
    conversation.contactName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Sort conversations based on the latest message timestamp
  filteredConversations.sort((a, b) => {
    const latestMessageA = a.messages[a.messages.length - 1];
    const latestMessageB = b.messages[b.messages.length - 1];
    if (latestMessageA && latestMessageB) {
      return latestMessageB.timestamp - latestMessageA.timestamp;
    }
    return 0;
  });

  // Save conversations to localStorage when they change
  useEffect(() => {
    localStorage.setItem('conversations', JSON.stringify(conversations));
  }, [conversations]);

  // Function to start a conversation with a contact
  const startConversation = (contact) => {
    const existingConversation = conversations.find(
      (conversation) => conversation.contactName === contact.name
    );

    if (existingConversation) {
      setSelectedConversation(existingConversation);
      setShowContactList(false);
    } else {
      const newConversation = {
        id: conversations.length + 1,
        contactName: contact.name,
        messages: []
      };
      setConversations([...conversations, newConversation]);
      setSelectedConversation(newConversation);
      setShowContactList(false);
    }
  };

  // Function to delete a conversation
  const deleteConversation = () => {
    if (selectedConversation) {
      const updatedConversations = conversations.filter(
        (conversation) => conversation.id !== selectedConversation.id
      );
      setConversations(updatedConversations);
      setSelectedConversation(null);
    }
  };

  // Function to send a message
  const sendMessage = (message) => {
    const updatedConversations = conversations.map((conversation) => {
      if (conversation === selectedConversation) {
        const updatedMessages = [...conversation.messages, message];
        return {
          ...conversation,
          messages: updatedMessages,
        };
      }
      return conversation;
    });
    setConversations(updatedConversations);
    setSelectedConversation((prevConversation) => ({
      ...prevConversation,
      messages: [...prevConversation.messages, message],
    }));
  };

  // Function to handle create conversation button click
  const handleCreateConversation = () => {
    setShowContactList((prevShowContactList) => !prevShowContactList);
  };

  return (
    <div className="chat-page">
      <div className="sidebar">
        <h1>Conversations</h1> {/* Heading for the conversation list */}
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search conversations"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="conversation-list-container">
          {/* Render the ConversationList component with filtered conversations */}
          <ConversationList conversations={filteredConversations} setSelectedConversation={setSelectedConversation} />
        </div>
        <button className="create-conversation-button" onClick={handleCreateConversation}>
          {showContactList ? 'Hide Contacts' : 'Create Conversation'}
        </button>
        {showContactList && (
          // Render the ConversationPopup component with contacts
          <ConversationPopup contacts={contacts} startConversation={startConversation} />
        )}
      </div>
      <div className="chat-view">
        {selectedConversation ? (
          <>
            <div className="chat-header">
              <h2>{selectedConversation.contactName}</h2>
              <button className="delete-conversation-button" onClick={deleteConversation}>
                Delete Conversation
              </button>
            </div>
            {/* Render the MessageList component with selected conversation's messages */}
            <MessageList messages={selectedConversation.messages} />
            {/* Render the NewMessageForm component */}
            <NewMessageForm sendMessage={sendMessage} />
          </>
        ) : (
          <h1>Please select a conversation</h1>
        )}
      </div>
    </div>
  );
};

export default ChatPage;
