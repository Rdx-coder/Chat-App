// Action Types
export const ADD_CONVERSATION = 'ADD_CONVERSATION';
export const ADD_MESSAGE = 'ADD_MESSAGE';

// Action Creators
export const addConversation = (conversation) => {
  return {
    type: ADD_CONVERSATION,
    payload: conversation,
  };
};

export const addMessage = (conversationId, message) => {
  return {
    type: ADD_MESSAGE,
    payload: { conversationId, message },
  };
};
