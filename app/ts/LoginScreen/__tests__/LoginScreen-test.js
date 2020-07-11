/* eslint-disable prettier/prettier */
import React from 'react';
import renderer from 'react-test-renderer';

import LoginScreen from '../LoginScreen';

describe('Rendering basic demo screen', () => {
  it('renders correctly', () => {
    const screen = renderer.create(<LoginScreen />);

    expect(screen.toJSON()).toMatchSnapshot();
  });
});
