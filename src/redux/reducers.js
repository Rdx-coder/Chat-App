import { ADD_CONVERSATION, ADD_MESSAGE } from './actions';

const initialState = {
  conversations: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CONVERSATION:
      return {
        ...state,
        conversations: [...state.conversations, action.payload],
      };
    case ADD_MESSAGE:
      return {
        ...state,
        conversations: state.conversations.map((conversation) => {
          if (conversation.id === action.payload.conversationId) {
            return {
              ...conversation,
              messages: [...conversation.messages, action.payload.message],
            };
          }
          return conversation;
        }),
      };
    default:
      return state;
  }
};

export default rootReducer;
