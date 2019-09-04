import { create, act } from 'react-test-renderer';
import React from 'react';
import ChatUI from './index';
// in your test:
const serverMessages = ['hey', 'hi'];
const clientMessages = ['hey', 'hi'];

let root;

test('chat page', () => {
  act(() => {
    root = create(<ChatUI serverMessages={serverMessages} clientMessages={clientMessages} />);
  });
  // make assertions on root
  expect(root.toJSON()).toMatchSnapshot();
});
