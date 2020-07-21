/* eslint-disable prettier/prettier */
import React from 'react';
import renderer from 'react-test-renderer';

import RegistrationScreen from '../RegistrationScreen';

describe('Rendering basic demo screen', () => {
  it('renders correctly', () => {
    const screen = renderer.create(<RegistrationScreen />);

    expect(screen.toJSON()).toMatchSnapshot();
  });
});
