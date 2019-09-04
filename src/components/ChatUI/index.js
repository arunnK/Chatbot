import React from 'react';
import { Toast } from 'react-bootstrap';
import PropTypes from 'prop-types';

const ChatUI = ({ serverMessages, clientMessages }) => {
  return (
    <React.Fragment>
      {serverMessages.map((serverMessage, index) => (
        <React.Fragment>
          <span>You: </span>
          <Toast show style={{ width: '50%' }}>
            <Toast.Body>{clientMessages[index]}</Toast.Body>
          </Toast>
          <span style={{ width: '50%', marginLeft: '55%' }}>Bot: </span>
          <Toast show style={{ width: '50%', marginLeft: '55%' }}>
            <Toast.Body>{serverMessage}</Toast.Body>
          </Toast>
        </React.Fragment>
      ))}
    </React.Fragment>
  );
};

ChatUI.propTypes = {
  serverMessages: PropTypes.arrayOf(PropTypes.string).isRequired,
  clientMessages: PropTypes.arrayOf(PropTypes.string).isRequired
};

ChatUI.defaultProps = {};

export default ChatUI;
