import React from 'react';
import { Toast } from 'react-bootstrap';
import PropTypes from 'prop-types';

const ChatUI = ({ serverMessages, clientMessages }) => {
  return (
    <React.Fragment>
      {serverMessages.map((serverMessage, index) => (
        <React.Fragment>
          <Toast show style={{ width: '50%' }}>
            <Toast.Body>{clientMessages[index]}</Toast.Body>
          </Toast>
          <Toast show style={{ width: '50%', marginLeft: '55%' }}>
            <Toast.Body>{serverMessage}</Toast.Body>
          </Toast>
        </React.Fragment>
      ))}
    </React.Fragment>
  );
};

ChatUI.propTypes = {
  serverMessages: PropTypes.shape([]).isRequired,
  clientMessages: PropTypes.shape([]).isRequired
};

ChatUI.defaultProps = {};

export default ChatUI;
