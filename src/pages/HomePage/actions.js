import { SEND_MESSAGE_REMOTE_SUCCESS, SEND_MESSAGE_CLIENT_SUCCESS } from '../../utils/constants';

export const onOpen = () => {
  // doSend("WebSocket rocks");
  console.log('connected');
};

export const onClose = () => {};

// export const onMessage = () => {
//   // websocket.close();
// };

// export const onError = () => {
// };

export const doSend = (message, websocket, sendMessageToBot) => {
  websocket.send(message);
  sendMessageToBot({ message });
};

export const sendMessageToBot = ({ message }) => ({
  type: SEND_MESSAGE_REMOTE_SUCCESS,
  payload: { message }
});
export const sendClientMessage = ({ message }) => ({
  type: SEND_MESSAGE_CLIENT_SUCCESS,
  payload: { message }
});
