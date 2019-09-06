import { SEND_MESSAGE_REMOTE_SUCCESS, SEND_MESSAGE_CLIENT_SUCCESS } from '../../utils/constants';

export const onOpen = () => {
  // doSend("WebSocket rocks");
  console.log('connected');
};

export const onClose = () => {};

export const onMessage = (message, sendMessageToBot) => {
  sendMessageToBot({ message });
  console.log('onmess', message);
};

// export const onError = () => {
// };

export const doSend = (message, websocket) => {
  websocket.send(message);
};

export const sendMessageToBot = ({ message }) => ({
  type: SEND_MESSAGE_REMOTE_SUCCESS,
  payload: { message }
});
export const sendClientMessage = ({ message }) => ({
  type: SEND_MESSAGE_CLIENT_SUCCESS,
  payload: { message }
});
