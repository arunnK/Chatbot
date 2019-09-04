import { SEND_MESSAGE_REMOTE_SUCCESS, SEND_MESSAGE_CLIENT_SUCCESS } from '../utils/constants';

const initialState = {
  serverMessages: [],
  clientMessages: []
};

const messageState = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE_REMOTE_SUCCESS:
      return {
        ...state,
        serverMessages: [...state.serverMessages, action.payload.message]
      };
    case SEND_MESSAGE_CLIENT_SUCCESS:
      return {
        ...state,
        clientMessages: [...state.clientMessages, action.payload.message]
      };
    default:
      return state;
  }
};
export default messageState;
