/* eslint-disable prettier/prettier */
import React from 'react';
import renderer from 'react-test-renderer';

import SignInScreen from '../SignInScreen';

describe('Rendering basic demo screen', () => {
  it('renders correctly', () => {
    const screen = renderer.create(<SignInScreen />);

    expect(screen.toJSON()).toMatchSnapshot();
  });
});
