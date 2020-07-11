/* eslint-disable prettier/prettier */
import React from 'react';
import renderer from 'react-test-renderer';

import App from '../App';

describe('Rendering basic demo screen', () => {
  it('renders correctly', () => {
    const screen = renderer.create(<App />);

    expect(screen.toJSON()).toMatchSnapshot();
  });
});
