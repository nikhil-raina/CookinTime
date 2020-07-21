/* eslint-disable prettier/prettier */
import React from 'react';
import renderer from 'react-test-renderer';

import RegistrationScreen_2 from '../RegistrationScreen_2';

describe('Rendering basic demo screen', () => {
  it('renders correctly', () => {
    const screen = renderer.create(<RegistrationScreen_2 />);

    expect(screen.toJSON()).toMatchSnapshot();
  });
});
