import React, { useEffect, useState, useRef } from 'react';
import { connect } from 'react-redux';
import { Button, Card, Col } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import ChatUI from '../../components/ChatUI';
import { sendMessageToBot, onOpen, onClose, doSend, sendClientMessage } from './actions';
import Input from '../../components/Input';

import './home-page.scss';

const wsUri = 'wss://echo.websocket.org/';

const HomePage = ({ serverMessages, clientMessages, ...props }) => {
  const [message, setMessage] = useState('');

  const websocket = useRef();

  useEffect(() => {
    websocket.current = new WebSocket(wsUri);
    websocket.current.onopen = function (evt) {
      onOpen(evt, websocket.current);
    };
    websocket.current.onclose = function (evt) {
      onClose(evt);
    };
  }, []);

  const handleClick = () => {
    props.sendClientMessage({ message });
    doSend(message, websocket.current, props.sendMessageToBot);
    const chatBox = document.getElementById('chat-container');
    chatBox.scrollTop = chatBox.scrollHeight + chatBox.offsetHeight;
    setMessage('');
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleClick();
    }
  };

  return (
    <Col className="homepage">
      <Card
        style={{
          width: '60vw',
          display: 'flex',
          flexDirection: 'column',
          height: '80%',
          top: '10%'
        }}
      >
        <Card.Body
          id="chat-container"
          style={{
            color: 'black',
            flexBasis: '88%',
            maxHeight: '70vh',
            overflowY: 'auto'
          }}
        >
          <ChatUI clientMessages={clientMessages} serverMessages={serverMessages} />
        </Card.Body>
        <Col
          style={{
            color: 'black',
            flexBasis: '12%',
            flexDirection: 'row',
            display: 'flex',
            padding: '1rem 1rem'
          }}
        >
          <Input
            style={{ flexBasis: '70%', height: '100%' }}
            value={message}
            onChange={ev => setMessage(ev.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type here and press Enter"
            disabled={chatDisabled}
          />
          <Button style={{ flexBasis: '30%' }} variant="primary" onClick={handleClick}>
            Send
          </Button>
        </Col>
      </Card>
    </Col>
  );
};

HomePage.propTypes = {
  serverMessages: PropTypes.arrayOf(PropTypes.string).isRequired,
  clientMessages: PropTypes.arrayOf(PropTypes.string).isRequired,
  sendMessageToBot: PropTypes.func.isRequired,
  sendClientMessage: PropTypes.func.isRequired
};

const mapStateToProps = ({ messageState }) => {
  const { serverMessages, clientMessages } = messageState;
  return {
    serverMessages,
    clientMessages
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    sendMessageToBot: bindActionCreators(sendMessageToBot, dispatch),
    sendClientMessage: bindActionCreators(sendClientMessage, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
