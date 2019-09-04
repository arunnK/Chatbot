import { create, act } from 'react-test-renderer';
import React from 'react';
import SignIn from './index';

let root;

test('sign in page', () => {
  act(() => {
    root = create(<SignIn />);
  });
  // make assertions on root
  expect(root.toJSON()).toMatchSnapshot();
});
